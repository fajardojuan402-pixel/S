import type { ApiClient } from './contract'
import {
  ApiException,
  type ApiError,
  type AuthUser,
  type BookingListItem,
  type BookingStatus,
  type BookingsContadores,
  type CancelPreviewResponse,
  type CancelResponse,
  type CreateBookingRequest,
  type CreateBookingResponse,
  type CreateSpaceRequest,
  type CreateSpaceResponse,
  type EstadoFiltro,
  type EstadoReserva,
  type GeocodeResult,
  type GeocodeSuggestion,
  type LoginRequest,
  type LoginResponse,
  type MyBookingsResponse,
  type PayRequest,
  type PayResponse,
  type Periodo,
  type RegisterRequest,
  type SearchParams,
  type SpaceDetail,
  type SpaceSummary,
  type TipoVehiculo,
  type WompiCheckout,
  type WompiProcessRequest,
  type WompiProcessResponse,
} from './types'

const STORAGE_KEY = 'spazio.sesion'

const TZ_OFFSET = '-05:00'

const FOTOS_FALLBACK = [
  'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1545179605-1296651e9d0a?auto=format&fit=crop&w=800&q=60',
]

interface BackendToken {
  access_token: string
  token_type: string
}

interface BackendUser {
  id: string
  email: string
  full_name: string
  is_host: boolean
  created_at: string
}

interface BackendAvailability {
  id: string
  space_id: string
  start_time: string
  end_time: string
}

interface BackendSpace {
  id: string
  host_id: string
  title: string | null
  category: string
  address: string
  neighborhood: string | null
  conditions: string | null
  price_per_hour: number
  latitude: number
  longitude: number
  photos: string[]
  is_active: boolean
}

interface BackendSpaceNearby extends BackendSpace {
  distance_meters: number
  availabilities: { start_time: string; end_time: string }[]
}

interface BackendSpaceCreate extends BackendSpace {
  host_role_activated: boolean
}

interface BackendBooking {
  id: string
  space_id: string
  user_id: string
  start_time: string
  end_time: string
  hourly_price_snapshot: number
  total_amount: number
  status: 'PENDING_PAYMENT' | 'CONFIRMED' | 'CANCELLED' | 'EXPIRED'
  locked_until: string
  cancelled_at: string | null
  created_at: string
  is_cancellable?: boolean
  cancellation_reason?: string | null
  refund_percentage?: number | null
  refund_amount?: number | null
}

interface BackendWompiCheckout {
  public_key: string
  currency: string
  amount_in_cents: number
  reference: string
  signature: string
}

interface BackendPaymentResult {
  message: string
  payment_id: string
  status: string
  gateway_reference: string | null
}

const ESTADO_MAP: Record<BackendBooking['status'], EstadoReserva> = {
  PENDING_PAYMENT: 'PENDIENTE_PAGO',
  CONFIRMED: 'CONFIRMADA',
  CANCELLED: 'CANCELADA',
  EXPIRED: 'EXPIRADA',
}

function toEstado(status: BackendBooking['status']): EstadoReserva {
  return ESTADO_MAP[status] ?? 'PENDIENTE_PAGO'
}

function toIsoBogota(fechaHora: string): string {
  const base = fechaHora.length === 16 ? `${fechaHora}:00` : fechaHora
  return `${base}${TZ_OFFSET}`
}

function fechaParte(iso: string): string {
  return isoEnBogota(iso).slice(0, 10)
}

function horaParte(iso: string): string {
  return isoEnBogota(iso).slice(11, 16)
}

function isoEnBogota(iso: string): string {
  const d = new Date(iso)
  const bogota = new Date(d.getTime() - 5 * 3600 * 1000)
  return bogota.toISOString().slice(0, 16)
}

function horasEntre(startIso: string, endIso: string): number {
  const ms = new Date(endIso).getTime() - new Date(startIso).getTime()
  return Math.round((ms / 3_600_000) * 100) / 100
}

function segundosRestantes(lockedUntil: string): number {
  const ms = new Date(lockedUntil).getTime() - Date.now()
  return Math.max(0, Math.floor(ms / 1000))
}

function fotosDe(space: BackendSpace): string[] {
  const fotos = (space.photos ?? []).filter(Boolean)
  if (fotos.length >= 3) return fotos.slice(0, 3)
  return [...fotos, ...FOTOS_FALLBACK].slice(0, 3)
}

function derivarHorario(periodos: Periodo[]): {
  horario: string
  horarioApertura: { desde: string; hasta: string }
} {
  if (periodos.length === 0) {
    return { horario: 'Horario por confirmar', horarioApertura: { desde: '00:00', hasta: '23:00' } }
  }
  let desde = '23:59'
  let hasta = '00:00'
  for (const p of periodos) {
    const d = p.inicio.slice(11, 16)
    const h = p.fin.slice(11, 16)
    if (d < desde) desde = d
    if (h > hasta) hasta = h
  }
  return { horario: `${desde}–${hasta}`, horarioApertura: { desde, hasta } }
}

function mapSummary(space: BackendSpaceNearby | BackendSpace, distanciaKm: number): SpaceSummary {
  const fotos = fotosDe(space)
  return {
    id: space.id,
    titulo: space.title || 'Parqueadero en Bogotá',
    direccion: space.address,
    distanciaKm,
    horario: 'availabilities' in space && space.availabilities.length > 0
      ? derivarHorario(
          space.availabilities.map((a) => ({ inicio: isoEnBogota(a.start_time), fin: isoEnBogota(a.end_time) })),
        ).horario
      : 'Consultar disponibilidad',
    precioHora: space.price_per_hour,
    tipoVehiculo: 'ambos' as TipoVehiculo,
    cubierto: false,
    foto: fotos[0],
    lat: space.latitude,
    lng: space.longitude,
  }
}

async function parseError(res: Response): Promise<ApiError> {
  try {
    const body = await res.json()
    const detail = body?.detail
    if (typeof detail === 'string') return { code: 'error', message: detail }
    if (Array.isArray(detail) && detail[0]?.msg) {
      return { code: 'validation', message: String(detail[0].msg) }
    }
    if (body?.message) return { code: body.code ?? 'error', message: body.message }
  } catch {
    void 0
  }
  return { code: 'error', message: 'Ocurrió un error inesperado.' }
}

export class BackendApiClient implements ApiClient {
  constructor(private baseUrl: string) {}

  private authHeader(): Record<string, string> {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY)
      if (!raw) return {}
      const jwt = JSON.parse(raw)?.jwt
      return jwt ? { Authorization: `Bearer ${jwt}` } : {}
    } catch {
      return {}
    }
  }

  private async request<T>(path: string, init: RequestInit = {}, token?: string): Promise<T> {
    const auth = token ? { Authorization: `Bearer ${token}` } : this.authHeader()
    const res = await fetch(`${this.baseUrl}/api/v1${path}`, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...auth,
        ...(init.headers ?? {}),
      },
    })

    if (res.status === 401) {
      window.dispatchEvent(new CustomEvent('spazio:unauthorized'))
    }
    if (!res.ok) {
      throw new ApiException(res.status, await parseError(res))
    }
    if (res.status === 204) return undefined as T
    return (await res.json()) as T
  }

  async register(body: RegisterRequest): Promise<LoginResponse> {
    await this.request<BackendUser>('/users/register', {
      method: 'POST',
      body: JSON.stringify({
        full_name: body.nombre,
        email: body.email,
        password: body.password,
      }),
    })
    return this.login({ email: body.email, password: body.password })
  }

  async login(body: LoginRequest): Promise<LoginResponse> {
    const token = await this.request<BackendToken>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: body.email, password: body.password }),
    })
    const me = await this.request<BackendUser>('/users/me', {}, token.access_token)
    const user: AuthUser = {
      id: me.id,
      nombre: me.full_name,
      rolAnfitrion: me.is_host,
    }
    return { token: token.access_token, user }
  }

  async geocode(q: string): Promise<GeocodeResult> {
    const r = await this.request<{ address: string; latitude: number; longitude: number }>(
      `/geocode?q=${encodeURIComponent(q)}`,
    )
    return { lat: r.latitude, lng: r.longitude, label: r.address }
  }

  async suggestAddresses(q: string): Promise<GeocodeSuggestion[]> {
    const r = await this.request<{ display_name: string; latitude: number; longitude: number }[]>(
      `/geocode/suggest?q=${encodeURIComponent(q)}`,
    )
    return r.map((s) => ({ label: s.display_name, lat: s.latitude, lng: s.longitude }))
  }

  async reverseGeocode(lat: number, lng: number): Promise<GeocodeResult> {
    const r = await this.request<{ address: string; latitude: number; longitude: number }>(
      `/geocode/reverse?latitude=${lat}&longitude=${lng}`,
    )
    return { lat: r.latitude, lng: r.longitude, label: r.address }
  }

  async searchSpaces(params: SearchParams): Promise<SpaceSummary[]> {
    let lat = params.lat
    let lng = params.lng
    if (lat == null || lng == null) {
      const geo = await this.geocode(params.q)
      lat = geo.lat
      lng = geo.lng
    }
    const radius = Math.round(params.radioKm * 1000)
    const spaces = await this.request<BackendSpaceNearby[]>(
      `/spaces/nearby?latitude=${lat}&longitude=${lng}&radius=${radius}`,
    )
    return spaces.map((s) => mapSummary(s, Math.round((s.distance_meters / 1000) * 100) / 100))
  }

  async getSpace(id: string): Promise<SpaceDetail> {
    const [space, avails] = await Promise.all([
      this.request<BackendSpace>(`/spaces/${id}`),
      this.request<BackendAvailability[]>(`/availabilities/space/${id}`),
    ])
    const periodos: Periodo[] = avails.map((a) => ({
      inicio: isoEnBogota(a.start_time),
      fin: isoEnBogota(a.end_time),
    }))
    const { horario, horarioApertura } = derivarHorario(periodos)
    const fotos = fotosDe(space)
    const summary = mapSummary(space, 0)
    return {
      ...summary,
      horario,
      descripcion: space.conditions || 'Espacio de parqueo disponible en Bogotá.',
      fotos,
      periodos,
      horarioApertura,
    }
  }

  async createSpace(body: CreateSpaceRequest): Promise<CreateSpaceResponse> {
    let lat = body.lat
    let lng = body.lng
    if (lat == null || lng == null) {
      const geo = await this.geocode(body.direccion)
      lat = geo.lat
      lng = geo.lng
    }
    const created = await this.request<BackendSpaceCreate>('/spaces/', {
      method: 'POST',
      body: JSON.stringify({
        title: body.direccion.split(',')[0]?.slice(0, 150) || 'Parqueadero',
        category: 'PARKING',
        address: body.direccion,
        conditions: body.condiciones,
        price_per_hour: body.precioHora,
        latitude: lat,
        longitude: lng,
        photos: (body.fotos ?? []).slice(0, 3),
      }),
    })

    for (const p of body.periodos) {
      await this.request('/availabilities/', {
        method: 'POST',
        body: JSON.stringify({
          space_id: created.id,
          start_time: toIsoBogota(`${p.fecha}T${p.desde}`),
          end_time: toIsoBogota(`${p.fecha}T${p.hasta}`),
        }),
      })
    }

    return { id: created.id, rolAnfitrionActivado: created.host_role_activated }
  }

  async createBooking(body: CreateBookingRequest): Promise<CreateBookingResponse> {
    const booking = await this.request<BackendBooking>('/bookings/', {
      method: 'POST',
      body: JSON.stringify({
        space_id: body.spaceId,
        start_time: toIsoBogota(body.inicio),
        end_time: toIsoBogota(body.fin),
      }),
    })
    return {
      id: booking.id,
      expiresAt: booking.locked_until,
      monto: booking.total_amount,
    }
  }

  async payBooking(id: string, body: PayRequest): Promise<PayResponse> {
    const simulated = body.escenario === 'APROBADO' ? 'APPROVED' : 'REJECTED'
    await this.request<BackendPaymentResult>('/payments/process', {
      method: 'POST',
      body: JSON.stringify({
        booking_id: id,
        payment_method: 'CARD',
        simulated_status: simulated,
      }),
    })
    const booking = await this.request<BackendBooking>(`/bookings/${id}`)
    return { estado: toEstado(booking.status) }
  }

  async wompiCheckout(id: string): Promise<WompiCheckout> {
    const r = await this.request<BackendWompiCheckout>(`/payments/checkout/${id}`, {
      method: 'POST',
    })
    return {
      publicKey: r.public_key,
      reference: r.reference,
      amountInCents: r.amount_in_cents,
      currency: r.currency,
      signature: r.signature,
    }
  }

  async wompiProcess(id: string, body: WompiProcessRequest): Promise<WompiProcessResponse> {
    const r = await this.request<BackendPaymentResult>('/payments/verify', {
      method: 'POST',
      body: JSON.stringify({ booking_id: id, transaction_id: body.transactionId }),
    })
    const booking = await this.request<BackendBooking>(`/bookings/${id}`)
    return { estado: toEstado(booking.status), wompiStatus: r.status }
  }

  async getBooking(id: string): Promise<BookingStatus> {
    const b = await this.request<BackendBooking>(`/bookings/${id}`)
    const space = await this.request<BackendSpace>(`/spaces/${b.space_id}`)
    return {
      id: b.id,
      estado: toEstado(b.status),
      segundosRestantes: segundosRestantes(b.locked_until),
      espacio: {
        id: space.id,
        titulo: space.title || 'Parqueadero en Bogotá',
        direccion: space.address,
        foto: fotosDe(space)[0],
      },
      inicio: isoEnBogota(b.start_time),
      fin: isoEnBogota(b.end_time),
      monto: b.total_amount,
    }
  }

  async releaseHold(id: string): Promise<void> {
    try {
      await this.request(`/bookings/${id}/cancel`, { method: 'POST' })
    } catch {
      void 0
    }
  }

  async myBookings(estado?: EstadoFiltro): Promise<MyBookingsResponse> {
    const bookings = await this.request<BackendBooking[]>('/bookings/me')

    const items: BookingListItem[] = await Promise.all(
      bookings.map(async (b) => {
        let titulo = 'Parqueadero en Bogotá'
        let direccion = 'Bogotá'
        let foto = FOTOS_FALLBACK[0]
        try {
          const space = await this.request<BackendSpace>(`/spaces/${b.space_id}`)
          titulo = space.title || titulo
          direccion = space.address
          foto = fotosDe(space)[0]
        } catch {
          void 0
        }
        const horasParaInicio = Math.max(
          0,
          (new Date(b.start_time).getTime() - Date.now()) / 3_600_000,
        )
        return {
          id: b.id,
          espacio: { id: b.space_id, titulo, direccion, foto },
          ciudad: 'Bogotá',
          fecha: fechaParte(b.start_time),
          desde: horaParte(b.start_time),
          hasta: horaParte(b.end_time),
          horas: horasEntre(b.start_time, b.end_time),
          monto: b.total_amount,
          estado: toEstado(b.status),
          motivo: b.cancellation_reason ?? undefined,
          horasParaInicio,
        }
      }),
    )

    const contadores: BookingsContadores = {
      todas: items.length,
      confirmada: items.filter((i) => i.estado === 'CONFIRMADA').length,
      cancelada: items.filter((i) => i.estado === 'CANCELADA').length,
      expirada: items.filter((i) => i.estado === 'EXPIRADA').length,
    }

    const filtrados =
      !estado || estado === 'todas'
        ? items
        : items.filter((i) => i.estado === estado.toUpperCase())

    return { items: filtrados, contadores }
  }

  async cancelPreview(id: string): Promise<CancelPreviewResponse> {
    const b = await this.request<BackendBooking>(`/bookings/${id}`)
    const horasParaInicio = Math.max(
      0,
      (new Date(b.start_time).getTime() - Date.now()) / 3_600_000,
    )
    const pct = horasParaInicio >= 24 ? 100 : 0
    const monto = (b.total_amount * pct) / 100
    return { pct, monto, horasParaInicio }
  }

  async cancelBooking(id: string): Promise<CancelResponse> {
    const b = await this.request<BackendBooking>(`/bookings/${id}/cancel`, { method: 'POST' })
    return { estado: 'CANCELADA', reembolso: b.refund_amount ?? 0 }
  }
}
