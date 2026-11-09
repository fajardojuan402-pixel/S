"""BusquedaService + detalle de espacios (SDD M-01). Usa PostGIS para el radio."""
from geoalchemy2 import Geography, Geometry
from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.errors import ApiError
from app.models import Availability, Space
from app.schemas.spaces import (
    HorarioApertura,
    Periodo,
    SpaceDetail,
    SpaceSummary,
)
from app.services.formatting import (
    apertura_from_availabilities,
    horario_label,
    isodt,
    vehiculo_label,
)


def search(db: Session, q: str, lat: float, lng: float, radio_km: float) -> list[SpaceSummary]:
    """RF-01: espacios activos dentro del radio (km), ordenados por distancia.

    Usa ST_DWithin (aprovecha el índice GIST) y ST_Distance para la distancia.
    """
    # Punto de referencia como GEOGRAPHY (orden X=lng, Y=lat).
    point = func.ST_SetSRID(func.ST_MakePoint(lng, lat), 4326).cast(Geography)
    distancia_m = func.ST_Distance(Space.location, point)
    # ST_Y/ST_X requieren geometry; casteamos la geografía a geometry.
    lat_col = func.ST_Y(Space.location.cast(Geometry))
    lng_col = func.ST_X(Space.location.cast(Geometry))

    stmt = (
        select(Space, distancia_m.label("dist_m"), lat_col.label("lat"), lng_col.label("lng"))
        .where(Space.is_active.is_(True))
        .where(func.ST_DWithin(Space.location, point, radio_km * 1000))
        .order_by(distancia_m.asc())
    )
    rows = db.execute(stmt).all()

    out: list[SpaceSummary] = []
    for space, dist_m, slat, slng in rows:
        desde, hasta = apertura_from_availabilities(list(space.availabilities))
        out.append(
            SpaceSummary(
                id=str(space.id),
                titulo=space.title or "Parqueadero",
                direccion=space.address,
                distanciaKm=round(float(dist_m or 0) / 1000, 1),
                horario=horario_label(desde, hasta),
                precioHora=float(space.price_per_hour),
                tipoVehiculo=vehiculo_label(space),
                cubierto=space.is_covered,
                foto=space.photos[0] if space.photos else "",
                lat=float(slat),
                lng=float(slng),
            )
        )
    return out


def get_detail(db: Session, space_id: str) -> SpaceDetail:
    """RF-01/RF-06: detalle del espacio con fotos y periodos de disponibilidad."""
    row = db.execute(
        select(
            Space,
            func.ST_Y(Space.location.cast(Geometry)),
            func.ST_X(Space.location.cast(Geometry)),
        ).where(Space.id == space_id)
    ).one_or_none()

    if row is None or not row[0].is_active:
        raise ApiError(404, "not_found", "Espacio no encontrado.")

    space: Space = row[0]
    slat, slng = float(row[1]), float(row[2])

    avs: list[Availability] = sorted(space.availabilities, key=lambda a: a.start_time)
    desde, hasta = apertura_from_availabilities(avs)

    return SpaceDetail(
        id=str(space.id),
        titulo=space.title or "Parqueadero",
        direccion=space.address,
        distanciaKm=0.0,
        horario=horario_label(desde, hasta),
        precioHora=float(space.price_per_hour),
        tipoVehiculo=vehiculo_label(space),
        cubierto=space.is_covered,
        foto=space.photos[0] if space.photos else "",
        lat=slat,
        lng=slng,
        descripcion=space.conditions or "",
        fotos=list(space.photos or []),
        periodos=[Periodo(inicio=isodt(a.start_time), fin=isodt(a.end_time)) for a in avs],
        horarioApertura=HorarioApertura(desde=desde, hasta=hasta),
    )
