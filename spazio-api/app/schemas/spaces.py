"""Schemas de espacios y geocodificación (RF-01, RF-03).

Contrato en español/camelCase igual que consume el frontend:
titulo, precioHora, distanciaKm, tipoVehiculo, cubierto, foto, etc.
"""
from pydantic import BaseModel


class GeocodeResult(BaseModel):
    lat: float
    lng: float
    label: str


class Periodo(BaseModel):
    inicio: str  # ISO "2026-10-14T08:00"
    fin: str


class HorarioApertura(BaseModel):
    desde: str  # "08:00"
    hasta: str  # "18:00"


class SpaceSummary(BaseModel):
    id: str
    titulo: str
    direccion: str
    distanciaKm: float
    horario: str
    precioHora: float
    tipoVehiculo: str
    cubierto: bool
    foto: str
    lat: float
    lng: float


class SpaceDetail(SpaceSummary):
    descripcion: str
    fotos: list[str]
    periodos: list[Periodo]
    horarioApertura: HorarioApertura
