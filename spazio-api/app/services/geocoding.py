"""AdaptadorGeocodificacion (SDD): dirección -> coordenadas vía Nominatim, con
caché en memoria para respetar la política de uso de OpenStreetMap (RNF-06).

Si la entrada es "lat,lng" se devuelve tal cual (ubicación del navegador).
Si Nominatim falla o no hay resultado, se cae al centro de Bogotá.
"""
import httpx

from app.config import settings

# Centro aproximado de Bogotá, como respaldo.
BOGOTA = (4.6097, -74.0817)

_cache: dict[str, tuple[float, float, str]] = {}


def geocode(q: str) -> tuple[float, float, str]:
    """Devuelve (lat, lng, label) para una dirección/barrio o un par 'lat,lng'."""
    q = (q or "").strip()
    if not q:
        return (*BOGOTA, "Bogotá")

    # ¿Viene como "lat,lng" (ubicación del navegador)? Solo si AMBAS partes
    # son números (así "Calle 100, Bogotá" no se confunde con coordenadas).
    if "," in q:
        parts = [p.strip() for p in q.split(",")]
        if len(parts) == 2:
            try:
                return (float(parts[0]), float(parts[1]), q)
            except ValueError:
                pass  # no eran coordenadas; seguimos con geocodificación

    key = q.lower()
    if key in _cache:
        return _cache[key]

    try:
        resp = httpx.get(
            f"{settings.nominatim_url}/search",
            params={"q": f"{q}, Bogotá, Colombia", "format": "json", "limit": 1},
            headers={"User-Agent": "SPAZIO/1.0 (proyecto academico)"},
            timeout=5.0,
        )
        data = resp.json()
        if data:
            lat = float(data[0]["lat"])
            lng = float(data[0]["lon"])
            label = data[0].get("display_name", q)
            result = (lat, lng, label)
            _cache[key] = result
            return result
    except (httpx.HTTPError, KeyError, ValueError, IndexError):
        pass

    # Respaldo: centro de Bogotá.
    return (*BOGOTA, q)


# Caja contenedora de Bogotá (viewbox) para sesgar las sugerencias a la ciudad.
# left, top, right, bottom (lon/lat).
_BOGOTA_VIEWBOX = "-74.25,4.84,-73.99,4.45"


def suggest(q: str, limit: int = 6) -> list[dict]:
    """Devuelve sugerencias de direcciones para autocompletar (RF-01).

    Cada sugerencia: { label, lat, lng }. Sesgado a Bogotá con viewbox.
    """
    q = (q or "").strip()
    if len(q) < 3:
        return []

    key = f"suggest::{q.lower()}"
    cached = _cache.get(key)
    if cached is not None:
        return cached  # type: ignore[return-value]

    try:
        resp = httpx.get(
            f"{settings.nominatim_url}/search",
            params={
                "q": q,
                "format": "json",
                "addressdetails": 0,
                "limit": limit,
                "countrycodes": "co",
                "viewbox": _BOGOTA_VIEWBOX,
                "bounded": 1,
            },
            headers={"User-Agent": "SPAZIO/1.0 (proyecto academico)"},
            timeout=5.0,
        )
        data = resp.json()
        sugerencias = [
            {
                "label": item.get("display_name", ""),
                "lat": float(item["lat"]),
                "lng": float(item["lon"]),
            }
            for item in data
        ]
        _cache[key] = sugerencias  # type: ignore[assignment]
        return sugerencias
    except (httpx.HTTPError, KeyError, ValueError, IndexError):
        return []


def reverse(lat: float, lng: float) -> str:
    """Geocodificación inversa: coordenadas -> dirección legible (Nominatim)."""
    key = f"rev::{round(lat, 5)},{round(lng, 5)}"
    cached = _cache.get(key)
    if cached is not None:
        return cached  # type: ignore[return-value]
    try:
        resp = httpx.get(
            f"{settings.nominatim_url}/reverse",
            params={"lat": lat, "lon": lng, "format": "json"},
            headers={"User-Agent": "SPAZIO/1.0 (proyecto academico)"},
            timeout=5.0,
        )
        data = resp.json()
        label = data.get("display_name") or f"{lat:.5f}, {lng:.5f}"
        _cache[key] = label  # type: ignore[assignment]
        return label
    except (httpx.HTTPError, KeyError, ValueError):
        return f"{lat:.5f}, {lng:.5f}"
