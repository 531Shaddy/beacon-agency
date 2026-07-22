import { motion } from 'framer-motion'

// The site's signature visual: a growth line that draws itself on load,
// making the core promise ("websites that grow businesses") literal
// rather than illustrating it with a generic hero graphic.
export default function HeroGraph() {
  return (
    <div className="relative w-full max-w-md">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md shadow-card-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-300">Monthly conversions</p>
            <p className="mt-1 font-display text-2xl font-semibold text-white">
              +186%
              <span className="ml-2 text-sm font-medium text-emerald-400">↑ vs last site</span>
            </p>
          </div>
          <span className="flex h-2.5 w-2.5 animate-pulse-dot rounded-full bg-emerald-400" />
        </div>

        <svg viewBox="0 0 320 120" className="mt-5 w-full overflow-visible" fill="none">
          <defs>
            <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="hero-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M0 95 L40 88 L80 92 L120 65 L160 70 L200 40 L240 48 L280 15 L320 20 L320 120 L0 120 Z"
            fill="url(#hero-fill)"
          />
          <motion.path
            d="M0 95 L40 88 L80 92 L120 65 L160 70 L200 40 L240 48 L280 15 L320 20"
            stroke="url(#hero-line)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut', delay: 0.4 }}
          />
          <motion.circle
            cx="320"
            cy="20"
            r="5"
            fill="#38BDF8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.1, duration: 0.3 }}
          />
        </svg>

        <div className="mt-4 flex justify-between font-mono text-[10px] text-ink-400">
          <span>Jan</span>
          <span>Mar</span>
          <span>May</span>
          <span>Jul</span>
          <span>Sep</span>
        </div>
      </div>

      {/* Floating micro-cards */}
      <motion.div
        className="absolute -left-10 -top-8 hidden rounded-2xl border border-white/10 bg-ink-800/90 px-4 py-3 shadow-card-lg backdrop-blur-md sm:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="font-mono text-[10px] uppercase tracking-wide text-ink-300">New booking</p>
        <p className="mt-0.5 text-sm font-semibold text-white">The Marlow Hotel</p>
      </motion.div>

      <motion.div
        className="absolute -bottom-8 -right-6 hidden rounded-2xl border border-white/10 bg-ink-800/90 px-4 py-3 shadow-card-lg backdrop-blur-md sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">✓</span>
          <div>
            <p className="text-xs font-semibold text-white">Site launched</p>
            <p className="font-mono text-[10px] text-ink-400">Kindred Market</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
