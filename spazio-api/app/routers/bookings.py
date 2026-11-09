"""ReservaRouter (SDD M-03): crear, pagar, consultar, liberar y listar reservas."""
from fastapi import APIRouter, Query, Response

from app.deps import CurrentUser, DbSession
from app.schemas.bookings import (
    BookingStatus,
    CancelPreviewResponse,
    CancelResponse,
    CreateBookingRequest,
    CreateBookingResponse,
    MyBookingsResponse,
    PayRequest,
    PayResponse,
    WompiCheckoutResponse,
    WompiProcessRequest,
    WompiProcessResponse,
)
from app.services import booking_service

router = APIRouter(prefix="/bookings", tags=["bookings"])


@router.post("", response_model=CreateBookingResponse, status_code=201)
def create_booking(body: CreateBookingRequest, db: DbSession, user: CurrentUser) -> CreateBookingResponse:
    """RF-06: crea la reserva con retención de 10 min."""
    return booking_service.create_booking(db, user.id, body.spaceId, body.inicio, body.fin)


@router.post("/{booking_id}/pay", response_model=PayResponse)
def pay_booking(booking_id: str, body: PayRequest, db: DbSession, user: CurrentUser) -> PayResponse:
    """RF-07: pago simulado por escenario (modo demo sin Wompi)."""
    return booking_service.pay_booking(db, user.id, booking_id, body.escenario)


@router.post("/{booking_id}/wompi/checkout", response_model=WompiCheckoutResponse)
def wompi_checkout(booking_id: str, db: DbSession, user: CurrentUser) -> WompiCheckoutResponse:
    """RF-06: datos firmados para abrir el widget de Wompi (sandbox)."""
    return booking_service.wompi_checkout(db, user.id, booking_id)


@router.post("/{booking_id}/wompi/process", response_model=WompiProcessResponse)
def wompi_process(
    booking_id: str, body: WompiProcessRequest, db: DbSession, user: CurrentUser
) -> WompiProcessResponse:
    """RF-07: verifica la transacción en Wompi y confirma/expira la reserva."""
    return booking_service.wompi_process(db, user.id, booking_id, body.transactionId, body.paymentMethod)


@router.get("/me", response_model=MyBookingsResponse)
def my_bookings(db: DbSession, user: CurrentUser, estado: str | None = Query(None)) -> MyBookingsResponse:
    """RF-15: lista de mis reservas con contadores."""
    return booking_service.my_bookings(db, user.id, estado)


@router.get("/{booking_id}", response_model=BookingStatus)
def get_booking(booking_id: str, db: DbSession, user: CurrentUser) -> BookingStatus:
    """Estado de la reserva + segundos restantes de retención."""
    return booking_service.get_booking(db, user.id, booking_id)


@router.delete("/{booking_id}/hold", status_code=204)
def release_hold(booking_id: str, db: DbSession, user: CurrentUser) -> Response:
    """Libera la retención ('Cambiar horario')."""
    booking_service.release_hold(db, user.id, booking_id)
    return Response(status_code=204)


@router.post("/{booking_id}/cancel/preview", response_model=CancelPreviewResponse)
def cancel_preview(booking_id: str, db: DbSession, user: CurrentUser) -> CancelPreviewResponse:
    """RF-08: reembolso que se aplicaría al cancelar (RN-12), sin cancelar."""
    return booking_service.cancel_preview(db, user.id, booking_id)


@router.post("/{booking_id}/cancel", response_model=CancelResponse)
def cancel_booking(booking_id: str, db: DbSession, user: CurrentUser) -> CancelResponse:
    """RF-08: cancela la reserva y registra el reembolso simulado."""
    return booking_service.cancel_booking(db, user.id, booking_id)
