import { createContext, useContext, useMemo, useState } from 'react'

const AppContext = createContext(null)

// Reservas de ejemplo que aparecen en "Mis reservas" (reflejan el diseño).
const SEED_RESERVATIONS = [
  {
    id: 'r-centro',
    spaceId: 'centro',
    spaceName: 'Parqueadero Centro',
    place: 'Cra. 7 # 16-24 · Centro',
    city: 'Bogotá',
    date: '2026-10-14',
    from: '10:00',
    to: '13:00',
    hours: 3,
    pricePerHour: 4000,
    amount: 12000,
    status: 'confirmada',
    startsInHours: 30,
    photo:
      'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=70',
  },
  {
    id: 'r-chapi',
    spaceId: 'chapinero',
    spaceName: 'Cubierto Chapinero',
    place: 'Chapinero',
    city: 'Bogotá',
    date: '2026-10-12',
    from: '09:00',
    to: '11:00',
    hours: 2,
    pricePerHour: 6000,
    amount: 12000,
    status: 'cancelada',
    startsInHours: -40,
    photo:
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=70',
  },
  {
    id: 'r-norte',
    spaceId: 'norte',
    spaceName: 'Parqueadero Norte',
    place: 'Zona Norte',
    city: 'Bogotá',
    date: '2026-10-11',
    from: '07:00',
    to: '08:00',
    hours: 1,
    pricePerHour: 0,
    amount: 0,
    status: 'expirada',
    startsInHours: -60,
    photo:
      'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?auto=format&fit=crop&w=800&q=70',
  },
]

export function AppProvider({ children }) {
  const [user, setUser] = useState({ name: 'Andrea M.', email: 'andrea@correo.com' })
  const [reservations, setReservations] = useState(SEED_RESERVATIONS)
  // Borrador de la reserva en curso (se pasa entre detalle → pago → confirmación)
  const [draft, setDraft] = useState(null)

  const value = useMemo(
    () => ({
      user,
      login: (email) => setUser({ name: email.split('@')[0] || 'Usuario', email }),
      register: (name, email) => setUser({ name, email }),
      logout: () => setUser(null),

      reservations,
      addReservation: (r) =>
        setReservations((prev) => [{ ...r, id: 'r-' + Date.now() }, ...prev]),
      cancelReservation: (id) =>
        setReservations((prev) =>
          prev.map((r) =>
            r.id === id ? { ...r, status: 'cancelada', refund: r.amount } : r,
          ),
        ),

      draft,
      setDraft,
    }),
    [user, reservations, draft],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp debe usarse dentro de AppProvider')
  return ctx
}
