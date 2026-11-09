"""Helpers para traducir modelos de BD (inglés) al contrato del front (español)."""
from datetime import datetime

from app.models import Availability, Space


def horario_label(desde: str, hasta: str) -> str:
    """'08:00','18:00' -> '8:00 – 18:00'. Horario corrido 00:00–23:59 -> '24 horas'."""
    if desde == "00:00" and hasta in ("23:59", "24:00"):
        return "24 horas"
    # Quita el cero a la izquierda de la hora (08:00 -> 8:00).
    d = desde.lstrip("0") or "0:00"
    h = hasta.lstrip("0") or "0:00"
    return f"{d} – {h}"


def hhmm(dt: datetime) -> str:
    return dt.strftime("%H:%M")


def isodt(dt: datetime) -> str:
    """Fecha+hora en formato que usa el front: 'YYYY-MM-DDTHH:MM'."""
    return dt.strftime("%Y-%m-%dT%H:%M")


def apertura_from_availabilities(avs: list[Availability]) -> tuple[str, str]:
    """Deriva el rango de apertura (min inicio, max fin) de los periodos."""
    if not avs:
        return ("00:00", "23:59")
    desde = min(hhmm(a.start_time) for a in avs)
    hasta = max(hhmm(a.end_time) for a in avs)
    return (desde, hasta)


def vehiculo_label(space: Space) -> str:
    return space.vehicle_type or "carro"
