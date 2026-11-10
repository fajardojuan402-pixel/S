# app/api/v1/endpoints/geocoding.py
"""
Endpoints de geocodificación (OpenStreetMap / Nominatim), restringidos a Bogotá.

Usados por el frontend para:
  - GET /geocode          -> dirección a coordenadas (centrar el mapa en la búsqueda)
  - GET /geocode/suggest  -> autocompletar de direcciones
  - GET /geocode/reverse  -> coordenadas a dirección (al mover el pin en Publicar)
"""
from typing import List

from fastapi import APIRouter, Query

from app.schemas.geocoding import AddressSuggestion, GeocodeResult
from app.services import geocoding_service

router = APIRouter()


@router.get("", response_model=GeocodeResult, summary="Dirección a coordenadas")
async def geocode(
    q: str = Query(..., min_length=3, description="Dirección a geocodificar"),
):
    """Convierte una dirección de texto en coordenadas dentro de Bogotá."""
    return await geocoding_service.geocode_address(q)


@router.get(
    "/suggest",
    response_model=List[AddressSuggestion],
    summary="Autocompletar de direcciones",
)
async def suggest(
    q: str = Query("", description="Texto parcial de la dirección"),
    limit: int = Query(5, ge=1, le=10),
):
    """Devuelve sugerencias de direcciones para autocompletar (mínimo 3 caracteres)."""
    return await geocoding_service.suggest_addresses(q, limit)


@router.get(
    "/reverse", response_model=GeocodeResult, summary="Coordenadas a dirección"
)
async def reverse(
    latitude: float = Query(..., ge=-90, le=90),
    longitude: float = Query(..., ge=-180, le=180),
):
    """Convierte coordenadas en una dirección legible (geocodificación inversa)."""
    return await geocoding_service.reverse_geocode(latitude, longitude)
