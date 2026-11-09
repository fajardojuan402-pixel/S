import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { SpaceSummary } from '../../api/types'
import { formatCOP } from '../../lib/format'

const BOGOTA: [number, number] = [4.6097, -74.0817]

/** Pin de precio tipo "burbuja". Verde teal si está seleccionado. */
function priceIcon(precio: number, active: boolean): L.DivIcon {
  const bg = active ? '#14576a' : '#ffffff'
  const fg = active ? '#ffffff' : '#14303D'
  const border = active ? '#14576a' : '#E3E8EC'
  return L.divIcon({
    className: 'spazio-price-pin',
    html: `<div style="
      transform: translate(-50%, -100%);
      background:${bg}; color:${fg}; border:1.5px solid ${border};
      border-radius:999px; padding:4px 10px; font-size:12px; font-weight:700;
      white-space:nowrap; box-shadow:0 2px 8px rgba(20,48,61,.18);
      font-family:Inter,system-ui,sans-serif;">${formatCOP(precio)}/h</div>`,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  })
}

/** Punto azul "tu ubicación". */
const userIcon = L.divIcon({
  className: 'spazio-user-pin',
  html: `<div style="
    transform: translate(-50%, -50%);
    width:16px; height:16px; border-radius:999px;
    background:#2563eb; border:3px solid #fff;
    box-shadow:0 0 0 4px rgba(37,99,235,.25);"></div>`,
  iconSize: [0, 0],
  iconAnchor: [0, 0],
})

/** Ajusta el encuadre del mapa a los marcadores visibles cuando cambian. */
function FitBounds({
  puntos,
  selected,
}: {
  puntos: [number, number][]
  selected?: SpaceSummary
}) {
  const map = useMap()
  useEffect(() => {
    if (selected) {
      map.setView([selected.lat, selected.lng], 15, { animate: true })
      return
    }
    if (puntos.length === 1) {
      map.setView(puntos[0], 15, { animate: true })
    } else if (puntos.length > 1) {
      map.fitBounds(L.latLngBounds(puntos).pad(0.2), { animate: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(puntos), selected?.id])
  return null
}

/**
 * MapPanel: mapa real interactivo (Leaflet + OpenStreetMap). Muestra los
 * parqueaderos como pines de precio, el pin de "tu ubicación" si está
 * disponible, y sincroniza el pin seleccionado con la tarjeta elegida (RF-01).
 */
export default function MapPanel({
  selected,
  otros,
  userCoords,
  onSelect,
}: {
  radioKm: number
  selected?: SpaceSummary
  otros: SpaceSummary[]
  userCoords?: { lat: number; lng: number }
  onSelect?: (id: string) => void
}) {
  const centro = useMemo<[number, number]>(() => {
    if (userCoords) return [userCoords.lat, userCoords.lng]
    if (selected) return [selected.lat, selected.lng]
    if (otros[0]) return [otros[0].lat, otros[0].lng]
    return BOGOTA
  }, [userCoords, selected, otros])

  const puntos = useMemo<[number, number][]>(() => {
    const p = otros.map((s) => [s.lat, s.lng] as [number, number])
    if (userCoords) p.push([userCoords.lat, userCoords.lng])
    return p
  }, [otros, userCoords])

  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-xl border border-line">
      <MapContainer
        center={centro}
        zoom={14}
        scrollWheelZoom
        style={{ height: '100%', width: '100%', minHeight: 520 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {userCoords && (
          <Marker position={[userCoords.lat, userCoords.lng]} icon={userIcon}>
            <Popup>Tu ubicación</Popup>
          </Marker>
        )}

        {otros.map((s) => (
          <Marker
            key={s.id}
            position={[s.lat, s.lng]}
            icon={priceIcon(s.precioHora, selected?.id === s.id)}
            eventHandlers={{ click: () => onSelect?.(s.id) }}
          >
            <Popup>
              <div className="min-w-[160px]">
                <p className="font-bold text-ink">{s.titulo}</p>
                <p className="text-sm text-subtle">
                  {s.distanciaKm.toLocaleString('es-CO')} km · {s.cubierto ? 'Cubierto' : 'Descubierto'}
                </p>
                <p className="mt-1 font-extrabold text-teal">{formatCOP(s.precioHora)}/h</p>
                <Link to={`/espacio/${s.id}`} className="mt-1 inline-block text-sm font-semibold text-teal underline">
                  Ver espacio
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}

        <FitBounds puntos={puntos} selected={selected} />
      </MapContainer>

      <span className="pointer-events-none absolute bottom-2 right-3 z-[500] rounded bg-white/80 px-2 py-0.5 text-xs text-subtle">
        Mapa · OpenStreetMap
      </span>
    </div>
  )
}
