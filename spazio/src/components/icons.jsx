// Set de iconos SVG inline (stroke currentColor), estilo lineal como el diseño.

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Icon = {
  Logo: (p) => (
    <svg viewBox="0 0 32 32" width={p.size || 32} height={p.size || 32} {...p}>
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M11 9h6.2c3 0 4.8 1.7 4.8 4.3 0 2.7-1.9 4.4-5 4.4h-2.3V23H11V9zm3.7 5.9h1.8c1.1 0 1.8-.6 1.8-1.6s-.7-1.5-1.8-1.5h-1.8v3.1z"
        fill="#fff"
      />
    </svg>
  ),
  Pin: (p) => (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  Mail: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  EyeOff: (p) => (
    <svg {...base} {...p}>
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19M6.61 6.61A18.5 18.5 0 0 0 2 12s3 8 10 8a9.12 9.12 0 0 0 5.39-1.61" />
      <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24M1 1l22 22" />
    </svg>
  ),
  Lock: (p) => (
    <svg {...base} {...p}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),
  Shield: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.3-3.6" />
    </svg>
  ),
  CheckBadge: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.4 2.4 4.6-4.9" />
    </svg>
  ),
  Calendar: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  ),
  CalendarCheck: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18m-9 5 1.8 1.8L14 13" />
    </svg>
  ),
  CalendarX: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18m-8.5 4.5 4 4m0-4-4 4" />
    </svg>
  ),
  Clock: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  Timer: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2M9 2h6" />
    </svg>
  ),
  Car: (p) => (
    <svg {...base} {...p}>
      <path d="M5 16v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3.5l1.8-5A2 2 0 0 1 5.7 8h12.6a2 2 0 0 1 1.9 1.5l1.8 5V18a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2" />
      <path d="M2 14h20" />
      <circle cx="7" cy="14" r="0.6" fill="currentColor" />
      <circle cx="17" cy="14" r="0.6" fill="currentColor" />
    </svg>
  ),
  Search: (p) => (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  ),
  ChevronDown: (p) => (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  ArrowRight: (p) => (
    <svg {...base} {...p}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  ),
  ArrowLeft: (p) => (
    <svg {...base} {...p}>
      <path d="M19 12H5m6 6-6-6 6-6" />
    </svg>
  ),
  ArrowUpRight: (p) => (
    <svg {...base} {...p}>
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  ),
  Plus: (p) => (
    <svg {...base} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Minus: (p) => (
    <svg {...base} {...p}>
      <path d="M5 12h14" />
    </svg>
  ),
  Trash: (p) => (
    <svg {...base} {...p}>
      <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-13" />
    </svg>
  ),
  Photos: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="14" height="14" rx="2" />
      <path d="M21 7v12a2 2 0 0 1-2 2H7m-4-5 4-3 3 2 3-3 4 4" />
    </svg>
  ),
  ImagePlus: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="m3 15 4-3 3 2 3-3 2 2M18 8v4m2-2h-4" />
    </svg>
  ),
  Flask: (p) => (
    <svg {...base} {...p}>
      <path d="M9 3h6M10 3v6l-5 8.5A2 2 0 0 0 6.7 21h10.6a2 2 0 0 0 1.7-3.5L14 9V3" />
      <path d="M8.5 15h7" />
    </svg>
  ),
  Info: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5m0-8h.01" />
    </svg>
  ),
  Check: (p) => (
    <svg {...base} {...p}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  ),
  X: (p) => (
    <svg {...base} {...p}>
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  ),
  XCircle: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6m0-6-6 6" />
    </svg>
  ),
  NoPin: (p) => (
    <svg {...base} {...p}>
      <path d="M18.5 13.6C19.5 11.9 20 10.4 20 9a8 8 0 0 0-11.6-7.1M5.2 5.3A8 8 0 0 0 4 9c0 5.5 8 12 8 12s2.1-1.7 4.1-4.2M3 3l18 18" />
    </svg>
  ),
  Bulb: (p) => (
    <svg {...base} {...p}>
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.3 1 2.1h6c0-.8.4-1.5 1-2.1A6 6 0 0 0 12 3Z" />
    </svg>
  ),
}
