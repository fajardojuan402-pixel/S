// Datos simulados de espacios (parqueaderos) para el MVP de SPAZIO.
// Las fotos usan Unsplash para evitar depender de assets locales.

export const SPACES = [
  {
    id: 'centro',
    name: 'Parqueadero Centro',
    address: 'Cra. 7 # 16-24, Centro',
    neighborhood: 'Centro',
    city: 'Bogotá',
    distanceKm: 0.4,
    schedule: '8:00 – 18:00',
    openFrom: '08:00',
    openTo: '18:00',
    vehicle: 'Carro',
    covered: true,
    pricePerHour: 4000,
    available: true,
    description:
      'Deja tu carro bajo techo en el corazón del Centro. Un parqueadero práctico para tus diligencias, reuniones o una vuelta por la ciudad. Reserva el horario que necesitas y conoce el monto antes de pagar.',
    photos: [
      'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1545179605-1296651e9d0c?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?auto=format&fit=crop&w=800&q=70',
    ],
  },
  {
    id: 'chapinero',
    name: 'Cubierto Chapinero',
    address: 'Calle 63 # 11-40, Chapinero',
    neighborhood: 'Chapinero',
    city: 'Bogotá',
    distanceKm: 0.8,
    schedule: '24 horas',
    openFrom: '00:00',
    openTo: '23:59',
    vehicle: 'Carro',
    covered: true,
    pricePerHour: 6000,
    available: true,
    description:
      'Parqueadero cubierto disponible las 24 horas en Chapinero. Ideal para estadías largas y acceso cómodo a la zona rosa y de oficinas.',
    photos: [
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1604275689235-fdc521556c16?auto=format&fit=crop&w=800&q=70',
    ],
  },
]

export function getSpace(id) {
  return SPACES.find((s) => s.id === id)
}
