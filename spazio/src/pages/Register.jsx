import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import { Icon } from '../components/icons.jsx'
import { useApp } from '../store/AppContext.jsx'

export default function Register() {
  const { register } = useApp()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    register(name || 'Usuario', email)
    navigate('/buscar')
  }

  return (
    <AuthLayout title="Menos vueltas. Más ciudad.">
      <p className="eyebrow">Bienvenido a SPAZIO</p>
      <h1 className="mt-2 text-4xl font-extrabold text-navy">Crea tu cuenta</h1>
      <p className="mt-3 text-muted">
        Tu espacio en la ciudad empieza aquí. Regístrate para reservar o publicar un parqueadero.
      </p>

      <form className="mt-8 space-y-5" onSubmit={onSubmit}>
        <div>
          <label className="label" htmlFor="name">Nombre</label>
          <input
            id="name"
            className="field"
            placeholder="Tu nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
              placeholder="Crea una contraseña"
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

        <p className="text-sm text-muted">
          Al registrarte, aceptas los Términos de uso y la Política de privacidad de SPAZIO.
        </p>

        <button type="submit" className="btn-primary w-full py-3.5 text-base">
          Registrarme <Icon.ArrowRight size={18} />
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        ¿Ya tienes cuenta?{' '}
        <Link to="/login" className="font-bold text-teal hover:underline">Inicia sesión</Link>
      </p>
      <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-muted">
        <Icon.Lock size={16} /> Tus datos, siempre protegidos.
      </p>
    </AuthLayout>
  )
}
