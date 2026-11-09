import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import { Icon } from '../components/icons.jsx'
import { formatCOP, formatShortDate } from '../lib/format.js'
import { useApp } from '../store/AppContext.jsx'

const STATUS_META = {
  confirmada: { label: 'CONFIRMADA', cls: 'bg-success-bg text-success', note: 'Tu espacio está reservado' },
  cancelada: { label: 'CANCELADA', cls: 'bg-canvas text-muted', note: 'Reembolso 100% aplicado' },
  expirada: { label: 'EXPIRADA', cls: 'bg-warn-bg text-warn', note: 'Periodo liberado' },
}

const FILTERS = [
  { id: 'todas', label: 'Todas' },
  { id: 'confirmada', label: 'Confirmadas' },
  { id: 'cancelada', label: 'Canceladas' },
  { id: 'expirada', label: 'Expiradas' },
]

export default function MyReservations() {
  const { reservations, cancelReservation } = useApp()
  const [filter, setFilter] = useState('todas')
  const [toCancel, setToCancel] = useState(null)

  const counts = useMemo(() => {
    const c = { confirmada: 0, cancelada: 0, expirada: 0 }
    reservations.forEach((r) => { c[r.status] = (c[r.status] || 0) + 1 })
    return c
  }, [reservations])

  const rows = filter === 'todas' ? reservations : reservations.filter((r) => r.status === filter)

  return (
    <Layout wide>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Tu actividad</p>
          <h1 className="mt-2 text-4xl font-extrabold text-navy">Mis reservas</h1>
          <p className="mt-3 max-w-xl text-muted">
            Consulta tus horarios, revisa el estado de cada reserva y gestiona tus cancelaciones.
          </p>
        </div>
        <Link to="/buscar" className="btn-primary">
          Buscar parqueadero <Icon.Search size={18} />
        </Link>
      </div>

      {/* Tarjetas de resumen */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <SummaryCard icon={<Icon.CalendarCheck />} count={counts.confirmada} title="Reserva confirmada" note="Tu próximo espacio" />
        <SummaryCard icon={<Icon.CheckBadge />} count={counts.cancelada} title="Reserva cancelada" note="Reembolso 100% aplicado" />
        <SummaryCard icon={<Icon.Timer />} count={counts.expirada} title="Reserva expirada" note="Periodo liberado" />
      </div>

      {/* Tabla */}
      <div className="card mt-8 overflow-hidden">
        <div className="flex flex-wrap gap-2 border-b border-line p-5">
          {FILTERS.map((f) => {
            const n = f.id === 'todas' ? reservations.length : counts[f.id] || 0
            const active = filter === f.id
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  active ? 'bg-teal-50 text-teal' : 'text-muted hover:text-navy'
                }`}
              >
                {f.label} · {n}
              </button>
            )
          })}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left">
            <thead>
              <tr className="border-b border-line text-xs font-semibold uppercase tracking-wide text-muted">
                <th className="px-5 py-4">Parqueadero</th>
                <th className="px-5 py-4">Fecha</th>
                <th className="px-5 py-4">Horario</th>
                <th className="px-5 py-4">Monto</th>
                <th className="px-5 py-4">Estado</th>
                <th className="px-5 py-4 text-right">Acción</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const meta = STATUS_META[r.status]
                return (
                  <tr key={r.id} className="border-b border-line last:border-0">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img src={r.photo} alt="" className="h-12 w-12 flex-none rounded-lg object-cover" />
                        <div>
                          <p className="font-bold text-navy">{r.spaceName}</p>
                          <p className="text-sm text-muted">{r.place}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-medium text-navy">{formatShortDate(r.date)}</p>
                      <p className="text-sm text-muted">{r.city}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-medium text-navy">{r.from} – {r.to}</p>
                      <p className="text-sm text-muted">{r.hours} hora{r.hours !== 1 ? 's' : ''}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-medium text-navy">{r.amount ? formatCOP(r.amount) : '—'}</p>
                      <p className="text-sm text-muted">COP</p>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${meta.cls}`}>
                        {meta.label}
                      </span>
                      <p className={`mt-1 text-sm ${r.status === 'cancelada' ? 'text-success' : 'text-muted'}`}>
                        {meta.note}
                      </p>
                    </td>
                    <td className="px-5 py-4 text-right">
                      {r.status === 'confirmada' ? (
                        <button onClick={() => setToCancel(r)} className="btn-outline px-4 py-2 text-sm">
                          Cancelar
                        </button>
                      ) : (
                        <button className="text-sm font-semibold text-teal hover:underline">Ver detalles</button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-2xl bg-teal-50 p-5">
        <span className="mt-0.5 text-teal"><Icon.CalendarX /></span>
        <div>
          <p className="font-bold text-navy">Cancela con claridad</p>
          <p className="mt-1 text-sm text-teal-700/90">
            Antes de confirmar una cancelación verás el reembolso aplicable. Si tu reserva empieza
            en más de 24 horas, el reembolso es del 100%.
          </p>
        </div>
      </div>

      {toCancel && (
        <CancelModal
          reservation={toCancel}
          onClose={() => setToCancel(null)}
          onConfirm={() => {
            cancelReservation(toCancel.id)
            setToCancel(null)
          }}
        />
      )}
    </Layout>
  )
}

function SummaryCard({ icon, count, title, note }) {
  return (
    <div className="card flex items-center gap-4 p-6">
      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-teal-50 text-teal">
        {icon}
      </span>
      <div>
        <p className="font-bold text-navy">{count} · {title}</p>
        <p className="text-sm text-muted">{note}</p>
      </div>
    </div>
  )
}

function CancelModal({ reservation, onClose, onConfirm }) {
  const refund100 = reservation.startsInHours > 24
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 p-5" onClick={onClose}>
      <div className="w-full max-w-lg rounded-2xl bg-white p-7 shadow-pop" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal">
            <Icon.CalendarX />
          </span>
          <button onClick={onClose} className="text-muted hover:text-navy" aria-label="Cerrar">
            <Icon.X />
          </button>
        </div>

        <h2 className="mt-5 text-2xl font-extrabold text-navy">¿Cancelar esta reserva?</h2>
        <p className="mt-2 text-muted">
          Revisa el reembolso antes de continuar. Al confirmar, tu horario dejará de estar reservado.
        </p>

        <div className="mt-5 rounded-xl bg-canvas p-4">
          <div className="flex items-center justify-between">
            <p className="font-bold text-navy">{reservation.spaceName}</p>
            <span className="rounded-full bg-success-bg px-3 py-1 text-xs font-bold text-success">CONFIRMADA</span>
          </div>
          <p className="mt-1 text-sm text-muted">
            {formatShortDate(reservation.date)} · {reservation.from} – {reservation.to}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-teal">
            <Icon.Clock size={16} /> Inicia en {reservation.startsInHours} h · {refund100 ? 'Más de 24 h' : 'Menos de 24 h'}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-success-bg p-5">
          <div>
            <p className="font-bold text-success">Reembolso: {refund100 ? '100%' : '0%'}</p>
            <p className="mt-0.5 text-sm text-success">
              Cancelación con {refund100 ? 'más' : 'menos'} de 24 h
            </p>
            <p className="mt-2 text-sm text-success/90">Reembolso simulado en COP. No se mueve dinero real.</p>
          </div>
          <p className="text-3xl font-extrabold text-success">
            {formatCOP(refund100 ? reservation.amount : 0)}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button onClick={onClose} className="btn-outline">Volver</button>
          <button onClick={onConfirm} className="btn-primary">Confirmar cancelación</button>
        </div>
      </div>
    </div>
  )
}
