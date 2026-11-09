# SPAZIO — Backend (API)

API REST del marketplace de parqueaderos **SPAZIO** (incremento 1, MVP).
Construida con **FastAPI + SQLAlchemy + PostgreSQL/PostGIS**, siguiendo el
SRS v0.3 y el SDD v1.1 (arquitectura por capas: routers → services → models).

La base de datos está en **inglés** (según el script del equipo); la API expone
el contrato en **español/MAYÚSCULAS** que consume el frontend (`CONFIRMADA`,
`precioHora`, `distanciaKm`, etc.). La traducción se hace en la capa de schemas.

## Stack

- Python 3.12+ · FastAPI · Uvicorn
- SQLAlchemy 2 + psycopg 3 · GeoAlchemy2 (PostGIS)
- JWT (python-jose) · bcrypt
- PostgreSQL + PostGIS (vía Docker o Supabase)

## Endpoints (contrato que consume el frontend)

| Método | Ruta | RF | Descripción |
|--------|------|----|-------------|
| POST | `/auth/register` | RF-12 | Registro (201 / 409 correo existe) |
| POST | `/auth/login` | RF-13 | Login (200 / 401 genérico) |
| GET | `/geocode?q=` | RF-01 | Dirección → coordenadas (Nominatim) |
| GET | `/spaces/search?q=&lat=&lng=&radioKm=` | RF-01 | Búsqueda por radio (PostGIS) |
| GET | `/spaces/{id}` | RF-01 | Detalle del espacio |
| POST | `/spaces` | RF-03, RF-05 | Publicar (activa rol anfitrión; 422 traslape) |
| POST | `/bookings` | RF-06 | Crear reserva (retención 10 min) |
| POST | `/bookings/{id}/pay` | RF-07 | Pago simulado (APROBADO/RECHAZADO/SIN_RESPUESTA) |
| GET | `/bookings/{id}` | RF-07 | Estado + segundos restantes |
| DELETE | `/bookings/{id}/hold` | RF-07 | Libera la retención |
| GET | `/bookings/me?estado=` | RF-15 | Mis reservas + contadores |
| POST | `/bookings/{id}/cancel/preview` | RF-08 | Reembolso que se aplicaría (RN-12) |
| POST | `/bookings/{id}/cancel` | RF-08 | Cancela + reembolso simulado |

Auth por **JWT** en `Authorization: Bearer`. Errores en formato
`{ code, message, field? }` con HTTP 4xx. Documentación interactiva en `/docs`.

## Cómo levantar (desarrollo local con Docker)

Requisitos: Docker Desktop y Python 3.12+.

```powershell
# 1) Base de datos PostgreSQL + PostGIS (aplica db/schema.sql automáticamente)
docker compose up -d

# 2) Entorno de Python e instalación de dependencias
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt

# 3) Datos de ejemplo (cuenta andrea@correo.com / clave1234 + 2 parqueaderos)
.\.venv\Scripts\python.exe seed_dev.py

# 4) Arrancar la API
.\.venv\Scripts\python.exe -m uvicorn app.main:app --host 127.0.0.1 --port 8000
```

La API queda en http://127.0.0.1:8000 y la BD en `localhost:5433`.

> **Nota del puerto:** el `.env` usa `5433` para la BD porque el `5432` puede
> estar ocupado por otro Postgres. El contenedor internamente sigue en 5432.

## Variables de entorno (`.env`)

| Variable | Descripción |
|----------|-------------|
| `DATABASE_URL` | Conexión a Postgres. Docker: `postgresql+psycopg://spazio:spazio@localhost:5433/spazio` |
| `JWT_SECRET` | Clave para firmar los JWT (cámbiala en producción) |
| `JWT_EXPIRE_MINUTES` | Vigencia del token (por defecto 720) |
| `BOOKING_HOLD_MINUTES` | Minutos de retención de la reserva (RF-07, por defecto 10) |
| `CORS_ORIGINS` | Orígenes permitidos (el frontend de Vite) |
| `NOMINATIM_URL` | Servicio de geocodificación |

## Conectar con Supabase (en vez de Docker)

1. Crea un proyecto en Supabase.
2. En el **SQL Editor**, pega y ejecuta el contenido de `db/schema.sql`.
3. Copia la *connection string* (modo session) y ponla en `DATABASE_URL` del `.env`.
4. Arranca la API con uvicorn (pasos 3 y 4 de arriba).

## Conectar el frontend

El frontend conectado está en `../spazio-app-conectado` con su `.env`:

```
VITE_API_URL=http://localhost:8000
VITE_USE_MOCK=false
```

Levanta la API (este proyecto) y luego el frontend:

```powershell
cd ..\spazio-app-conectado
npm.cmd install
npm.cmd run dev
```

> `../spazio-app` queda en **modo mock** (sin backend), para demos rápidas.

## Diferencias respecto al script original de la BD

Se agregaron dos columnas a `spaces` que el frontend necesita y el script no
tenía: `vehicle_type` (carro/moto/ambos) e `is_covered` (cubierto). Ambas están
en `db/schema.sql`. El resto del esquema (tablas, enums, el trigger
`trg_activate_host_role`, constraints) es el del equipo.

## Decisiones (SRS/SDD)

- **Pago simulado propio** (no Wompi), con escenarios APROBADO/RECHAZADO/SIN_RESPUESTA.
- **Reembolso** (RN-12): 100% si faltan ≥ 24 h, 0% si < 24 h.
- **Traslape** de disponibilidad (RN-14): se rechaza con 422.
- **Rol anfitrión** se activa en la primera publicación vía el trigger de la BD.
- **Calificaciones** (tabla `ratings`) quedan modeladas pero sin endpoints (fuera del incremento 1).
