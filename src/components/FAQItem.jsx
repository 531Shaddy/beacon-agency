import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

export default function FAQItem({ faq, delay = 0 }) {
  const [open, setOpen] = useState(false)

  return (
    <FadeIn delay={delay} className="border-b border-ink-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-medium text-ink-900 sm:text-lg">{faq.q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-50 text-ink-700 transition-transform duration-300 ${
            open ? 'rotate-45 bg-primary-50 text-primary-600' : ''
          }`}
        >
          <Plus size={16} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm leading-relaxed text-ink-500">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeIn>
  )
}
