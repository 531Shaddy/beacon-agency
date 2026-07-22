import { ArrowUpRight, CheckCircle2, Search, Compass, PenTool, Code2, Rocket, LifeBuoy } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import SectionHeading from '../components/SectionHeading'
import RippleButton from '../components/RippleButton'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import TestimonialCard from '../components/TestimonialCard'
import FAQItem from '../components/FAQItem'
import AnimatedCounter from '../components/AnimatedCounter'
import HeroGraph from '../components/HeroGraph'
import { services } from '../data/services'
import { projects, featuredSlugs } from '../data/projects'
import { testimonials } from '../data/testimonials'
import { faqs } from '../data/faqs'

const industries = [
  'Small Businesses', 'Startups', 'Hotels', 'Restaurants', 'Gyms',
  'Healthcare', 'Schools', 'Real Estate', 'Professional Services',
]

const processSteps = [
  { n: '01', icon: Search, title: 'Discovery', desc: 'We learn your business, your customers, and what growth actually looks like for you.' },
  { n: '02', icon: Compass, title: 'Strategy', desc: 'We map the site structure and content around the decisions your visitors need to make.' },
  { n: '03', icon: PenTool, title: 'Design', desc: 'A custom visual direction built for your brand — never a recycled template.' },
  { n: '04', icon: Code2, title: 'Development', desc: 'Fast, accessible, mobile-first code that performs as well as it looks.' },
  { n: '05', icon: Rocket, title: 'Launch', desc: 'A careful, tested rollout so your new site goes live without a hitch.' },
  { n: '06', icon: LifeBuoy, title: 'Support', desc: 'We stay close after launch to help you keep growing.' },
]

const featuredProjects = featuredSlugs.map((slug) => projects.find((p) => p.slug === slug))

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-ink-900">
        <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 animate-float-slower rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #38BDF8, transparent 70%)' }}
        />

        <div className="container relative grid grid-cols-1 items-center gap-16 pb-24 pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32 lg:pt-48">
          <div>
            <FadeIn>
              <span className="eyebrow text-primary-400">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-400" /> Web design agency for growing businesses
              </span>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-6 text-display-xl font-display font-semibold text-white">
                We build websites <br className="hidden sm:block" />
                that grow businesses.
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-300">
                Northinge designs and builds premium websites for businesses ready to turn more
                visitors into customers — without the generic template look.
              </p>
            </FadeIn>
            <FadeIn delay={0.24} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <RippleButton to="/contact" variant="primary" className="!bg-primary-500 hover:!bg-primary-400">
                Start your project <ArrowUpRight size={16} />
              </RippleButton>
              <RippleButton to="/portfolio" variant="ghost-light">
                View our work
              </RippleButton>
            </FadeIn>

            <FadeIn delay={0.34} className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {['DW', 'PA', 'MO', 'JL'].map((i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink-900 bg-primary-600 font-mono text-[10px] font-semibold text-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-ink-300">
                Trusted by <span className="font-semibold text-white">120+</span> businesses across 9 industries
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="flex justify-center lg:justify-end">
            <HeroGraph />
          </FadeIn>
        </div>

        {/* Industry marquee */}
        <div className="relative border-t border-white/10 py-6">
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee gap-10 pr-10">
              {[...industries, ...industries].map((ind, i) => (
                <span key={i} className="flex items-center gap-2 whitespace-nowrap font-mono text-xs uppercase tracking-wider text-ink-400">
                  <CheckCircle2 size={13} className="text-primary-400" /> {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Everything your business needs to win online"
              description="From a first landing page to a full storefront, every engagement is built around one outcome: more customers."
            />
            <FadeIn delay={0.1}>
              <RippleButton to="/services" variant="secondary" className="hidden sm:inline-flex">
                All services <ArrowUpRight size={15} />
              </RippleButton>
            </FadeIn>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED PROJECTS ---------------- */}
      <section className="section bg-ink-50/60">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Featured work"
              title="Websites doing real work for real businesses"
              description="A sample of recent projects across the industries we know best."
            />
            <FadeIn delay={0.1}>
              <RippleButton to="/portfolio" variant="secondary" className="hidden sm:inline-flex">
                Full portfolio <ArrowUpRight size={15} />
              </RippleButton>
            </FadeIn>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} delay={i * 0.06} />
            ))}
          </div>

          <FadeIn className="mt-10 flex justify-center sm:hidden">
            <RippleButton to="/portfolio" variant="secondary">
              Full portfolio <ArrowUpRight size={15} />
            </RippleButton>
          </FadeIn>
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section className="section bg-white overflow-hidden">
        <div className="container grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-4 text-display-md font-display font-semibold text-ink-900">
              A design studio that thinks like a growth partner
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              Northinge was founded on a simple frustration: too many small businesses were
              being sold beautiful websites that did nothing for their bottom line. We build
              differently — every layout, headline, and button is designed to move a visitor
              closer to becoming a customer.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              Our mission is to give businesses of every size a website that performs like an
              agency-built product, without the agency-sized price tag or timeline.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Strategy-led design, not decoration',
                'Built by a senior team, not junior freelancers',
                'Transparent pricing and realistic timelines',
                'Ongoing support after your site goes live',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
            <RippleButton to="/about" variant="secondary" className="mt-9">
              More about Northinge <ArrowUpRight size={15} />
            </RippleButton>
          </FadeIn>

          <FadeIn delay={0.15} className="relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-primary-500 to-sky-accent p-1">
              <div className="rounded-[22px] bg-white p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-display text-4xl font-semibold text-ink-900">120+</p>
                    <p className="mt-1 text-sm text-ink-500">Websites launched</p>
                  </div>
                  <div>
                    <p className="font-display text-4xl font-semibold text-ink-900">9</p>
                    <p className="mt-1 text-sm text-ink-500">Industries served</p>
                  </div>
                  <div>
                    <p className="font-display text-4xl font-semibold text-ink-900">6</p>
                    <p className="mt-1 text-sm text-ink-500">Years experience</p>
                  </div>
                  <div>
                    <p className="font-display text-4xl font-semibold text-ink-900">96%</p>
                    <p className="mt-1 text-sm text-ink-500">Client retention</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-ink-900 px-5 py-4 text-white shadow-card-lg sm:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="font-mono text-[10px] uppercase tracking-wide text-ink-300">Avg. delivery</p>
              <p className="text-lg font-semibold">3.5 weeks</p>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* ---------------- STATISTICS ---------------- */}
      <section className="section bg-ink-900">
        <div className="container">
          <SectionHeading
            eyebrow="By the numbers"
            title="Results businesses can measure"
            light
            align="center"
          />
          <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-4">
            <AnimatedCounter value={120} suffix="+" label="Websites built" />
            <AnimatedCounter value={98} suffix="%" label="Happy clients" />
            <AnimatedCounter value={6} suffix="+" label="Years experience" />
            <AnimatedCounter value={9} label="Industries served" />
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Our process"
            title="A clear path from first call to launch"
            description="Six steps, no surprises. You'll always know what's happening and what's next."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <FadeIn key={step.n} delay={i * 0.07} className="relative rounded-3xl border border-ink-100 p-8">
                  <span className="font-mono text-xs text-ink-300">{step.n}</span>
                  <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.desc}</p>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="section bg-ink-50/60">
        <div className="container">
          <SectionHeading
            eyebrow="Client stories"
            title="What business owners say after launch"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions, answered" align="center" />
          <div className="mt-12">
            {faqs.slice(0, 6).map((f, i) => (
              <FAQItem key={f.q} faq={f} delay={i * 0.04} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section relative overflow-hidden bg-ink-900">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }}
        />
        <div className="container relative text-center">
          <FadeIn>
            <span className="eyebrow text-primary-400">Let's talk</span>
            <h2 className="mx-auto mt-4 max-w-2xl text-display-md font-display font-semibold text-white">
              Ready for a website that actually grows your business?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-300">
              Book a free 20-minute consultation. No pressure, no jargon — just a clear plan for
              what a better website could do for you.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <RippleButton to="/contact" variant="primary" className="!bg-primary-500 hover:!bg-primary-400">
                Schedule a consultation <ArrowUpRight size={16} />
              </RippleButton>
              <RippleButton to="/portfolio" variant="ghost-light">
                See our work first
              </RippleButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
