import { useEffect, useRef } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import Stepper from '../components/Stepper.jsx'
import { Icon } from '../components/icons.jsx'
import { formatCOP, formatLongDate } from '../lib/format.js'
import { useApp } from '../store/AppContext.jsx'

export default function Confirmation() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const result = params.get('resultado') || 'aprobado'
  const { draft, addReservation } = useApp()
  const saved = useRef(false)

  // Registra la reserva confirmada en "Mis reservas" una sola vez.
  useEffect(() => {
    if (result === 'aprobado' && draft && !saved.current) {
      saved.current = true
      addReservation({
        spaceId: draft.spaceId,
        spaceName: draft.spaceName,
        place: draft.place,
        city: draft.city,
        date: draft.date,
        from: draft.from,
        to: draft.to,
        hours: draft.hours,
        pricePerHour: draft.pricePerHour,
        amount: draft.amount,
        status: 'confirmada',
        startsInHours: 30,
        photo: draft.photo,
      })
    }
  }, [result, draft, addReservation])

  if (!draft) {
    return (
      <Layout wide>
        <p className="text-muted">No hay una reserva en curso.</p>
        <Link to="/buscar" className="btn-ghost mt-4">Buscar un espacio</Link>
      </Layout>
    )
  }

  return (
    <Layout wide>
      <div className="mb-6 w-full max-w-2xl">
        <Stepper current={3} />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,380px)]">
        <div>
          {result === 'aprobado' ? (
            <SuccessPanel draft={draft} navigate={navigate} />
          ) : (
            <FailPanel id={id} />
          )}

          <OtherResults current={result} id={id} />
        </div>

        <ReservationSummary draft={draft} confirmed={result === 'aprobado'} />
      </div>
    </Layout>
  )
}

function SuccessPanel({ draft, navigate }) {
  return (
    <div className="card p-10 text-center">
      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success-bg text-success">
        <Icon.Check size={36} />
      </span>
      <p className="mt-5 inline-block rounded-full bg-success-bg px-4 py-1 text-xs font-bold text-success">
        CONFIRMADA
      </p>
      <h1 className="mt-4 text-4xl font-extrabold text-navy">¡Reserva confirmada!</h1>
      <p className="mx-auto mt-3 max-w-md text-muted">
        Tu espacio en {draft.spaceName} está listo. Consulta los detalles y gestiona tu reserva
        desde Mis reservas.
      </p>

      <div className="mt-6 grid gap-4 rounded-xl bg-canvas p-5 text-left sm:grid-cols-3">
        <Cell label="Fecha" value={formatLongDate(draft.date)} />
        <Cell label="Entrada y salida" value={`${draft.from} – ${draft.to}`} center />
        <Cell label="Monto (COP)" value={formatCOP(draft.amount)} right teal />
      </div>

      <button onClick={() => navigate('/mis-reservas')} className="btn-primary mt-7">
        Ver mis reservas <Icon.ArrowRight size={18} />
      </button>
      <div className="mt-4">
        <Link to="/buscar" className="font-semibold text-teal hover:underline">Buscar otro espacio</Link>
      </div>
      <p className="mt-4 text-sm text-warn">Resultado de un pago simulado. No se cobró dinero real.</p>
    </div>
  )
}

function FailPanel({ id }) {
  return (
    <div className="card p-10 text-center">
      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-danger-bg text-danger">
        <Icon.XCircle size={36} />
      </span>
      <p className="mt-5 inline-block rounded-full bg-danger-bg px-4 py-1 text-xs font-bold text-danger">
        RECHAZADO / ERROR
      </p>
      <h1 className="mt-4 text-4xl font-extrabold text-navy">No se completó el pago</h1>
      <p className="mx-auto mt-3 max-w-md text-muted">
        El pago fue rechazado o no hubo respuesta. La reserva no está confirmada. Puedes volver al
        pago simulado mientras siga vigente la retención.
      </p>
      <Link to={`/reservar/${id}/pago`} className="btn-primary mt-7">
        Volver al pago simulado <Icon.ArrowRight size={18} />
      </Link>
      <p className="mt-4 text-sm text-warn">Resultado de un pago simulado. No se cobró dinero real.</p>
    </div>
  )
}

function OtherResults({ current, id }) {
  return (
    <div className="mt-8">
      <p className="text-sm font-semibold text-muted">Otros resultados del pago simulado</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 font-bold text-navy">
              <Icon.XCircle size={20} className="text-danger" /> No se completó el pago
            </p>
            <span className="rounded-full bg-danger-bg px-3 py-1 text-xs font-bold text-danger">
              RECHAZADO / ERROR
            </span>
          </div>
          <p className="mt-3 text-sm text-muted">
            El pago fue rechazado o no hubo respuesta. La reserva no está confirmada. Puedes volver
            al pago simulado mientras siga vigente la retención.
          </p>
          <Link to={`/reservar/${id}/pago`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:underline">
            Volver al pago simulado <Icon.ArrowRight size={16} />
          </Link>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 font-bold text-navy">
              <Icon.Timer size={20} className="text-warn" /> Tu reserva expiró
            </p>
            <span className="rounded-full bg-warn-bg px-3 py-1 text-xs font-bold text-warn">
              EXPIRADA
            </span>
          </div>
          <p className="mt-3 text-sm text-muted">
            Terminó la retención de 10 minutos. El periodo quedó liberado; selecciona un horario
            disponible para volver a reservar.
          </p>
          <Link to="/buscar" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:underline">
            Buscar otro horario <Icon.ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

function ReservationSummary({ draft, confirmed }) {
  return (
    <aside className="card h-fit p-6 lg:sticky lg:top-28">
      <h3 className="text-xl font-bold text-navy">Tu reserva</h3>
      <img src={draft.photo} alt={draft.spaceName} className="mt-4 h-40 w-full rounded-xl object-cover" />
      <p className="mt-4 text-lg font-bold text-navy">{draft.spaceName}</p>
      <p className="text-sm text-muted">{draft.address} · {draft.city}</p>

      <dl className="mt-5 space-y-3 text-sm">
        <Row label="Fecha" value={formatLongDate(draft.date)} />
        <Row label="Horario" value={`${draft.from} – ${draft.to}`} />
        <Row label="Duración" value={`${draft.hours} hora${draft.hours !== 1 ? 's' : ''}`} />
        <Row label="Tarifa por hora" value={`${formatCOP(draft.pricePerHour)} COP`} />
      </dl>

      <hr className="my-5 border-line" />
      <div className="flex items-center justify-between">
        <span className="font-bold text-navy">{confirmed ? 'Monto confirmado' : 'Monto estimado'}</span>
        <span className="text-2xl font-extrabold text-teal">{formatCOP(draft.amount)}</span>
      </div>
      <p className="mt-1 text-right text-xs text-muted">Pesos colombianos (COP)</p>
    </aside>
  )
}

function Cell({ label, value, center, right, teal }) {
  return (
    <div className={center ? 'sm:text-center' : right ? 'sm:text-right' : ''}>
      <p className="text-xs text-muted">{label}</p>
      <p className={`mt-1 font-bold ${teal ? 'text-teal' : 'text-navy'}`}>{value}</p>
    </div>
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
