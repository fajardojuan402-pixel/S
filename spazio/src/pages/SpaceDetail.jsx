import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import Stepper from '../components/Stepper.jsx'
import { Icon } from '../components/icons.jsx'
import { getSpace } from '../data/spaces.js'
import { formatCOP, formatLongDate, hoursBetween } from '../lib/format.js'
import { useApp } from '../store/AppContext.jsx'

export default function SpaceDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { setDraft } = useApp()
  const space = getSpace(id)

  const [date, setDate] = useState('2026-10-14')
  const [from, setFrom] = useState('10:00')
  const [to, setTo] = useState('13:00')

  if (!space) {
    return (
      <Layout>
        <p className="text-muted">Espacio no encontrado.</p>
        <Link to="/buscar" className="btn-ghost mt-4">Volver a resultados</Link>
      </Layout>
    )
  }

  const hours = hoursBetween(from, to)
  const total = hours * space.pricePerHour
  const invalid = hours <= 0

  const onReserve = () => {
    if (invalid) return
    setDraft({
      spaceId: space.id,
      spaceName: space.name,
      place: `${space.address.split(',')[0]} · ${space.city}`,
      address: space.address,
      city: space.city,
      photo: space.photos[0],
      date,
      from,
      to,
      hours,
      pricePerHour: space.pricePerHour,
      amount: total,
    })
    navigate(`/reservar/${space.id}/pago`)
  }

  return (
    <Layout wide>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link to="/buscar" className="flex items-center gap-2 text-sm font-semibold text-teal hover:underline">
          <Icon.ArrowLeft size={18} /> Volver a resultados
        </Link>
        <div className="w-full max-w-md lg:w-auto">
          <Stepper current={1} />
        </div>
      </div>

      <h1 className="text-4xl font-extrabold text-navy">{space.name}</h1>
      <p className="mt-2 flex items-center gap-2 text-muted">
        <Icon.Pin size={18} className="text-teal" />
        {space.address} · {space.city}
        <span className="text-teal"> · A {space.distanceKm.toLocaleString('es-CO')} km de tu búsqueda</span>
      </p>

      {/* Galería */}
      <div className="mt-6 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="relative overflow-hidden rounded-2xl">
          <img src={space.photos[0]} alt={space.name} className="h-full max-h-[420px] w-full object-cover" />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-1.5 text-sm font-semibold text-navy">
            <Icon.Photos size={16} /> Foto 1 de {space.photos.length}
          </span>
        </div>
        <div className="grid grid-rows-2 gap-4">
          {space.photos.slice(1, 3).map((p, i) => (
            <img key={i} src={p} alt="" className="h-full w-full rounded-2xl object-cover" />
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_minmax(0,380px)]">
        {/* Columna izquierda: info */}
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="chip">{space.vehicle}</span>
            {space.covered && <span className="chip">Cubierto</span>}
            <span className="chip">{space.schedule}</span>
          </div>

          <h2 className="mt-6 text-2xl font-bold text-navy">Un espacio cerca de todo</h2>
          <p className="mt-3 leading-relaxed text-muted">{space.description}</p>

          <hr className="my-7 border-line" />

          <h3 className="text-xl font-bold text-navy">Antes de llegar</h3>
          <ul className="mt-4 space-y-5">
            <Feature icon={<Icon.Car />} title="Espacio para carro">
              Acceso para un vehículo por reserva.
            </Feature>
            <Feature icon={<Icon.Clock />} title="Respeta tu horario">
              Entrada y salida dentro del periodo reservado.
            </Feature>
            <Feature icon={<Icon.CalendarX />} title="Cancelación con anticipación">
              Si faltan más de 24 horas, recibes el 100% del monto.
            </Feature>
          </ul>
        </div>

        {/* Columna derecha: tarjeta de reserva */}
        <aside className="card h-fit p-6 lg:sticky lg:top-28">
          <div className="flex items-start justify-between">
            <p className="text-3xl font-extrabold text-teal">
              {formatCOP(space.pricePerHour)}
              <span className="text-sm font-semibold text-muted"> COP / hora</span>
            </p>
            <span className="rounded-full bg-success-bg px-3 py-1 text-xs font-bold text-success">
              Disponible
            </span>
          </div>

          <div className="mt-6">
            <label className="label" htmlFor="date">Fecha de la reserva</label>
            <div className="relative">
              <input
                id="date"
                className="field pr-11"
                value={formatLongDate(date)}
                readOnly
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="absolute inset-0 cursor-pointer opacity-0"
                aria-label="Seleccionar fecha"
              />
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted">
                <Icon.Calendar />
              </span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <TimeField label="Hora de entrada" value={from} onChange={setFrom} />
            <TimeField label="Hora de salida" value={to} onChange={setTo} />
          </div>

          <div className="mt-6 rounded-xl bg-canvas p-4">
            <div className="flex items-center justify-between text-sm text-muted">
              <span>
                {hours > 0 ? `${hours} hora${hours !== 1 ? 's' : ''}` : '—'} × {formatCOP(space.pricePerHour)}
              </span>
              <span>{formatCOP(total)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-semibold text-navy">Total (COP)</span>
              <span className="text-2xl font-extrabold text-teal">{formatCOP(total)}</span>
            </div>
          </div>

          {invalid && (
            <p className="mt-3 text-sm text-danger">
              La hora de salida debe ser posterior a la de entrada.
            </p>
          )}

          <button onClick={onReserve} disabled={invalid} className="btn-primary mt-5 w-full py-3.5 text-base">
            Reservar y pagar <Icon.ArrowRight size={18} />
          </button>
          <p className="mt-3 text-center text-sm text-muted">El monto está visible antes de pagar.</p>
        </aside>
      </div>
    </Layout>
  )
}

function Feature({ icon, title, children }) {
  return (
    <li className="flex gap-3.5">
      <span className="mt-0.5 flex-none text-teal">{icon}</span>
      <div>
        <p className="font-semibold text-navy">{title}</p>
        <p className="text-sm text-muted">{children}</p>
      </div>
    </li>
  )
}

function TimeField({ label, value, onChange }) {
  return (
    <div>
      <label className="label">{label}</label>
      <div className="relative">
        <input
          type="time"
          className="field pr-10"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted">
          <Icon.Clock size={18} />
        </span>
      </div>
    </div>
  )
}
