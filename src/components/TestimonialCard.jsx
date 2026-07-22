import { Quote } from 'lucide-react'
import Avatar from './Avatar'
import FadeIn from './FadeIn'

export default function TestimonialCard({ testimonial, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="flex h-full flex-col card-surface p-8 hover:shadow-card-lg">
      <Quote size={28} className="text-primary-200" fill="currentColor" strokeWidth={0} />
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-600">{testimonial.quote}</p>
      <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-6">
        <Avatar initials={testimonial.initials} palette={testimonial.palette} size={44} />
        <div>
          <p className="text-sm font-semibold text-ink-900">{testimonial.name}</p>
          <p className="text-xs text-ink-400">{testimonial.role}</p>
        </div>
      </div>
    </FadeIn>
  )
}
