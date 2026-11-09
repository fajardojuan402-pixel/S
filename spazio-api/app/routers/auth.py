"""AuthRouter (SDD M-05): endpoints de registro e inicio de sesión."""
from fastapi import APIRouter

from app.deps import DbSession
from app.schemas.auth import LoginRequest, LoginResponse, RegisterRequest
from app.services import auth_service

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/register", response_model=LoginResponse, status_code=201)
def register(body: RegisterRequest, db: DbSession) -> LoginResponse:
    """RF-12 Registrarse en SPAZIO."""
    return auth_service.register(db, body.nombre, body.email, body.password)


@router.post("/login", response_model=LoginResponse)
def login(body: LoginRequest, db: DbSession) -> LoginResponse:
    """RF-13 Iniciar sesión."""
    return auth_service.login(db, body.email, body.password)
