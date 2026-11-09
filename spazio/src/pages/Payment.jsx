import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import Stepper from '../components/Stepper.jsx'
import { Icon } from '../components/icons.jsx'
import { formatCOP, formatLongDate } from '../lib/format.js'
import { useApp } from '../store/AppContext.jsx'

const SCENARIOS = [
  { id: 'aprobado', title: 'Aprobado', desc: 'El pago se aprueba y la reserva queda confirmada.' },
  { id: 'rechazado', title: 'Rechazado', desc: 'El pago es rechazado. Verás el resultado de error.' },
  { id: 'error', title: 'Sin respuesta / error', desc: 'Simula una falta de respuesta o un error en el pago.' },
]

export default function Payment() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { draft } = useApp()
  const [scenario, setScenario] = useState('aprobado')
  const [seconds, setSeconds] = useState(582) // 09:42

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(t)
  }, [])

  if (!draft) {
    return (
      <Layout wide>
        <p className="text-muted">No hay una reserva en curso.</p>
        <Link to={`/espacio/${id}`} className="btn-ghost mt-4">Elegir un horario</Link>
      </Layout>
    )
  }

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')

  const onPay = () => {
    navigate(`/reservar/${id}/confirmacion?resultado=${scenario}`)
  }

  return (
    <Layout wide>
      <div className="mb-6 w-full max-w-2xl">
        <Stepper current={2} />
      </div>

      <p className="eyebrow">Reserva sin sorpresas</p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy">Completa tu reserva</h1>
      <p className="mt-3 text-muted">Revisa el monto y elige un escenario para probar el flujo de pago.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_minmax(0,380px)]">
        <div>
          {/* Aviso de simulación */}
          <div className="flex items-start gap-3 rounded-2xl bg-warn-bg p-5 text-warn">
            <span className="mt-0.5 flex-none"><Icon.Flask /></span>
            <div>
              <p className="font-bold">Pago simulado: no se cobra dinero real</p>
              <p className="mt-1 text-sm">
                Estás en un entorno de prueba. No ingreses datos bancarios; el selector de escenario
                solo simula el resultado de la reserva.
              </p>
            </div>
          </div>

          {/* Selector de escenario */}
          <div className="card mt-6 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-navy">Escenario de prueba</h2>
              <span className="rounded-full bg-warn-bg px-3 py-1 text-xs font-bold text-warn">
                Solo simulación
              </span>
            </div>
            <p className="mt-2 text-muted">Selecciona qué debe ocurrir al pulsar Pagar.</p>

            <div className="mt-5 space-y-3">
              {SCENARIOS.map((s) => {
                const active = scenario === s.id
                return (
                  <button
                    key={s.id}
                    onClick={() => setScenario(s.id)}
                    className={`flex w-full items-start justify-between gap-4 rounded-xl border p-4 text-left transition ${
                      active ? 'border-teal bg-teal-50' : 'border-line hover:border-teal/40'
                    }`}
                  >
                    <span className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 ${
                          active ? 'border-teal' : 'border-line'
                        }`}
                      >
                        {active && <span className="h-2.5 w-2.5 rounded-full bg-teal" />}
                      </span>
                      <span>
                        <span className="block font-bold text-navy">{s.title}</span>
                        <span className="block text-sm text-muted">{s.desc}</span>
                      </span>
                    </span>
                    {active && <span className="text-teal"><Icon.Check size={20} /></span>}
                  </button>
                )
              })}
            </div>

            <hr className="my-5 border-line" />
            <div className="flex items-center justify-between">
              <Link
                to={`/espacio/${id}`}
                className="flex items-center gap-2 text-sm font-semibold text-teal hover:underline"
              >
                <Icon.ArrowLeft size={16} /> Cambiar horario
              </Link>
              <button onClick={onPay} className="btn-primary">
                Pagar {formatCOP(draft.amount)} · Simulado <Icon.ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Temporizador de retención */}
          <div className="mt-6 flex items-center justify-between rounded-2xl bg-teal-50 p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-teal"><Icon.Timer /></span>
              <div>
                <p className="font-bold text-navy">Guardamos tu horario durante 10 minutos</p>
                <p className="mt-1 text-sm text-muted">
                  Si el tiempo termina sin completar el pago, la reserva expira y el periodo queda liberado.
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-extrabold tabular-nums text-teal">{mm}:{ss}</p>
              <p className="text-xs text-muted">restantes</p>
            </div>
          </div>
        </div>

        <ReservationSummary draft={draft} />
      </div>
    </Layout>
  )
}

function ReservationSummary({ draft }) {
  return (
    <aside className="h-fit lg:sticky lg:top-28">
      <div className="card p-6">
        <h3 className="text-xl font-bold text-navy">Tu reserva</h3>
        <img src={draft.photo} alt={draft.spaceName} className="mt-4 h-40 w-full rounded-xl object-cover" />
        <p className="mt-4 text-lg font-bold text-navy">{draft.spaceName}</p>
        <p className="text-sm text-muted">{draft.place}</p>

        <dl className="mt-5 space-y-3 text-sm">
          <Row label="Fecha" value={formatLongDate(draft.date)} />
          <Row label="Horario" value={`${draft.from} – ${draft.to}`} />
          <Row label="Duración" value={`${draft.hours} hora${draft.hours !== 1 ? 's' : ''}`} />
          <Row label="Tarifa por hora" value={`${formatCOP(draft.pricePerHour)} COP`} />
        </dl>

        <hr className="my-5 border-line" />
        <div className="flex items-center justify-between">
          <span className="font-bold text-navy">Total de la reserva</span>
          <span className="text-2xl font-extrabold text-teal">{formatCOP(draft.amount)}</span>
        </div>
        <p className="mt-1 text-right text-xs text-muted">Pesos colombianos (COP)</p>
      </div>
      <p className="mt-4 flex items-center gap-2 text-sm text-warn">
        <Icon.Info size={16} /> El monto mostrado es de prueba. No hay un cobro real.
      </p>
    </aside>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted">{label}</dt>
      <dd className="font-semibold text-navy">{value}</dd>
    </div>
  )
}
