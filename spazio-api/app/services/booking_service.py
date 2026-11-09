"""ReservaService + ModuloRetencion (SDD M-03): crear, pagar, consultar,
liberar y listar reservas. Pago y reembolso simulados.
"""
from datetime import datetime, timedelta, timezone

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.config import settings
from app.errors import ApiError
from app.models import Booking, Payment, Space
from app.schemas.bookings import (
    BookingEspacio,
    BookingListItem,
    BookingStatus,
    BookingsContadores,
    CancelPreviewResponse,
    CancelResponse,
    CreateBookingResponse,
    MyBookingsResponse,
    PayResponse,
)
from app.services import payment_gateway
from app.services.booking_mapping import estado_api


def _now() -> datetime:
    return datetime.now(timezone.utc)


def _horas(inicio: datetime, fin: datetime) -> float:
    return (fin - inicio).total_seconds() / 3600


def _espacio_dto(space: Space) -> BookingEspacio:
    return BookingEspacio(
        id=str(space.id),
        titulo=space.title or "Parqueadero",
        direccion=space.address,
        foto=space.photos[0] if space.photos else "",
    )


def _expirar_si_vencio(db: Session, b: Booking) -> None:
    """Expiración perezosa (RF-07): si venció la retención y sigue pendiente,
    la marca EXPIRED."""
    if b.status == "PENDING_PAYMENT" and b.locked_until < _now():
        b.status = "EXPIRED"
        db.commit()


def create_booking(db: Session, user_id, space_id: str, inicio: str, fin: str) -> CreateBookingResponse:
    """RF-06: crea la reserva en PENDING_PAYMENT con retención de 10 min (RF-07).
    El monto es precio_hora × horas (RN-11)."""
    space = db.get(Space, space_id)
    if space is None or not space.is_active:
        raise ApiError(404, "not_found", "Espacio no encontrado.")

    ini = datetime.fromisoformat(inicio)
    f = datetime.fromisoformat(fin)
    if f <= ini:
        raise ApiError(422, "invalid_range", "La hora de salida debe ser posterior a la de entrada.")

    # RN-14: no permitir dos reservas activas que se crucen en el mismo espacio.
    activas = db.scalars(
        select(Booking).where(
            Booking.space_id == space.id,
            Booking.status.in_(["PENDING_PAYMENT", "CONFIRMED"]),
        )
    ).all()
    for a in activas:
        if ini < a.end_time.replace(tzinfo=None) and a.start_time.replace(tzinfo=None) < f:
            raise ApiError(409, "not_available", "Ese horario ya no está disponible.")

    horas = _horas(ini, f)
    monto = round(float(space.price_per_hour) * horas, 2)
    locked_until = _now() + timedelta(minutes=settings.booking_hold_minutes)

    booking = Booking(
        space_id=space.id,
        user_id=user_id,
        start_time=ini,
        end_time=f,
        hourly_price_snapshot=space.price_per_hour,
        total_amount=monto,
        status="PENDING_PAYMENT",
        locked_until=locked_until,
    )
    db.add(booking)
    db.flush()
    # Crea la transacción de pago asociada (pendiente).
    db.add(Payment(booking_id=booking.id, amount=monto, status="PENDING"))
    db.commit()
    db.refresh(booking)

    return CreateBookingResponse(
        id=str(booking.id),
        expiresAt=locked_until.isoformat(),
        monto=monto,
    )


def pay_booking(db: Session, user_id, booking_id: str, escenario: str) -> PayResponse:
    """RF-07: aplica el pago simulado. APROBADO -> CONFIRMED;
    RECHAZADO/SIN_RESPUESTA -> EXPIRED (libera el periodo)."""
    booking = db.get(Booking, booking_id)
    if booking is None or str(booking.user_id) != str(user_id):
        raise ApiError(404, "not_found", "Reserva no encontrada.")

    _expirar_si_vencio(db, booking)
    if booking.status == "EXPIRED":
        return PayResponse(estado="EXPIRADA")
    if booking.status != "PENDING_PAYMENT":
        return PayResponse(estado=estado_api(booking.status))

    resultado = payment_gateway.cobrar(escenario)
    payment = db.scalar(select(Payment).where(Payment.booking_id == booking.id))

    if resultado.aprobado:
        booking.status = "CONFIRMED"
        if payment:
            payment.status = "APPROVED"
            payment.gateway_reference = resultado.referencia
            payment.payment_method = resultado.metodo
    else:
        booking.status = "EXPIRED"
        if payment:
            payment.status = "REJECTED"
            payment.gateway_reference = resultado.referencia

    db.commit()
    return PayResponse(estado=estado_api(booking.status))


def get_booking(db: Session, user_id, booking_id: str) -> BookingStatus:
    """GET /bookings/{id}: estado + segundos restantes de retención (para el countdown)."""
    booking = db.get(Booking, booking_id)
    if booking is None or str(booking.user_id) != str(user_id):
        raise ApiError(404, "not_found", "Reserva no encontrada.")

    _expirar_si_vencio(db, booking)
    space = db.get(Space, booking.space_id)

    restantes = 0
    if booking.status == "PENDING_PAYMENT":
        restantes = max(0, int((booking.locked_until - _now()).total_seconds()))

    return BookingStatus(
        id=str(booking.id),
        estado=estado_api(booking.status),
        segundosRestantes=restantes,
        espacio=_espacio_dto(space),
        inicio=booking.start_time.strftime("%Y-%m-%dT%H:%M"),
        fin=booking.end_time.strftime("%Y-%m-%dT%H:%M"),
        monto=float(booking.total_amount),
    )


def release_hold(db: Session, user_id, booking_id: str) -> None:
    """DELETE /bookings/{id}/hold: libera la retención ('Cambiar horario')."""
    booking = db.get(Booking, booking_id)
    if booking is None or str(booking.user_id) != str(user_id):
        raise ApiError(404, "not_found", "Reserva no encontrada.")
    if booking.status == "PENDING_PAYMENT":
        booking.status = "EXPIRED"
        db.commit()


def _motivo(estado_db: str) -> str | None:
    return {
        "CONFIRMED": "Tu espacio está reservado",
        "CANCELLED": "Reembolso según anticipación",
        "EXPIRED": "Periodo liberado",
    }.get(estado_db)


def my_bookings(db: Session, user_id, estado: str | None) -> MyBookingsResponse:
    """RF-15: lista de reservas del usuario con contadores. Expira las vencidas."""
    bookings = db.scalars(
        select(Booking).where(Booking.user_id == user_id).order_by(Booking.created_at.desc())
    ).all()

    # Expira perezosamente las pendientes vencidas antes de listar.
    changed = False
    for b in bookings:
        if b.status == "PENDING_PAYMENT" and b.locked_until < _now():
            b.status = "EXPIRED"
            changed = True
    if changed:
        db.commit()

    contadores = BookingsContadores(
        todas=len(bookings),
        confirmada=sum(1 for b in bookings if b.status == "CONFIRMED"),
        cancelada=sum(1 for b in bookings if b.status == "CANCELLED"),
        expirada=sum(1 for b in bookings if b.status == "EXPIRED"),
    )

    filtro_map = {"confirmada": "CONFIRMED", "cancelada": "CANCELLED", "expirada": "EXPIRED"}
    objetivo = filtro_map.get(estado or "todas")

    items: list[BookingListItem] = []
    for b in bookings:
        if objetivo and b.status != objetivo:
            continue
        # No mostramos las pendientes de pago en "Mis reservas".
        if b.status == "PENDING_PAYMENT":
            continue
        space = db.get(Space, b.space_id)
        ini = b.start_time
        fin = b.end_time
        horas_para_inicio = int((ini.replace(tzinfo=timezone.utc) - _now()).total_seconds() // 3600)
        items.append(
            BookingListItem(
                id=str(b.id),
                espacio=_espacio_dto(space),
                ciudad="Bogotá",
                fecha=ini.strftime("%Y-%m-%d"),
                desde=ini.strftime("%H:%M"),
                hasta=fin.strftime("%H:%M"),
                horas=int(round(_horas(ini, fin))),
                monto=float(b.total_amount),
                estado=estado_api(b.status),
                motivo=_motivo(b.status),
                horasParaInicio=horas_para_inicio,
            )
        )

    return MyBookingsResponse(items=items, contadores=contadores)


def _horas_para_inicio(booking: Booking) -> int:
    """Horas (enteras) desde ahora hasta el inicio del periodo reservado."""
    inicio = booking.start_time.replace(tzinfo=timezone.utc)
    return int((inicio - _now()).total_seconds() // 3600)


def _reembolso(monto: float, horas_para_inicio: int) -> tuple[int, float]:
    """RN-12: 100% si faltan 24 h o más; 0% si falta menos."""
    if horas_para_inicio >= 24:
        return 100, round(monto, 2)
    return 0, 0.0


def cancel_preview(db: Session, user_id, booking_id: str) -> CancelPreviewResponse:
    """RF-08: muestra el reembolso que se aplicaría, sin cancelar."""
    booking = db.get(Booking, booking_id)
    if booking is None or str(booking.user_id) != str(user_id):
        raise ApiError(404, "not_found", "Reserva no encontrada.")
    if booking.status != "CONFIRMED":
        raise ApiError(409, "not_cancelable", "Solo se pueden cancelar reservas confirmadas.")

    horas = _horas_para_inicio(booking)
    pct, monto = _reembolso(float(booking.total_amount), horas)
    return CancelPreviewResponse(pct=pct, monto=monto, horasParaInicio=horas)


def cancel_booking(db: Session, user_id, booking_id: str) -> CancelResponse:
    """RF-08: cancela una reserva confirmada y registra el reembolso (RN-12)."""
    booking = db.get(Booking, booking_id)
    if booking is None or str(booking.user_id) != str(user_id):
        raise ApiError(404, "not_found", "Reserva no encontrada.")
    if booking.status != "CONFIRMED":
        raise ApiError(409, "not_cancelable", "Solo se pueden cancelar reservas confirmadas.")

    horas = _horas_para_inicio(booking)
    pct, monto = _reembolso(float(booking.total_amount), horas)

    booking.status = "CANCELLED"
    booking.cancelled_at = _now()

    payment = db.scalar(select(Payment).where(Payment.booking_id == booking.id))
    if payment is not None:
        if pct == 100:
            payment.status = "REFUNDED"
            payment.refund_amount = payment_gateway.reembolsar(monto)
        else:
            payment.refund_amount = 0

    db.commit()
    return CancelResponse(estado="CANCELADA", reembolso=monto)
