# Desplegar SPAZIO en Render (+ Supabase)

Render hostea el **backend** y el **frontend**. La **base de datos** va en
**Supabase** (porque trae PostGIS, que Render Postgres no tiene).

Tiempo estimado: 20–30 min la primera vez.

---

## Requisito previo: subir el proyecto a GitHub

Render despliega desde un repositorio Git. Si aún no está en GitHub:

```powershell
cd "c:\Users\david\Desktop\Front  Proyecto"
git init
git add .
git commit -m "SPAZIO: frontend + backend"
# crea un repo vacío en github.com y luego:
git remote add origin https://github.com/<tu-usuario>/spazio.git
git branch -M main
git push -u origin main
```

> El `.gitignore` ya excluye `node_modules`, `.venv`, `dist` y `.env`, así que
> no subes secretos ni pesados.

---

## Paso 1 — Base de datos en Supabase

1. Entra a https://supabase.com → **New project**. Elige una contraseña para la BD y guárdala.
2. Cuando el proyecto esté listo, ve a **SQL Editor** → **New query**.
3. Abre el archivo `spazio-api/db/schema.sql`, copia todo y pégalo. Pulsa **Run**.
   (Crea PostGIS, las tablas, los enums y el trigger.)
4. Ve a **Project Settings → Database → Connection string → URI** y cópiala.
   Se ve así: `postgresql://postgres:TU_PASSWORD@db.xxxx.supabase.co:5432/postgres`
   - Si Supabase muestra `[YOUR-PASSWORD]`, reemplázalo por la contraseña del paso 1.

Guarda esa URI; es tu `DATABASE_URL`.

---

## Paso 2 — Backend y frontend en Render (con el Blueprint)

El repo ya incluye `render.yaml`, que define ambos servicios.

1. Entra a https://render.com → **New → Blueprint**.
2. Conecta tu repo de GitHub. Render detecta `render.yaml` y propone crear
   `spazio-api` (backend) y `spazio-web` (frontend).
3. Antes de crear, Render pide las variables marcadas como "sync:false".
   Puedes dejarlas vacías ahora y rellenarlas en el paso 3 (es más fácil
   porque aún no conoces las URLs finales). Pulsa **Apply**.

Render construye los dos servicios. Al terminar te da dos URLs, por ejemplo:
- Backend: `https://spazio-api.onrender.com`
- Frontend: `https://spazio-web.onrender.com`

---

## Paso 3 — Rellenar las variables de entorno

**En el servicio `spazio-api`** (Environment → Add/Edit):
- `DATABASE_URL` = la URI de Supabase del Paso 1
- `CORS_ORIGINS` = la URL del frontend, p. ej. `https://spazio-web.onrender.com`
- (`JWT_SECRET` ya se generó solo; las demás ya tienen valor)

**En el servicio `spazio-web`** (Environment):
- `VITE_API_URL` = la URL del backend, p. ej. `https://spazio-api.onrender.com`
- `VITE_USE_MOCK` = `false` (ya viene así)

Tras guardar, **Manual Deploy → Deploy latest commit** en ambos servicios para
que tomen las variables nuevas (el frontend necesita rebuild porque las
variables VITE se incrustan en el build).

---

## Paso 4 — Datos de ejemplo (opcional)

Para tener parqueaderos de prueba, corre el seed una vez apuntando a Supabase.
Desde tu PC:

```powershell
cd "c:\Users\david\Desktop\Front  Proyecto\spazio-api"
# Temporalmente, usa la URI de Supabase:
$env:DATABASE_URL="postgresql://postgres:TU_PASSWORD@db.xxxx.supabase.co:5432/postgres"
.\.venv\Scripts\python.exe seed_dev.py
```

Esto crea la cuenta `andrea@correo.com` / `clave1234` y dos parqueaderos.
(También puedes registrarte desde la web y publicar tus propios espacios.)

---

## Listo

Abre la URL del frontend (`spazio-web`), regístrate o entra, y usa la app.

### Notas del plan gratuito de Render
- El backend **se duerme** tras 15 min sin tráfico; la primera petición luego
  tarda ~30–60 s en despertar. Es normal en el free tier.
- Supabase free pausa el proyecto tras una semana de inactividad; entra a su
  panel para reactivarlo antes de una demo.

### Si algo falla
- **El frontend carga pero no trae datos:** revisa que `VITE_API_URL` apunte al
  backend y que `CORS_ORIGINS` del backend incluya la URL exacta del frontend.
- **El backend no arranca:** mira los *Logs* en Render; casi siempre es la
  `DATABASE_URL` mal copiada (contraseña o host).
