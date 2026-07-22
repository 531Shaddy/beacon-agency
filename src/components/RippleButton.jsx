import { useRef } from 'react'
import { Link } from 'react-router-dom'

/**
 * Button (or Link, if `to` is provided) with a tasteful ripple on click
 * and a variant system that maps to the site's button styles.
 */
export default function RippleButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost-light'
  className = '',
  type = 'button',
  ...rest
}) {
  const ref = useRef(null)

  const handleClick = (e) => {
    const el = ref.current
    if (el) {
      const rect = el.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const span = document.createElement('span')
      span.className = 'ripple-el'
      span.style.width = span.style.height = `${size}px`
      span.style.left = `${e.clientX - rect.left - size / 2}px`
      span.style.top = `${e.clientY - rect.top - size / 2}px`
      el.appendChild(span)
      setTimeout(() => span.remove(), 650)
    }
    onClick?.(e)
  }

  const variantClass =
    variant === 'secondary' ? 'btn-secondary' : variant === 'ghost-light' ? 'btn-ghost-light' : 'btn-primary'

  const classes = `ripple ${variantClass} ${className}`

  if (to) {
    return (
      <Link to={to} ref={ref} onClick={handleClick} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} ref={ref} onClick={handleClick} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button ref={ref} type={type} onClick={handleClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
