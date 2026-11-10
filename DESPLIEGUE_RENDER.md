# Desplegar SPAZIO en Render (+ Supabase)

Render hostea el **backend** y el **frontend**. La **base de datos** va en
**Supabase** (porque trae PostGIS, que Render Postgres no tiene).

El backend es `spazio-backend` (FastAPI **async** + Poetry, de @sansanchez2090,
extendido con geocoding y el Widget de pago Wompi). Expone sus rutas bajo
`/api/v1/...`. El frontend conectado (`spazio-app-conectado`) se comunica con
él mediante un adaptador que traduce el contrato.

Tiempo estimado: 20–30 min la primera vez.

---

## Requisito previo: subir el proyecto a GitHub

Render despliega desde un repositorio Git. El repo ya incluye `render.yaml`,
que define ambos servicios. El `.gitignore` excluye `node_modules`, `.venv`,
`dist` y `.env`, así que no subes secretos ni pesados.

---

## Paso 1 — Base de datos en Supabase

1. Entra a https://supabase.com → **New project**. Elige una contraseña para la BD y guárdala.
2. Cuando el proyecto esté listo, ve a **SQL Editor** → **New query**.
3. Abre el archivo `spazio-backend/database/schema.sql`, copia todo y pégalo.
   Pulsa **Run**. (Crea PostGIS, las tablas, los enums y el trigger.)
   - No actives *Row Level Security* (RLS): la validación de roles la hace el
     backend en FastAPI.
4. Ve a **Project Settings → Database → Connection string** y copia la URI.
   - **Importante:** el backend es asíncrono (asyncpg), así que la URL debe
     empezar con `postgresql+asyncpg://` (no `postgresql://`).
   - Usa la cadena del **pooler** (`...pooler.supabase.com:5432`) si tu red es
     solo IPv4; la conexión directa (`db.xxxx.supabase.co`) requiere IPv6.
   - Ejemplo final:
     `postgresql+asyncpg://postgres.xxxx:TU_PASSWORD@aws-0-us-east-1.pooler.supabase.com:5432/postgres`
   - Si la contraseña tiene caracteres especiales (p. ej. `*`), codifícalos en
     URL (`*` → `%2A`).

Guarda esa URI; es tu `DATABASE_URL`.

---

## Paso 2 — Backend y frontend en Render (con el Blueprint)

1. Entra a https://render.com → **New → Blueprint**.
2. Conecta tu repo de GitHub. Render detecta `render.yaml` y propone crear
   `spazio-api` (backend, rootDir `spazio-backend`) y `spazio-web` (frontend).
3. Antes de crear, Render pide las variables marcadas como "sync:false".
   Puedes dejarlas vacías ahora y rellenarlas en el Paso 3. Pulsa **Apply**.

Render construye los dos servicios. El backend instala dependencias con Poetry
(`pip install poetry && poetry install --no-root`) y arranca con
`poetry run uvicorn app.main:app`. Al terminar te da dos URLs, por ejemplo:
- Backend: `https://spazio-api.onrender.com`
- Frontend: `https://spazio-web.onrender.com`

---

## Paso 3 — Rellenar las variables de entorno

**En el servicio `spazio-api`** (Environment → Add/Edit):
- `DATABASE_URL` = la URI asíncrona de Supabase del Paso 1
- `WOMPI_PUBLIC_KEY` = tu llave pública de Wompi Sandbox (`pub_test_...`)
- `WOMPI_PRIVATE_KEY` = tu llave privada de Wompi Sandbox (`prv_test_...`)
- `WOMPI_INTEGRITY_SECRET` = tu secreto de integridad (`test_integrity_...`)
- (`SECRET_KEY` ya se generó solo; `WOMPI_BASE_URL` y las demás ya tienen valor)

> CORS: el backend permite todos los orígenes (`allow_origins=["*"]`), así que
> no necesitas configurar la URL del frontend. En producción real conviene
> restringirlo.

**En el servicio `spazio-web`** (Environment):
- `VITE_API_URL` = la **raíz** del backend, p. ej. `https://spazio-api.onrender.com`
  (sin `/api/v1`: el adaptador del frontend lo añade solo)
- `VITE_USE_MOCK` = `false` (ya viene así)

Tras guardar, **Manual Deploy → Deploy latest commit** en ambos servicios (el
frontend necesita rebuild porque las variables VITE se incrustan en el build).

---

## Paso 4 — Probar

1. Abre `/health` del backend: debe responder `{"status":"ok","database":"connected"}`.
2. Abre la web (`spazio-web`), regístrate (crea cuenta), inicia sesión y usa la app.
3. Pago: en la pantalla de pago se abre el **Widget de Wompi (sandbox)**. Usa
   la tarjeta de prueba `4242 4242 4242 4242` (aprobada) o `4111 1111 1111 1111`
   (rechazada), con cualquier fecha futura y CVC de 3 dígitos. No se cobra dinero real.

---

## Notas del plan gratuito de Render
- El backend **se duerme** tras 15 min sin tráfico; la primera petición luego
  tarda ~30–60 s en despertar. Es normal en el free tier.
- Supabase free pausa el proyecto tras una semana de inactividad; entra a su
  panel para reactivarlo antes de una demo.

## Si algo falla
- **El frontend carga pero no trae datos:** revisa que `VITE_API_URL` apunte a
  la raíz del backend (sin `/api/v1`) y que el backend responda en `/health`.
- **El backend no arranca:** mira los *Logs* en Render; casi siempre es la
  `DATABASE_URL` (debe ser `postgresql+asyncpg://...`, con la contraseña y el
  host correctos, y codificando caracteres especiales).
