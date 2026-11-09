import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, Info } from 'lucide-react'
import Layout from '../components/layout/Layout'
import Stepper from '../components/layout/Stepper'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Alert from '../components/ui/Alert'
import Skeleton from '../components/ui/Skeleton'
import Countdown from '../components/ui/Countdown'
import ReservaResumen from '../features/booking/ReservaResumen'
import { useBooking, usePayBooking, useReleaseHold } from '../hooks/queries'
import { api } from '../api/client'
import { formatCOP } from '../lib/format'
import type { EscenarioPago } from '../api/types'

const ESCENARIOS: { id: EscenarioPago; titulo: string; desc: string }[] = [
  { id: 'APROBADO', titulo: 'Aprobado', desc: 'El pago se aprueba y la reserva queda confirmada.' },
  { id: 'RECHAZADO', titulo: 'Rechazado', desc: 'El pago es rechazado. Verás el resultado de error.' },
  { id: 'SIN_RESPUESTA', titulo: 'Sin respuesta / error', desc: 'Simula una falta de respuesta o un error en el pago.' },
]

/**
 * P-05 Pago simulado (RF-06, RF-07). Aviso de pago simulado, 3 radio-cards de
 * escenario, resumen de reserva y temporizador de 10 min alimentado por
 * segundosRestantes del servidor. "Cambiar horario" libera la retención (DELETE /hold).
 */
export default function Payment() {
  const { bookingId } = useParams()
  const navigate = useNavigate()
  const { data: booking, isLoading, isError } = useBooking(bookingId)
  const pagar = usePayBooking()
  const releaseHold = useReleaseHold()
  const [escenario, setEscenario] = useState<EscenarioPago>('APROBADO')

  // Si la reserva ya expiró (al cargar), vamos al resultado de expiración.
  useEffect(() => {
    if (booking?.estado === 'EXPIRADA') {
      navigate(`/confirmacion/${bookingId}?resultado=EXPIRADA`, { replace: true })
    }
  }, [booking?.estado, bookingId, navigate])

  if (isLoading) {
    return (
      <Layout wide>
        <Skeleton className="h-6 w-80" />
        <Skeleton className="mt-6 h-64 w-full" />
      </Layout>
    )
  }

  if (isError || !booking) {
    return (
      <Layout wide>
        <Alert tone="danger" title="No encontramos la reserva">
          Es posible que la retención haya expirado.
        </Alert>
        <Link to="/buscar" className="btn-ghost mt-4">Buscar un espacio</Link>
      </Layout>
    )
  }

  const onPagar = async () => {
    const res = await pagar.mutateAsync({ id: booking.id, body: { escenario } })
    navigate(`/confirmacion/${booking.id}?resultado=${res.estado}`)
  }

  const onCambiarHorario = async () => {
    await releaseHold.mutateAsync(booking.id)
    navigate(`/espacio/${booking.espacio.id}`)
  }

  return (
    <Layout wide>
      <div className="mb-6 w-full max-w-2xl">
        <Stepper current={2} />
      </div>

      <p className="eyebrow">Reserva sin sorpresas</p>
      <h1 className="mt-2 text-4xl font-extrabold text-ink">Completa tu reserva</h1>
      <p className="mt-3 text-subtle">Revisa el monto y elige un escenario para probar el flujo de pago.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_minmax(0,380px)]">
        <div>
          <Alert tone="sim" title="Pago simulado: no se cobra dinero real">
            Estás en un entorno de prueba. No ingreses datos bancarios; el selector de escenario
            solo simula el resultado de la reserva.
          </Alert>

          {/* Selector de escenario */}
          <div className="card mt-6 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-ink">Escenario de prueba</h2>
              <Badge tone="warn">Solo simulación</Badge>
            </div>
            <p className="mt-2 text-subtle">Selecciona qué debe ocurrir al pulsar Pagar.</p>

            <div className="mt-5 space-y-3" role="radiogroup" aria-label="Escenario de pago simulado">
              {ESCENARIOS.map((s) => {
                const active = escenario === s.id
                return (
                  <button
                    key={s.id}
                    role="radio"
                    aria-checked={active}
                    onClick={() => setEscenario(s.id)}
                    className={`flex w-full items-start justify-between gap-4 rounded-lg border p-4 text-left transition ${
                      active ? 'border-teal bg-teal-soft' : 'border-line hover:border-teal/40'
                    }`}
                  >
                    <span className="flex items-start gap-3">
                      <span className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 ${active ? 'border-teal' : 'border-line'}`}>
                        {active && <span className="h-2.5 w-2.5 rounded-full bg-teal" />}
                      </span>
                      <span>
                        <span className="block font-bold text-ink">{s.titulo}</span>
                        <span className="block text-sm text-subtle">{s.desc}</span>
                      </span>
                    </span>
                    {active && <Check size={20} className="text-teal" />}
                  </button>
                )
              })}
            </div>

            <hr className="my-5 border-line" />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={onCambiarHorario}
                className="flex min-h-touch items-center gap-2 text-sm font-semibold text-teal hover:underline"
              >
                <ArrowLeft size={16} /> Cambiar horario
              </button>
              <Button onClick={onPagar} loading={pagar.isPending} rightIcon={<ArrowRight size={18} />}>
                Pagar {formatCOP(booking.monto)} · Simulado
              </Button>
            </div>
          </div>

          {/* Temporizador de retención */}
          <div className="mt-6 flex items-center justify-between rounded-xl bg-teal-soft p-5">
            <div>
              <p className="font-bold text-ink">Guardamos tu horario durante 10 minutos</p>
              <p className="mt-1 text-sm text-subtle">
                Si el tiempo termina sin completar el pago, la reserva expira y el periodo queda liberado.
              </p>
            </div>
            <Countdown
              initialSeconds={booking.segundosRestantes}
              onExpire={() => navigate(`/confirmacion/${booking.id}?resultado=EXPIRADA`)}
              onResync={async () => {
                const fresh = await api.getBooking(booking.id)
                return fresh.segundosRestantes
              }}
            />
          </div>
        </div>

        <aside className="h-fit lg:sticky lg:top-28">
          <ReservaResumen booking={booking} />
          <p className="mt-4 flex items-center gap-2 text-sm text-warn">
            <Info size={16} /> El monto mostrado es de prueba. No hay un cobro real.
          </p>
        </aside>
      </div>
    </Layout>
  )
}
