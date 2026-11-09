"""Configuración de la aplicación, cargada desde variables de entorno (.env)."""
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    database_url: str = "postgresql+psycopg://spazio:spazio@localhost:5432/spazio"
    jwt_secret: str = "dev-secret-no-usar-en-produccion"
    jwt_algorithm: str = "HS256"
    jwt_expire_minutes: int = 720
    booking_hold_minutes: int = 10
    cors_origins: str = "http://localhost:5173,http://127.0.0.1:5173"
    nominatim_url: str = "https://nominatim.openstreetmap.org"

    @property
    def cors_origins_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]

    @property
    def sqlalchemy_url(self) -> str:
        """Normaliza la URL para usar el driver psycopg.

        Supabase/Render entregan 'postgresql://...' o 'postgres://...';
        SQLAlchemy con psycopg 3 necesita 'postgresql+psycopg://...'.
        """
        url = self.database_url
        if url.startswith("postgres://"):
            url = "postgresql://" + url[len("postgres://"):]
        if url.startswith("postgresql://"):
            url = "postgresql+psycopg://" + url[len("postgresql://"):]
        return url


settings = Settings()
