// Cliente HTTP real (IAPIRest del SDD). Se usa cuando VITE_USE_MOCK=false.
// Añade el JWT (Bearer), parsea errores { code, message, field } y emite un
// evento global 'spazio:unauthorized' ante 401 para limpiar la sesión.

import type { ApiClient } from './contract'
import {
  ApiException,
  type AvailabilityConflict,
  type BookingStatus,
  type CancelPreviewResponse,
  type CancelResponse,
  type CreateBookingRequest,
  type CreateBookingResponse,
  type CreateSpaceRequest,
  type CreateSpaceResponse,
  type EstadoFiltro,
  type GeocodeResult,
  type GeocodeSuggestion,
  type LoginRequest,
  type LoginResponse,
  type MyBookingsResponse,
  type PayRequest,
  type PayResponse,
  type RegisterRequest,
  type SearchParams,
  type SpaceDetail,
  type SpaceSummary,
} from './types'

const STORAGE_KEY = 'spazio.sesion'

function authHeader(): Record<string, string> {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const jwt = JSON.parse(raw)?.jwt
    return jwt ? { Authorization: `Bearer ${jwt}` } : {}
  } catch {
    return {}
  }
}

export class HttpApiClient implements ApiClient {
  constructor(private baseUrl: string) {}

  private async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const res = await fetch(this.baseUrl + path, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
        ...(init.headers ?? {}),
      },
    })

    if (res.status === 401) {
      window.dispatchEvent(new CustomEvent('spazio:unauthorized'))
    }

    if (!res.ok) {
      let body = { code: 'error', message: 'Ocurrió un error inesperado.' }
      try {
        body = await res.json()
      } catch {
        /* respuesta sin cuerpo JSON */
      }
      throw new ApiException(res.status, body)
    }

    if (res.status === 204) return undefined as T
    return (await res.json()) as T
  }

  register(body: RegisterRequest): Promise<LoginResponse> {
    return this.request('/auth/register', { method: 'POST', body: JSON.stringify(body) })
  }
  login(body: LoginRequest): Promise<LoginResponse> {
    return this.request('/auth/login', { method: 'POST', body: JSON.stringify(body) })
  }
  geocode(q: string): Promise<GeocodeResult> {
    return this.request(`/geocode?q=${encodeURIComponent(q)}`)
  }
  suggestAddresses(q: string): Promise<GeocodeSuggestion[]> {
    return this.request(`/geocode/suggest?q=${encodeURIComponent(q)}`)
  }
  searchSpaces(params: SearchParams): Promise<SpaceSummary[]> {
    const qs = new URLSearchParams({ q: params.q, radioKm: String(params.radioKm) })
    if (params.lat != null) qs.set('lat', String(params.lat))
    if (params.lng != null) qs.set('lng', String(params.lng))
    return this.request(`/spaces/search?${qs.toString()}`)
  }
  getSpace(id: string): Promise<SpaceDetail> {
    return this.request(`/spaces/${id}`)
  }
  createSpace(body: CreateSpaceRequest): Promise<CreateSpaceResponse> {
    return this.request('/spaces', { method: 'POST', body: JSON.stringify(body) })
  }
  createBooking(body: CreateBookingRequest): Promise<CreateBookingResponse> {
    return this.request('/bookings', { method: 'POST', body: JSON.stringify(body) })
  }
  payBooking(id: string, body: PayRequest): Promise<PayResponse> {
    return this.request(`/bookings/${id}/pay`, { method: 'POST', body: JSON.stringify(body) })
  }
  getBooking(id: string): Promise<BookingStatus> {
    return this.request(`/bookings/${id}`)
  }
  releaseHold(id: string): Promise<void> {
    return this.request(`/bookings/${id}/hold`, { method: 'DELETE' })
  }
  myBookings(estado?: EstadoFiltro): Promise<MyBookingsResponse> {
    const qs = estado && estado !== 'todas' ? `?estado=${estado}` : ''
    return this.request(`/bookings/me${qs}`)
  }
  cancelPreview(id: string): Promise<CancelPreviewResponse> {
    return this.request(`/bookings/${id}/cancel/preview`, { method: 'POST' })
  }
  cancelBooking(id: string): Promise<CancelResponse> {
    return this.request(`/bookings/${id}/cancel`, { method: 'POST' })
  }
}

export type { AvailabilityConflict }
