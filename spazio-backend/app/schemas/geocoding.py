# app/schemas/geocoding.py
"""Esquemas Pydantic para los endpoints de geocodificación."""
from pydantic import BaseModel


class GeocodeResult(BaseModel):
    """Coordenadas y dirección normalizada para una dirección consultada."""

    address: str
    latitude: float
    longitude: float


class AddressSuggestion(BaseModel):
    """Una sugerencia de autocompletar de direcciones."""

    display_name: str
    latitude: float
    longitude: float
