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

    # ¿Viene como "lat,lng" (ubicación del navegador)?
    if "," in q:
        parts = q.split(",")
        try:
            lat, lng = float(parts[0]), float(parts[1])
            return (lat, lng, q)
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
