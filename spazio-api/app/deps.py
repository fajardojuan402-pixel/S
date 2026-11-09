"""Dependencias de FastAPI: usuario autenticado a partir del JWT (Bearer)."""
from typing import Annotated

from fastapi import Depends
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session

from app.database import get_db
from app.errors import ApiError
from app.models import User
from app.security import decode_access_token

bearer = HTTPBearer(auto_error=False)


def get_current_user(
    db: Annotated[Session, Depends(get_db)],
    creds: Annotated[HTTPAuthorizationCredentials | None, Depends(bearer)],
) -> User:
    """Valida el token Bearer y devuelve el usuario; 401 si falta o es inválido."""
    if creds is None:
        raise ApiError(401, "unauthorized", "No autenticado.")
    user_id = decode_access_token(creds.credentials)
    if user_id is None:
        raise ApiError(401, "unauthorized", "Sesión inválida o expirada.")
    user = db.get(User, user_id)
    if user is None:
        raise ApiError(401, "unauthorized", "Cuenta no encontrada.")
    return user


CurrentUser = Annotated[User, Depends(get_current_user)]
DbSession = Annotated[Session, Depends(get_db)]
