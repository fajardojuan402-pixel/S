import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import { Icon } from '../components/icons.jsx'
import { useApp } from '../store/AppContext.jsx'

export default function Login() {
  const { login } = useApp()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    login(email || 'andrea@correo.com')
    navigate('/buscar')
  }

  return (
    <AuthLayout title="Tu próximo destino ya tiene espacio.">
      <p className="eyebrow">Qué bueno verte de nuevo</p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy">Entra a SPAZIO</h1>
      <p className="mt-3 text-muted">
        Accede a tus reservas y encuentra un espacio cerca de tu próximo destino.
      </p>

      <form className="mt-8 space-y-5" onSubmit={onSubmit}>
        <div>
          <label className="label" htmlFor="email">Correo electrónico</label>
          <div className="relative">
            <input
              id="email"
              type="email"
              className="field pr-11"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted">
              <Icon.Mail />
            </span>
          </div>
        </div>

        <div>
          <label className="label" htmlFor="password">Contraseña</label>
          <div className="relative">
            <input
              id="password"
              type={showPass ? 'text' : 'password'}
              className="field pr-11"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPass((s) => !s)}
              className="absolute inset-y-0 right-3 flex items-center text-muted hover:text-navy"
              aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              <Icon.EyeOff />
            </button>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full py-3.5 text-base">
          Iniciar sesión <Icon.ArrowRight size={18} />
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        ¿No tienes cuenta?{' '}
        <Link to="/registro" className="font-bold text-teal hover:underline">Crear cuenta</Link>
      </p>
      <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-muted">
        <Icon.Shield size={16} /> Un acceso seguro, una ciudad más sencilla.
      </p>
    </AuthLayout>
  )
}
