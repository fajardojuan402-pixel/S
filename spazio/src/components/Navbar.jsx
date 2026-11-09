import { Link, NavLink } from 'react-router-dom'
import { Icon } from './icons.jsx'
import { useApp } from '../store/AppContext.jsx'

const navItems = [
  { to: '/buscar', label: 'Buscar parqueadero' },
  { to: '/mis-reservas', label: 'Mis reservas' },
  { to: '/publicar', label: 'Publicar espacio' },
]

export default function Navbar() {
  const { user } = useApp()

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/buscar" className="flex items-center gap-3">
          <span className="text-teal">
            <Icon.Logo size={40} />
          </span>
          <span className="text-2xl font-extrabold tracking-tight text-navy">SPAZIO</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative py-6 text-sm font-semibold transition ${
                  isActive
                    ? 'text-navy after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-teal'
                    : 'text-muted hover:text-navy'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {user ? (
          <button className="flex items-center gap-2.5 rounded-full py-1 pl-1 pr-2 transition hover:bg-canvas">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-xs font-bold text-teal">
              {initials(user.name)}
            </span>
            <span className="hidden text-sm font-semibold text-navy sm:block">{user.name}</span>
            <span className="text-muted">
              <Icon.ChevronDown size={16} />
            </span>
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/login" className="text-sm font-bold text-navy hover:text-teal">
              Iniciar sesión
            </Link>
            <Link to="/registro" className="btn-primary">
              Crear cuenta
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

function initials(name = '') {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
