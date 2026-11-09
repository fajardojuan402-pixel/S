"""Schema común de error: { code, message, field? } (igual que espera el front)."""
from pydantic import BaseModel


class ErrorBody(BaseModel):
    code: str
    message: str
    field: str | None = None
