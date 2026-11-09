"""Schemas para publicar un espacio (RF-03) y definir disponibilidad (RF-05)."""
from pydantic import BaseModel, Field


class PeriodoInput(BaseModel):
    fecha: str  # "2026-10-14"
    desde: str  # "08:00"
    hasta: str  # "18:00"


class CreateSpaceRequest(BaseModel):
    direccion: str = Field(min_length=1)
    tipoVehiculo: str = "carro"  # carro | moto | ambos
    precioHora: float = Field(gt=0)
    cubierto: bool = True
    condiciones: str = ""
    periodos: list[PeriodoInput] = Field(default_factory=list)
    fotos: list[str] = Field(default_factory=list, max_length=3)


class CreateSpaceResponse(BaseModel):
    id: str
    rolAnfitrionActivado: bool
