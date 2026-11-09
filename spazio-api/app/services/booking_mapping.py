"""Traducción de estados de reserva BD (inglés) ↔ contrato (español/MAYÚSCULAS)."""

# BD (booking_status) -> contrato del frontend
DB_TO_API = {
    "PENDING_PAYMENT": "PENDIENTE_PAGO",
    "CONFIRMED": "CONFIRMADA",
    "CANCELLED": "CANCELADA",
    "EXPIRED": "EXPIRADA",
}


def estado_api(db_status: str) -> str:
    return DB_TO_API.get(db_status, db_status)
