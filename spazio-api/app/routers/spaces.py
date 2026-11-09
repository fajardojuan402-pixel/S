"""BusquedaRouter (SDD M-01): búsqueda por ubicación, detalle y geocodificación."""
from fastapi import APIRouter, Query

from app.deps import CurrentUser, DbSession
from app.schemas.publish import CreateSpaceRequest, CreateSpaceResponse
from app.schemas.spaces import GeocodeResult, SpaceDetail, SpaceSummary
from app.services import geocoding, publish_service, space_service

router = APIRouter(tags=["spaces"])


@router.get("/geocode", response_model=GeocodeResult)
def geocode(q: str = Query(...)) -> GeocodeResult:
    """RF-01: convierte una dirección/barrio en coordenadas (Nominatim)."""
    lat, lng, label = geocoding.geocode(q)
    return GeocodeResult(lat=lat, lng=lng, label=label)


@router.get("/spaces/search", response_model=list[SpaceSummary])
def search_spaces(
    db: DbSession,
    _user: CurrentUser,
    q: str = Query(""),
    radioKm: float = Query(1, gt=0),
    lat: float | None = Query(None),
    lng: float | None = Query(None),
) -> list[SpaceSummary]:
    """RF-01: lista de espacios dentro del radio, ordenados por distancia."""
    if lat is None or lng is None:
        lat, lng, _ = geocoding.geocode(q)
    return space_service.search(db, q, lat, lng, radioKm)


@router.post("/spaces", response_model=CreateSpaceResponse, status_code=201)
def create_space(body: CreateSpaceRequest, db: DbSession, user: CurrentUser) -> CreateSpaceResponse:
    """RF-03/RF-05: publica un espacio con su disponibilidad (sin traslapes)."""
    return publish_service.create_space(db, user, body)


@router.get("/spaces/{space_id}", response_model=SpaceDetail)
def get_space(space_id: str, db: DbSession, _user: CurrentUser) -> SpaceDetail:
    """Detalle de un espacio (fotos, descripción, periodos)."""
    return space_service.get_detail(db, space_id)
