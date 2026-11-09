"""PasarelaPagoSimulada (SDD): simula el cobro y el reembolso según el escenario.
No procesa datos de tarjeta (RNF-01). Wompi queda como extensión futura."""
import uuid
from dataclasses import dataclass


@dataclass
class ResultadoPago:
    aprobado: bool
    referencia: str
    metodo: str


def cobrar(escenario: str) -> ResultadoPago:
    """Devuelve el resultado del cobro simulado según el escenario elegido."""
    aprobado = escenario == "APROBADO"
    return ResultadoPago(
        aprobado=aprobado,
        referencia=f"SIM-{uuid.uuid4().hex[:12].upper()}",
        metodo="simulado",
    )


def reembolsar(monto: float) -> float:
    """Reembolso simulado: devuelve el monto que se 'reembolsa'."""
    return monto
