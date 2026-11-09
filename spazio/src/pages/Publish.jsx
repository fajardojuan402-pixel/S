import { useState } from 'react'
import Layout from '../components/Layout.jsx'
import { Icon } from '../components/icons.jsx'
import { formatCOP, formatShortDate, periodsOverlap } from '../lib/format.js'

const PHOTO_1 = 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=70'
const PHOTO_2 = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=600&q=70'

export default function Publish() {
  const [address, setAddress] = useState('Cra. 9 # 22-18, Bogotá')
  const [vehicle, setVehicle] = useState('Carro')
  const [price, setPrice] = useState(5000)
  const [covered, setCovered] = useState(true)
  const [terms, setTerms] = useState(
    'Espacio para un carro. Ingresa por la puerta principal y respeta el horario reservado. No se permite dejar objetos fuera del vehículo.',
  )

  // Periodos de disponibilidad
  const [periods, setPeriods] = useState([{ date: '2026-10-14', from: '08:00', to: '18:00' }])
  const [newDate, setNewDate] = useState('2026-10-14')
  const [newFrom, setNewFrom] = useState('10:00')
  const [newTo, setNewTo] = useState('13:00')
  const [overlapError, setOverlapError] = useState(null)

  const photos = [PHOTO_1, PHOTO_2]

  const addPeriod = () => {
    setOverlapError(null)
    // Regla de negocio: los periodos no pueden superponerse (mismo día)
    const clash = periods.find(
      (p) => p.date === newDate && periodsOverlap(p.from, p.to, newFrom, newTo),
    )
    if (clash) {
      setOverlapError({ newFrom, newTo, clashFrom: clash.from, clashTo: clash.to })
      return
    }
    if (newFrom >= newTo) {
      setOverlapError({ invalid: true })
      return
    }
    setPeriods((prev) => [...prev, { date: newDate, from: newFrom, to: newTo }])
  }

  const removePeriod = (idx) => setPeriods((prev) => prev.filter((_, i) => i !== idx))

  // Habilitar publicar: dirección, precio > 0 y al menos un periodo válido
  const canPublish = address.trim() && price > 0 && periods.length > 0

  return (
    <Layout wide>
      <header className="max-w-2xl">
        <p className="eyebrow">Para quienes tienen un espacio</p>
        <h1 className="mt-2 text-4xl font-extrabold text-navy">Publica tu parqueadero</h1>
        <p className="mt-3 text-muted">
          Completa los datos, agrega hasta 3 fotos y define cuándo estará disponible.
        </p>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_minmax(0,380px)]">
        {/* Columna principal */}
        <div className="space-y-6">
          {/* Información del espacio */}
          <section className="card p-6">
            <h2 className="text-2xl font-bold text-navy">Información del espacio</h2>

            <div className="mt-5">
              <label className="label" htmlFor="address">Dirección</label>
              <div className="relative">
                <input id="address" className="field pr-11" value={address} onChange={(e) => setAddress(e.target.value)} />
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted">
                  <Icon.Pin />
                </span>
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="vehicle">Tipo de vehículo</label>
                <div className="relative">
                  <select id="vehicle" className="field appearance-none pr-10" value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                    <option>Carro</option>
                    <option>Moto</option>
                    <option>Ambos</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted">
                    <Icon.ChevronDown />
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">Opciones: Carro, Moto o Ambos.</p>
              </div>
              <div>
                <label className="label" htmlFor="price">Precio por hora (COP)</label>
                <input
                  id="price"
                  type="number"
                  min={0}
                  step={500}
                  className="field"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
                <p className="mt-2 text-sm text-muted">Esta tarifa se mostrará antes de reservar.</p>
              </div>
            </div>

            <label className="mt-5 flex cursor-pointer items-center gap-3">
              <input type="checkbox" checked={covered} onChange={(e) => setCovered(e.target.checked)} className="sr-only" />
              <span className={`flex h-6 w-6 items-center justify-center rounded-md border transition ${covered ? 'border-teal bg-teal text-white' : 'border-line bg-white'}`}>
                {covered && <Icon.Check size={16} />}
              </span>
              <span className="font-semibold text-navy">Cubierto</span>
              <span className="text-sm text-muted">El vehículo estará bajo techo.</span>
            </label>

            <div className="mt-5">
              <label className="label" htmlFor="terms">Condiciones de uso</label>
              <textarea id="terms" rows={3} className="field resize-none" value={terms} onChange={(e) => setTerms(e.target.value)} />
            </div>
          </section>

          {/* Disponibilidad */}
          <section className="card p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-navy">Disponibilidad</h2>
              <span className="chip">
                {periods.length} periodo{periods.length !== 1 ? 's' : ''} agregado{periods.length !== 1 ? 's' : ''}
              </span>
            </div>
            <p className="mt-2 text-muted">Agrega los periodos en los que se puede reservar tu parqueadero.</p>

            <div className="mt-5 space-y-3">
              {periods.map((p, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl bg-canvas px-4 py-3">
                  <span className="flex items-center gap-3 font-semibold text-navy">
                    <Icon.Calendar size={18} className="text-teal" /> {formatShortDate(p.date)}
                  </span>
                  <span className="flex items-center gap-4 text-navy">
                    <span>{p.from} – {p.to}</span>
                    <button onClick={() => removePeriod(i)} className="text-muted hover:text-danger" aria-label="Eliminar periodo">
                      <Icon.Trash size={18} />
                    </button>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_auto_auto] sm:items-end">
              <div>
                <label className="label">Fecha</label>
                <div className="relative">
                  <input className="field pr-10" value={formatShortDate(newDate)} readOnly />
                  <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} className="absolute inset-0 cursor-pointer opacity-0" />
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted"><Icon.Calendar size={18} /></span>
                </div>
              </div>
              <TimeField label="Desde" value={newFrom} onChange={setNewFrom} />
              <TimeField label="Hasta" value={newTo} onChange={setNewTo} />
              <button onClick={addPeriod} className="btn-outline h-[50px]">
                Agregar periodo <Icon.Plus size={16} />
              </button>
            </div>

            {overlapError && (
              <div className="mt-4 rounded-xl bg-danger-bg p-4 text-danger">
                <p className="flex items-center gap-2 font-bold">
                  <Icon.Info size={18} />
                  {overlapError.invalid ? 'No se agregó el periodo: horas inválidas' : 'No se agregó el periodo: hay un traslape'}
                </p>
                <p className="mt-1 text-sm">
                  {overlapError.invalid
                    ? 'La hora «Hasta» debe ser posterior a «Desde».'
                    : `${overlapError.newFrom} – ${overlapError.newTo} se cruza con ${overlapError.clashFrom} – ${overlapError.clashTo} del mismo día. Elige otra fecha u horas que no se superpongan.`}
                </p>
              </div>
            )}

            <p className="mt-4 text-sm text-muted">Solo se guardan periodos sin traslapes.</p>
          </section>

          {/* Publicar */}
          <section className="card flex flex-wrap items-center justify-between gap-4 p-6">
            <div>
              <p className="font-bold text-navy">Tu espacio está listo para publicar</p>
              <p className="text-sm text-muted">
                {photos.length} fotos · {periods.length} periodo válido · {formatCOP(price)} COP / hora
              </p>
            </div>
            <button disabled={!canPublish} className="btn-primary">
              Publicar <Icon.ArrowRight size={18} />
            </button>
          </section>
        </div>

        {/* Columna lateral */}
        <aside className="space-y-6">
          <section className="card p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-navy">Fotos del espacio</h2>
              <span className="chip">{photos.length} de 3</span>
            </div>
            <p className="mt-2 text-sm text-muted">
              Muestra el acceso y el lugar de parqueo. Puedes subir un máximo de 3 fotos.
            </p>

            <img src={PHOTO_1} alt="Foto del parqueadero" className="mt-4 h-48 w-full rounded-xl object-cover" />
            <div className="mt-3 grid grid-cols-2 gap-3">
              <img src={PHOTO_2} alt="Acceso al parqueadero" className="h-28 w-full rounded-xl object-cover" />
              <button className="flex h-28 flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-line text-muted hover:border-teal hover:text-teal">
                <Icon.ImagePlus />
                <span className="text-sm font-semibold">Agregar foto</span>
              </button>
            </div>
            <p className="mt-3 text-sm text-muted">JPG o PNG · Hasta 3 fotos</p>
          </section>

          <section className="rounded-2xl bg-teal-50 p-6">
            <p className="flex items-center gap-2 font-bold text-navy">
              <Icon.Bulb size={20} className="text-teal" /> Un buen espacio empieza aquí
            </p>
            <ul className="mt-4 space-y-3 text-sm text-navy">
              {[
                'Una dirección precisa facilita la llegada.',
                'Las fotos claras ayudan a elegir.',
                'El precio se muestra antes del pago.',
                'Los periodos no pueden superponerse.',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-0.5 text-teal"><Icon.Check size={16} /></span>
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </Layout>
  )
}

function TimeField({ label, value, onChange }) {
  return (
    <div>
      <label className="label">{label}</label>
      <div className="relative">
        <input type="time" className="field pr-10 sm:w-36" value={value} onChange={(e) => onChange(e.target.value)} />
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted">
          <Icon.Clock size={18} />
        </span>
      </div>
    </div>
  )
}
