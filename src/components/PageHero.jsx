import FadeIn from './FadeIn'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-ink-900 pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full opacity-30 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }}
      />
      <div className="container relative">
        <FadeIn className="max-w-2xl">
          {eyebrow && <span className="eyebrow text-primary-400">{eyebrow}</span>}
          <h1 className="mt-4 text-display-lg font-display font-semibold text-white">{title}</h1>
          {description && <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300">{description}</p>}
        </FadeIn>
      </div>
    </section>
  )
}
