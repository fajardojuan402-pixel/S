// Selector del ApiClient: mock en memoria o cliente HTTP real, según VITE_USE_MOCK.
import type { ApiClient } from './contract'
import { HttpApiClient } from './http'
import { MockApiClient } from './mock/mockClient'

const useMock = import.meta.env.VITE_USE_MOCK === 'true'
const baseUrl = import.meta.env.VITE_API_URL ?? ''

export const api: ApiClient = useMock ? new MockApiClient() : new HttpApiClient(baseUrl)

export const IS_MOCK = useMock
