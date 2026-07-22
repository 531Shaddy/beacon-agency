import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeIn from '../components/FadeIn'
import SectionHeading from '../components/SectionHeading'
import RippleButton from '../components/RippleButton'
import FAQItem from '../components/FAQItem'
import { services } from '../data/services'
import { faqs } from '../data/faqs'


export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every service built around one outcome: growth"
        description="Whether you need a single landing page or a full storefront, each service below is scoped, priced, and delivered with the same standard of craft."
      />

      <section className="bg-white">
        {services.map((s, i) => {
          const Icon = s.icon
          const reversed = i % 2 === 1
          return (
            <div key={s.slug} className={`border-b border-ink-100 ${i === 0 ? 'pt-20' : ''}`}>
              <div className="container py-16 sm:py-20">
                <div className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <FadeIn>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-semibold text-ink-900">{s.title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-500">{s.description}</p>

                    <ul className="mt-7 space-y-3.5">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-ink-700">
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary-500" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <RippleButton to="/contact" variant="secondary" className="mt-8">
                      Get a quote <ArrowUpRight size={15} />
                    </RippleButton>
                  </FadeIn>

                  <FadeIn delay={0.15}>
                    <div className="card-surface p-9">
                      <p className="eyebrow">Pricing</p>
                      <p className="mt-4 font-display text-4xl font-semibold text-ink-900">{s.priceLabel}</p>
                      <p className="mt-1 text-sm text-ink-400">{s.priceNote}</p>
                      <div className="mt-7 space-y-3 border-t border-ink-100 pt-6">
                        {s.benefits.slice(0, 3).map((b) => (
                          <div key={b} className="flex items-center gap-2.5 text-sm text-ink-600">
                            <CheckCircle2 size={15} className="text-primary-500" />
                            {b}
                          </div>
                        ))}
                      </div>
                      <RippleButton to="/contact" variant="primary" className="mt-8 w-full">
                        Start with {s.title}
                      </RippleButton>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      <section className="section bg-ink-50/60">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Service FAQs" align="center" />
          <div className="mt-12">
            {faqs.map((f, i) => (
              <FAQItem key={f.q} faq={f} delay={i * 0.04} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-900">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-display-md font-display font-semibold text-white">Not sure which service fits?</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-300">
              Tell us about your business and we'll recommend the right starting point — no obligation.
            </p>
            <RippleButton to="/contact" variant="primary" className="mt-8 !bg-primary-500 hover:!bg-primary-400">
              Talk to us <ArrowUpRight size={16} />
            </RippleButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
