import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Minus, Plus } from 'lucide-react'
import type { SpaceSummary } from '../../api/types'
import { formatCOP } from '../../lib/format'
import Logo from '../../components/layout/Logo'

/**
 * MapPanel: mapa ILUSTRATIVO (SVG/CSS, sin librería de mapas). Marca el precio
 * del espacio seleccionado y el de otro espacio como referencia (RF-01).
 * Etiquetado como "Mapa ilustrativo" para no prometer geolocalización real.
 */
export default function MapPanel({
  radioKm,
  selected,
  otros,
}: {
  radioKm: number
  selected?: SpaceSummary
  otros: SpaceSummary[]
}) {
  const otro = otros.find((s) => s.id !== selected?.id)

  return (
    <div
      className="relative min-h-[520px] overflow-hidden rounded-xl border border-line bg-[#e9f0ee]"
      role="img"
      aria-label={`Mapa ilustrativo de Bogotá con radio de ${radioKm} km`}
    >
      <div className="absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute left-10 top-24 h-24 w-40 rounded-lg bg-white/60" />
        <div className="absolute left-8 top-80 h-28 w-44 rounded-lg bg-[#d6e6da]/80" />
        <div className="absolute right-16 top-32 h-40 w-56 rounded-lg bg-white/50" />
        <div className="absolute bottom-20 right-24 h-32 w-48 rounded-lg bg-white/40" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-teal/40" />
      </div>

      <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card">
        <MapPin size={16} className="text-teal" /> Bogotá · Radio de {radioKm} km
      </span>

      <div className="absolute right-5 top-5 flex flex-col overflow-hidden rounded-lg bg-white shadow-card" aria-hidden>
        <span className="p-2.5 text-ink"><Plus size={16} /></span>
        <span className="h-px bg-line" />
        <span className="p-2.5 text-ink"><Minus size={16} /></span>
      </div>

      {otro && (
        <span className="absolute right-10 top-28 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink shadow-card">
          {formatCOP(otro.precioHora)}/h
        </span>
      )}

      {selected && (
        <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-teal px-4 py-2 text-sm font-bold text-white shadow-pop">
          <Logo size={18} /> {formatCOP(selected.precioHora)}/h
        </span>
      )}

      {selected && (
        <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-lg bg-white p-4 shadow-card">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-soft">
              <Logo size={22} />
            </span>
            <div>
              <p className="font-bold text-ink">{selected.titulo}</p>
              <p className="text-sm text-subtle">
                A {selected.distanciaKm.toLocaleString('es-CO')} km de tu búsqueda ·{' '}
                {selected.cubierto ? 'Cubierto' : 'Descubierto'}
              </p>
            </div>
          </div>
          <Link to={`/espacio/${selected.id}`} className="text-teal hover:text-teal-600" aria-label={`Abrir ${selected.titulo}`}>
            <ArrowUpRight size={20} />
          </Link>
        </div>
      )}

      <span className="absolute bottom-2 right-4 text-xs text-subtle">Mapa ilustrativo · Bogotá</span>
    </div>
  )
}
