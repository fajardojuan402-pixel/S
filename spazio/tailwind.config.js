/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta extraída del diseño de Figma de SPAZIO
        teal: {
          DEFAULT: '#14576a',
          50: '#eef4f6',
          100: '#d6e6ea',
          500: '#14576a',
          600: '#124c5c',
          700: '#0f3f4c',
        },
        navy: '#15283a',
        ink: '#1f2d3d',
        muted: '#64748b',
        canvas: '#f3f6f7',
        line: '#e3e8ec',
        success: {
          DEFAULT: '#2f8f5b',
          bg: '#e8f3ec',
        },
        warn: {
          DEFAULT: '#b7791f',
          bg: '#fdf0dd',
        },
        danger: {
          DEFAULT: '#c0392b',
          bg: '#fbe9e7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.9rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,0.04), 0 1px 3px rgba(16,24,40,0.06)',
        pop: '0 10px 30px rgba(16,24,40,0.12)',
      },
    },
  },
  plugins: [],
}
