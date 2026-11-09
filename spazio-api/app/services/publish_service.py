"""PublicacionService + DisponibilidadService (SDD M-02): crear publicación,
geocodificar, validar traslapes (RN-14) y activar el rol anfitrión (RF-03)."""
from datetime import datetime

from sqlalchemy import func
from sqlalchemy.orm import Session

from app.errors import ApiError
from app.models import Availability, Space, User
from app.schemas.publish import CreateSpaceRequest, CreateSpaceResponse, PeriodoInput
from app.services import geocoding


def _to_dt(fecha: str, hora: str) -> datetime:
    """Combina 'YYYY-MM-DD' + 'HH:MM' en un datetime."""
    return datetime.fromisoformat(f"{fecha}T{hora}")


def _validar_periodos(periodos: list[PeriodoInput]) -> list[tuple[datetime, datetime]]:
    """RF-05/RN-14: convierte y valida que los periodos no se traslapen.

    Lanza 422 con el conflicto si hay traslape, o si un rango es inválido.
    """
    rangos: list[tuple[datetime, datetime]] = []
    for p in periodos:
        ini, fin = _to_dt(p.fecha, p.desde), _to_dt(p.fecha, p.hasta)
        if fin <= ini:
            raise ApiError(
                422, "invalid_period",
                f"El periodo {p.desde}–{p.hasta} es inválido: la hora de fin debe ser posterior.",
            )
        for r_ini, r_fin in rangos:
            # Dos rangos se traslapan si cada inicio es anterior al fin del otro.
            if ini < r_fin and r_ini < fin:
                raise ApiError(
                    422, "overlap",
                    f"El periodo {p.desde}–{p.hasta} se traslapa con otro del mismo día.",
                )
        rangos.append((ini, fin))
    return rangos


def create_space(db: Session, host: User, body: CreateSpaceRequest) -> CreateSpaceResponse:
    """RF-03: crea la publicación y activa el rol anfitrión en la primera."""
    rangos = _validar_periodos(body.periodos)

    # Usa las coordenadas del pin si vienen; si no, geocodifica la dirección.
    if body.lat is not None and body.lng is not None:
        lat, lng = body.lat, body.lng
    else:
        lat, lng, _ = geocoding.geocode(body.direccion)
    rol_antes = host.is_host

    space = Space(
        host_id=host.id,
        category="PARKING",
        title="Parqueadero cubierto" if body.cubierto else "Parqueadero",
        address=body.direccion.strip(),
        neighborhood=None,
        location=func.ST_SetSRID(func.ST_MakePoint(lng, lat), 4326),
        price_per_hour=body.precioHora,
        vehicle_type=body.tipoVehiculo,
        is_covered=body.cubierto,
        conditions=body.condiciones,
        photos=body.fotos[:3],
        is_active=True,
    )
    db.add(space)
    db.flush()  # obtiene space.id y dispara el trigger de activación de rol

    for ini, fin in rangos:
        db.add(Availability(space_id=space.id, start_time=ini, end_time=fin))

    db.commit()

    # El trigger de BD actualizó users.is_host; refrescamos para leer el valor real.
    db.refresh(host)
    activado_ahora = (not rol_antes) and host.is_host

    return CreateSpaceResponse(id=str(space.id), rolAnfitrionActivado=activado_ahora)
