import { motion } from 'framer-motion'

// Lightweight scroll-triggered reveal. Kept intentionally subtle
// (12px rise, short duration) so it reads as polish, not spectacle.
export default function FadeIn({
  children,
  delay = 0,
  y = 16,
  duration = 0.6,
  className = '',
  as = 'div',
  once = true,
}) {
  const Component = motion[as] || motion.div
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  )
}
