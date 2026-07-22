import { ArrowUpRight, Compass, Eye, Heart, Shield, Sparkles, Users } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeIn from '../components/FadeIn'
import SectionHeading from '../components/SectionHeading'
import RippleButton from '../components/RippleButton'
import Avatar from '../components/Avatar'

const team = [
  { name: 'Alicia Chen', role: 'Founder & Creative Director', initials: 'AC', palette: 'blue' },
  { name: 'Marcus Bell', role: 'Head of Strategy', initials: 'MB', palette: 'navy' },
  { name: 'Priya Natarajan', role: 'Lead Product Designer', initials: 'PN', palette: 'teal' },
  { name: 'Diego Ramos', role: 'Lead Engineer', initials: 'DR', palette: 'amber' },
  { name: 'Hana Kobayashi', role: 'Brand & Content Lead', initials: 'HK', palette: 'orange' },
  { name: 'Sam O\u2019Neill', role: 'Client Success Lead', initials: 'SO', palette: 'blue' },
]

const values = [
  { icon: Shield, title: 'Trust first', desc: 'Every recommendation is made in your business\u2019s interest, not ours.' },
  { icon: Sparkles, title: 'Craft over templates', desc: 'We design for your business specifically. No recycled themes.' },
  { icon: Eye, title: 'Radical clarity', desc: 'You always know the timeline, the cost, and what happens next.' },
  { icon: Heart, title: 'Outcomes, not vanity metrics', desc: 'We measure success in leads, bookings, and revenue.' },
]

const timeline = [
  { year: '2019', title: 'Northinge founded', desc: 'Started as a two-person studio building sites for local restaurants and gyms.' },
  { year: '2021', title: 'First 50 launches', desc: 'Expanded into hospitality and healthcare as word of mouth grew.' },
  { year: '2023', title: 'Team of ten', desc: 'Built out dedicated strategy, design, and engineering functions.' },
  { year: '2025', title: '120+ businesses served', desc: 'Now working across nine industries with a 96% client retention rate.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Northinge"
        title="We started this agency because good design was being wasted on bad strategy"
        description="Northinge exists to give growing businesses a website that works as hard as they do."
      />

      {/* Story */}
      <section className="section bg-white">
        <div className="container grid grid-cols-1 gap-16 lg:grid-cols-2">
          <FadeIn>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 text-display-md font-display font-semibold text-ink-900">
              From a two-person studio to a growth partner for 120+ businesses
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              Northinge began in 2019 when our founder, a designer, kept meeting business owners
              who\u2019d paid thousands for a website that looked nice and did nothing. We set out to
              build differently: strategy before pixels, and a website that\u2019s judged by leads
              generated, not just likes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              Today we\u2019re a small, senior team working with small businesses, hotels, restaurants,
              gyms, healthcare providers, schools, and real estate companies who are ready to take
              their online presence seriously.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="grid grid-cols-2 gap-5">
            <div className="card-surface p-7">
              <Compass size={22} className="text-primary-600" />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Give every client a website that measurably grows their business.
              </p>
            </div>
            <div className="card-surface p-7">
              <Eye size={22} className="text-primary-600" />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                A world where small businesses compete online on equal footing with anyone.
              </p>
            </div>
            <div className="card-surface col-span-2 p-7">
              <Users size={22} className="text-primary-600" />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">Why clients choose us</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                A senior team, transparent process, and a track record across nine industries —
                without the overhead of a traditional big agency.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core values */}
      <section className="section bg-ink-50/60">
        <div className="container">
          <SectionHeading eyebrow="Core values" title="What guides how we work" align="center" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <FadeIn key={v.title} delay={i * 0.07} className="rounded-3xl border border-ink-100 bg-white p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-ink-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{v.desc}</p>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Our timeline" title="Six years of building for growth" align="center" />
          <div className="mt-16 space-y-10">
            {timeline.map((t, i) => (
              <FadeIn key={t.year} delay={i * 0.08} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink-900 font-mono text-xs font-semibold text-white">
                    {t.year}
                  </span>
                  {i < timeline.length - 1 && <span className="mt-2 w-px flex-1 bg-ink-100" />}
                </div>
                <div className="pb-4">
                  <h3 className="font-display text-lg font-semibold text-ink-900">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-ink-50/60">
        <div className="container">
          <SectionHeading eyebrow="The team" title="A small senior team, not a rotating cast of freelancers" align="center" />
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.05} className="flex flex-col items-center text-center">
                <Avatar initials={m.initials} palette={m.palette} size={72} />
                <p className="mt-4 text-sm font-semibold text-ink-900">{m.name}</p>
                <p className="mt-0.5 text-xs text-ink-400">{m.role}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-900">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-display-md font-display font-semibold text-white">Want to work with us?</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-300">
              We take on a limited number of projects each month to keep quality high.
            </p>
            <RippleButton to="/contact" variant="primary" className="mt-8 !bg-primary-500 hover:!bg-primary-400">
              Get in touch <ArrowUpRight size={16} />
            </RippleButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
