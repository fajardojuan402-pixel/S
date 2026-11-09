import { Icon } from './icons.jsx'

const STEPS = [
  { n: 1, label: 'Elige tu espacio' },
  { n: 2, label: 'Pago simulado' },
  { n: 3, label: 'Confirmación' },
]

// current: paso activo (1,2,3). Los pasos anteriores se marcan como completados.
export default function Stepper({ current }) {
  return (
    <ol className="flex items-center gap-3 text-sm">
      {STEPS.map((step, i) => {
        const done = step.n < current
        const active = step.n === current
        return (
          <li key={step.n} className="flex flex-1 items-center gap-3 last:flex-none">
            <span className="flex items-center gap-2.5">
              <span
                className={`flex h-7 w-7 flex-none items-center justify-center rounded-full text-xs font-bold ${
                  done || active ? 'bg-teal text-white' : 'bg-line text-muted'
                }`}
              >
                {done ? <Icon.Check size={14} /> : step.n}
              </span>
              <span className={`font-semibold ${active || done ? 'text-navy' : 'text-muted'}`}>
                {step.label}
              </span>
            </span>
            {i < STEPS.length - 1 && <span className="hidden h-px flex-1 bg-line sm:block" />}
          </li>
        )
      })}
    </ol>
  )
}
