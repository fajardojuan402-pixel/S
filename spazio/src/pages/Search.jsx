import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import { Icon } from '../components/icons.jsx'
import { SPACES } from '../data/spaces.js'
import { formatCOP } from '../lib/format.js'

export default function Search() {
  const [selected, setSelected] = useState(SPACES[0].id)
  const [place, setPlace] = useState('Centro, Bogotá')
  const [radius, setRadius] = useState('1 km')
  const selectedSpace = SPACES.find((s) => s.id === selected)

  return (
    <Layout wide>
      <header className="max-w-2xl">
        <p className="eyebrow">Encuentra tu espacio</p>
        <h1 className="mt-2 text-4xl font-extrabold text-navy">¿Dónde necesitas parquear?</h1>
        <p className="mt-3 text-muted">
          Busca por dirección o barrio y compara espacios cerca de tu destino.
        </p>
      </header>

      {/* Barra de búsqueda */}
      <div className="card mt-8 p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_auto_auto] md:items-end">
          <div>
            <label className="label" htmlFor="place">Dirección o barrio</label>
            <div className="relative">
              <input
                id="place"
                className="field pr-11"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted">
                <Icon.Pin />
              </span>
            </div>
          </div>
          <div>
            <label className="label" htmlFor="radius">Radio de búsqueda</label>
            <div className="relative">
              <select
                id="radius"
                className="field appearance-none pr-10 md:w-44"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
              >
                <option>500 m</option>
                <option>1 km</option>
                <option>2 km</option>
                <option>5 km</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted">
                <Icon.ChevronDown />
              </span>
            </div>
          </div>
          <button className="btn-primary h-[50px] md:px-6">
            Ir <Icon.Search size={18} />
          </button>
        </div>
      </div>

      {/* Resultados + mapa */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,420px)_1fr]">
        <div>
          <div className="mb-4 flex items-baseline justify-between">
            <p className="text-lg font-semibold text-navy">
              {SPACES.length} espacios cerca de ti
            </p>
            <p className="text-sm text-muted">Ordenados por distancia</p>
          </div>

          <div className="space-y-4">
            {SPACES.map((space) => (
              <ResultCard
                key={space.id}
                space={space}
                active={selected === space.id}
                onSelect={() => setSelected(space.id)}
              />
            ))}
          </div>

          <EmptyHint />
        </div>

        <MapPanel radius={radius} space={selectedSpace} />
      </div>
    </Layout>
  )
}

function ResultCard({ space, active, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`card cursor-pointer overflow-hidden p-4 transition ${
        active ? 'ring-2 ring-teal' : 'hover:border-teal/40'
      }`}
    >
      <div className="flex gap-4">
        <img
          src={space.photos[0]}
          alt={space.name}
          className="h-28 w-28 flex-none rounded-xl object-cover"
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-navy">{space.name}</h3>
          <p className="mt-0.5 text-sm text-muted">
            {space.distanceKm.toLocaleString('es-CO')} km · {space.schedule}
          </p>
          <div className="mt-2 flex gap-2">
            <span className="chip">{space.vehicle}</span>
            {space.covered && <span className="chip-muted">Cubierto</span>}
          </div>
          <div className="mt-3 flex items-end justify-between">
            <p className="text-xl font-extrabold text-teal">
              {formatCOP(space.pricePerHour)}
              <span className="text-sm font-medium text-muted"> / hora</span>
            </p>
            <Link
              to={`/espacio/${space.id}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm font-semibold text-teal hover:underline"
            >
              Ver espacio <Icon.ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function EmptyHint() {
  return (
    <div className="mt-6 rounded-2xl bg-teal-50 p-6">
      <p className="eyebrow">Si tu búsqueda no tiene resultados</p>
      <div className="mt-3 flex items-start gap-3">
        <span className="text-teal">
          <Icon.NoPin size={22} />
        </span>
        <div>
          <p className="font-semibold text-navy">Sin resultados en esta zona</p>
          <p className="mt-1 text-sm text-muted">
            Amplía el radio o cambia la dirección para encontrar un espacio.
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <button className="btn-outline">Ampliar radio</button>
        <button className="flex items-center gap-1 text-sm font-semibold text-teal hover:underline">
          Cambiar sitio <Icon.ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}

function MapPanel({ radius, space }) {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-2xl border border-line bg-[#e9f0ee]">
      {/* Mapa ilustrativo (no interactivo, como en el diseño) */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-10 top-24 h-24 w-40 rounded-lg bg-white/60" />
        <div className="absolute left-8 top-80 h-28 w-44 rounded-lg bg-[#d6e6da]/80" />
        <div className="absolute right-16 top-32 h-40 w-56 rounded-lg bg-white/50" />
        <div className="absolute bottom-20 right-24 h-32 w-48 rounded-lg bg-white/40" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-teal/40" />
      </div>

      <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-card">
        <Icon.Pin size={16} className="text-teal" /> Bogotá · Radio de {radius}
      </span>

      <div className="absolute right-5 top-5 flex flex-col overflow-hidden rounded-xl bg-white shadow-card">
        <button className="p-2.5 text-navy hover:bg-canvas"><Icon.Plus size={16} /></button>
        <span className="h-px bg-line" />
        <button className="p-2.5 text-navy hover:bg-canvas"><Icon.Minus size={16} /></button>
      </div>

      <span className="absolute right-10 top-28 rounded-full bg-white px-4 py-2 text-sm font-bold text-navy shadow-card">
        {formatCOP(6000)}/h
      </span>

      <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-teal px-4 py-2 text-sm font-bold text-white shadow-pop">
        <Icon.Logo size={18} /> {formatCOP(space?.pricePerHour ?? 4000)}/h
      </span>

      <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-xl bg-white p-4 shadow-card">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal">
            <Icon.Logo size={22} />
          </span>
          <div>
            <p className="font-bold text-navy">{space?.name}</p>
            <p className="text-sm text-muted">
              A {space?.distanceKm.toLocaleString('es-CO')} km de tu búsqueda ·{' '}
              {space?.covered ? 'Cubierto' : 'Descubierto'}
            </p>
          </div>
        </div>
        <Link to={`/espacio/${space?.id}`} className="text-teal hover:text-teal-600">
          <Icon.ArrowUpRight size={20} />
        </Link>
      </div>

      <span className="absolute bottom-2 right-4 text-xs text-muted">Mapa ilustrativo · Bogotá</span>
    </div>
  )
}
