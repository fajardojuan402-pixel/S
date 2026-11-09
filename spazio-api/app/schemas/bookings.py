"""Schemas de reservas y pago (RF-06, RF-07, RF-15).

Los estados se exponen en el vocabulario del SDD/frontend:
PENDIENTE_PAGO / CONFIRMADA / CANCELADA / EXPIRADA (traducidos desde la BD).
"""
from pydantic import BaseModel, Field


class CreateBookingRequest(BaseModel):
    spaceId: str
    inicio: str  # "2026-10-14T10:00"
    fin: str


class CreateBookingResponse(BaseModel):
    id: str
    expiresAt: str  # ISO
    monto: float


class PayRequest(BaseModel):
    escenario: str = Field(pattern="^(APROBADO|RECHAZADO|SIN_RESPUESTA)$")


class PayResponse(BaseModel):
    estado: str


# --- Wompi (sandbox) ---

class WompiCheckoutResponse(BaseModel):
    """Datos que el frontend necesita para abrir el widget de Wompi."""
    publicKey: str
    reference: str
    amountInCents: int
    currency: str
    signature: str


class WompiProcessRequest(BaseModel):
    """Lo que el frontend envía tras pagar en el widget."""
    transactionId: str
    paymentMethod: str | None = None


class WompiProcessResponse(BaseModel):
    estado: str  # CONFIRMADA / EXPIRADA / PENDIENTE_PAGO
    wompiStatus: str  # APPROVED / DECLINED / VOIDED / ERROR / PENDING


class BookingEspacio(BaseModel):
    id: str
    titulo: str
    direccion: str
    foto: str


class BookingStatus(BaseModel):
    id: str
    estado: str
    segundosRestantes: int
    espacio: BookingEspacio
    inicio: str
    fin: str
    monto: float


class BookingListItem(BaseModel):
    id: str
    espacio: BookingEspacio
    ciudad: str
    fecha: str
    desde: str
    hasta: str
    horas: int
    monto: float
    estado: str
    motivo: str | None = None
    horasParaInicio: int


class BookingsContadores(BaseModel):
    todas: int
    confirmada: int
    cancelada: int
    expirada: int


class MyBookingsResponse(BaseModel):
    items: list[BookingListItem]
    contadores: BookingsContadores


class CancelPreviewResponse(BaseModel):
    pct: int
    monto: float
    horasParaInicio: int


class CancelResponse(BaseModel):
    estado: str
    reembolso: float
