"""Pasarela de pago Wompi (sandbox).

- Genera la firma de integridad (SHA256) que el widget exige (en el backend,
  para no exponer el integrity secret).
- Verifica una transacción contra la API de Wompi usando la llave privada.

El pago sigue siendo de prueba (sandbox): no mueve dinero real, pero usa la
pasarela oficial de Wompi con sus tarjetas de prueba.
"""
import hashlib

import httpx

from app.config import settings


def generar_firma(referencia: str, monto_centavos: int, moneda: str = "COP") -> str:
    """SHA256 de '<referencia><monto><moneda><integritySecret>' (orden exacto)."""
    cadena = f"{referencia}{monto_centavos}{moneda}{settings.wompi_integrity_secret}"
    return hashlib.sha256(cadena.encode("utf-8")).hexdigest()


def consultar_transaccion(transaction_id: str) -> dict:
    """Consulta el estado real de la transacción en Wompi (sandbox).

    Devuelve el objeto 'data' de la respuesta, o {} si falla.
    """
    try:
        resp = httpx.get(
            f"{settings.wompi_base_url}/transactions/{transaction_id}",
            headers={"Authorization": f"Bearer {settings.wompi_private_key}"},
            timeout=10.0,
        )
        if resp.status_code == 200:
            return resp.json().get("data", {})
    except httpx.HTTPError:
        pass
    return {}
