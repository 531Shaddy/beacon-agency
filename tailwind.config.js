/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          50: '#EFF5FF',
          100: '#DCE9FE',
          200: '#B9D3FD',
          300: '#8DB6FB',
          400: '#5C90F5',
          500: '#2563EB',
          600: '#1D4FD1',
          700: '#1A3FAA',
          800: '#173588',
          900: '#152E6B',
        },
        ink: {
          DEFAULT: '#0F172A',
          50: '#F5F7FA',
          100: '#E7EBF2',
          200: '#C7D0E0',
          300: '#9AA9C4',
          400: '#64749A',
          500: '#3E4C6E',
          600: '#2A3552',
          700: '#1C2540',
          800: '#141B30',
          900: '#0F172A',
          950: '#080D18',
        },
        sky: {
          accent: '#38BDF8',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 5vw + 1rem, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 4vw + 1rem, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.875rem, 2.5vw + 1rem, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'grid-faint': 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'card': '0 1px 2px rgba(15,23,42,0.04), 0 12px 32px -12px rgba(15,23,42,0.12)',
        'card-lg': '0 4px 12px rgba(15,23,42,0.06), 0 24px 48px -16px rgba(15,23,42,0.18)',
        'glow': '0 0 0 1px rgba(37,99,235,0.15), 0 8px 30px rgba(37,99,235,0.15)',
      },
      keyframes: {
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(0.85)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'draw-line': 'draw-line 2s ease-out forwards',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-slower': 'float-slower 9s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
