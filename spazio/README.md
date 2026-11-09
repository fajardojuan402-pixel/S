# SPAZIO — Frontend (MVP parqueaderos)

Frontend del marketplace de parqueaderos SPAZIO, construido a partir del diseño de Figma.
Implementa las pantallas del incremento 1 (parqueaderos) del SRS.

## Stack

- React 18 + Vite
- React Router
- Tailwind CSS
- Datos y pago **simulados** (sin backend), como define el MVP del SRS

## Pantallas

| Ruta | Pantalla |
|------|----------|
| `/registro` | Crear cuenta |
| `/login` | Iniciar sesión |
| `/buscar` | Buscar parqueadero (lista + mapa ilustrativo) |
| `/espacio/:id` | Detalle del espacio + reserva (paso 1) |
| `/reservar/:id/pago` | Pago simulado (paso 2) |
| `/reservar/:id/confirmacion` | Confirmación (paso 3) |
| `/mis-reservas` | Mis reservas + cancelación |
| `/publicar` | Publicar parqueadero |

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto http://localhost:5173).

> Nota (Windows/PowerShell): si `npm` está bloqueado por la política de ejecución,
> usa `npm.cmd install` y `npm.cmd run dev`.

## Notas de diseño

- La paleta (teal `#14576a`, navy `#15283a`, fondo `#f3f6f7`) y la tipografía Inter
  se extrajeron del diseño de Figma de SPAZIO.
- El pago nunca cobra dinero real: el selector de escenario simula aprobado,
  rechazado o sin respuesta, con un temporizador de retención de 10 minutos.
- La publicación valida que los periodos de disponibilidad no se traslapen (RN del SRS).
