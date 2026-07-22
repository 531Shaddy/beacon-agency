import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'

export default function ServiceCard({ service, delay = 0 }) {
  const Icon = service.icon
  return (
    <FadeIn delay={delay} className="group card-surface p-8 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-card-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold text-ink-900">{service.title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{service.short}</p>
      <Link
        to="/services"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors group-hover:text-primary-600"
      >
        Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </FadeIn>
  )
}
