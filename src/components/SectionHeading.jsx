import FadeIn from './FadeIn'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left', // 'left' | 'center'
  light = false,
  className = '',
}) {
  return (
    <FadeIn
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`mt-4 text-display-md font-display font-semibold ${light ? 'text-white' : 'text-ink-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-ink-300' : 'text-ink-500'}`}>
          {description}
        </p>
      )}
    </FadeIn>
  )
}
