"""Datos semilla de desarrollo: una cuenta anfitrión y dos parqueaderos en
Bogotá (Parqueadero Centro y Cubierto Chapinero), con periodos de disponibilidad.

Idempotente: si ya existen los espacios por título, no los duplica.
Uso:  .venv\\Scripts\\python.exe seed_dev.py
"""
from datetime import datetime

from sqlalchemy import func, select

from app.database import SessionLocal
from app.models import Availability, Space, User
from app.security import hash_password

SEED_EMAIL = "andrea@correo.com"

SPACES = [
    {
        "title": "Parqueadero Centro",
        "address": "Cra. 7 # 16-24, Centro",
        "neighborhood": "Centro",
        "lat": 4.5981,
        "lng": -74.0758,
        "price": 4000,
        "vehicle": "carro",
        "covered": True,
        "conditions": "Deja tu carro bajo techo en el corazón del Centro. Un parqueadero práctico "
        "para tus diligencias, reuniones o una vuelta por la ciudad.",
        "photos": [
            "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1545179605-1296651e9d0c?auto=format&fit=crop&w=800&q=70",
            "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?auto=format&fit=crop&w=800&q=70",
        ],
        "periods": [("2026-10-14T08:00", "2026-10-14T18:00")],
    },
    {
        "title": "Cubierto Chapinero",
        "address": "Calle 63 # 11-40, Chapinero",
        "neighborhood": "Chapinero",
        "lat": 4.6486,
        "lng": -74.0629,
        "price": 6000,
        "vehicle": "carro",
        "covered": True,
        "conditions": "Parqueadero cubierto disponible las 24 horas en Chapinero. Ideal para "
        "estadías largas y acceso cómodo a la zona rosa y de oficinas.",
        "photos": [
            "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=70",
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=70",
        ],
        "periods": [("2026-10-14T00:00", "2026-10-14T23:59")],
    },
]


def main() -> None:
    db = SessionLocal()
    try:
        host = db.scalar(select(User).where(User.email == SEED_EMAIL))
        if host is None:
            host = User(
                full_name="Andrea M.",
                email=SEED_EMAIL,
                hashed_password=hash_password("clave1234"),
                is_host=True,
            )
            db.add(host)
            db.commit()
            db.refresh(host)
            print(f"Cuenta creada: {SEED_EMAIL} / clave1234")
        else:
            print(f"Cuenta ya existe: {SEED_EMAIL}")

        for s in SPACES:
            exists = db.scalar(select(Space).where(Space.title == s["title"]))
            if exists:
                print(f"  (existe) {s['title']}")
                continue
            point = func.ST_SetSRID(func.ST_MakePoint(s["lng"], s["lat"]), 4326)
            space = Space(
                host_id=host.id,
                category="PARKING",
                title=s["title"],
                address=s["address"],
                neighborhood=s["neighborhood"],
                location=point,
                price_per_hour=s["price"],
                vehicle_type=s["vehicle"],
                is_covered=s["covered"],
                conditions=s["conditions"],
                photos=s["photos"],
                is_active=True,
            )
            db.add(space)
            db.flush()
            for ini, fin in s["periods"]:
                db.add(
                    Availability(
                        space_id=space.id,
                        start_time=datetime.fromisoformat(ini),
                        end_time=datetime.fromisoformat(fin),
                    )
                )
            db.commit()
            print(f"  creado {s['title']}")
        print("SEED_OK")
    finally:
        db.close()


if __name__ == "__main__":
    main()
