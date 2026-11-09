import { describe, expect, it } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from './renderWithProviders'
import App from '../App'

/**
 * Flujo feliz end-to-end (RF-01 → RF-06 → RF-07): el usuario autenticado busca,
 * abre un espacio, reserva, paga con el escenario APROBADO y ve la confirmación.
 * Usa el router real de la app con el adaptador mock.
 */
describe('Flujo feliz de reserva', () => {
  it('FLUJO_buscar_reservar_pagar_confirmar', async () => {
    const user = userEvent.setup()
    // Sembramos una sesión para pasar las rutas protegidas.
    sessionStorage.setItem(
      'spazio.sesion',
      JSON.stringify({ jwt: 'jwt-test', cuenta: { id: 'u-andrea', nombre: 'Andrea M.', rolAnfitrion: false } }),
    )
    renderWithProviders(<App />, { route: '/buscar' })

    // 1) Búsqueda: aparece el resultado y abrimos el detalle.
    const verEspacio = await screen.findAllByRole('link', { name: /ver espacio/i })
    await user.click(verEspacio[0])

    // 2) Detalle: vemos el total y reservamos.
    await waitFor(() => expect(screen.getByText('Total (COP)')).toBeInTheDocument())
    await user.click(screen.getByRole('button', { name: /reservar y pagar/i }))

    // 3) Pago: elegimos "Aprobado" (por defecto) y pagamos.
    const botonPagar = await screen.findByRole('button', { name: /pagar .* simulado/i })
    await user.click(botonPagar)

    // 4) Confirmación.
    expect(await screen.findByText('¡Reserva confirmada!')).toBeInTheDocument()

    sessionStorage.clear()
  }, 15000)
})
