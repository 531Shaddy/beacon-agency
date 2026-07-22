import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', label, duration = 1.6 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = null
    let raf
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * value))
      if (progress < 1) raf = requestAnimationFrame(step)
      else setDisplay(value)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center sm:text-left"
    >
      <div className="font-display text-4xl font-semibold text-white sm:text-5xl">
        {display}
        <span className="text-primary-400">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-ink-300">{label}</p>
    </motion.div>
  )
}
