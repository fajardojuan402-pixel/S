"""Punto de entrada de la API de SPAZIO (FastAPI)."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.errors import register_error_handlers
from app.routers import auth, bookings, spaces

app = FastAPI(
    title="SPAZIO API",
    version="1.0.0",
    description="Backend del marketplace de parqueaderos SPAZIO (incremento 1).",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

register_error_handlers(app)


@app.get("/health", tags=["infra"])
def health() -> dict[str, str]:
    """Verificación simple de que el servicio está vivo."""
    return {"status": "ok"}


app.include_router(auth.router)
app.include_router(spaces.router)
app.include_router(bookings.router)
