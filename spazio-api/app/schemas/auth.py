"""Schemas Pydantic de autenticación (RF-12, RF-13).

El contrato expuesto está en español para coincidir con el frontend:
{ token, user: { id, nombre, rolAnfitrion } }.
"""
from pydantic import BaseModel, EmailStr, Field


class RegisterRequest(BaseModel):
    nombre: str = Field(min_length=1)
    email: EmailStr
    password: str = Field(min_length=8)


class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=1)


class AuthUser(BaseModel):
    id: str
    nombre: str
    rolAnfitrion: bool


class LoginResponse(BaseModel):
    token: str
    user: AuthUser
