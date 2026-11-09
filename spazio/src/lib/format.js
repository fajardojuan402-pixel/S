// Utilidades de formato para COP, fechas y horas (español de Colombia)

export function formatCOP(value) {
  return '$' + new Intl.NumberFormat('es-CO').format(Math.round(value))
}

export function hoursBetween(from, to) {
  const [fh, fm] = from.split(':').map(Number)
  const [th, tm] = to.split(':').map(Number)
  const diff = th * 60 + tm - (fh * 60 + fm)
  return Math.max(0, diff / 60)
}

const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]

// Recibe "2026-10-14" y devuelve "14 de octubre de 2026"
export function formatLongDate(iso) {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} de ${MESES[m - 1]} de ${y}`
}

const MESES_CORTOS = [
  'ene', 'feb', 'mar', 'abr', 'may', 'jun',
  'jul', 'ago', 'sep', 'oct', 'nov', 'dic',
]

// Recibe "2026-10-14" y devuelve "14 oct 2026"
export function formatShortDate(iso) {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${MESES_CORTOS[m - 1]} ${y}`
}

// Comprueba si dos rangos horarios (HH:mm) se traslapan
export function periodsOverlap(aFrom, aTo, bFrom, bTo) {
  const toMin = (t) => {
    const [h, m] = t.split(':').map(Number)
    return h * 60 + m
  }
  return toMin(aFrom) < toMin(bTo) && toMin(bFrom) < toMin(aTo)
}
