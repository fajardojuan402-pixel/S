"""AuthService (SDD): registro e inicio de sesión. Lógica de dominio de M-05."""
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.errors import ApiError
from app.models import User
from app.schemas.auth import LoginResponse, AuthUser
from app.security import create_access_token, hash_password, verify_password


def _to_response(user: User) -> LoginResponse:
    token = create_access_token(str(user.id))
    return LoginResponse(
        token=token,
        user=AuthUser(id=str(user.id), nombre=user.full_name, rolAnfitrion=user.is_host),
    )


def register(db: Session, nombre: str, email: str, password: str) -> LoginResponse:
    """RF-12: crea la cuenta. 409 si el correo ya existe."""
    email = email.strip().lower()
    exists = db.scalar(select(User).where(User.email == email))
    if exists is not None:
        raise ApiError(409, "email_exists", "Este correo ya está registrado.", field="email")

    user = User(full_name=nombre.strip(), email=email, hashed_password=hash_password(password))
    db.add(user)
    db.commit()
    db.refresh(user)
    return _to_response(user)


def login(db: Session, email: str, password: str) -> LoginResponse:
    """RF-13: valida credenciales. 401 genérico sin revelar cuál dato falló."""
    email = email.strip().lower()
    user = db.scalar(select(User).where(User.email == email))
    if user is None or not verify_password(password, user.hashed_password):
        raise ApiError(401, "bad_credentials", "Correo o contraseña incorrectos")
    return _to_response(user)
