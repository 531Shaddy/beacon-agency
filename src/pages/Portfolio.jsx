import { useMemo, useState } from 'react'
import { ArrowUpRight, Target, Lightbulb, TrendingUp } from 'lucide-react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import PageHero from '../components/PageHero'
import FadeIn from '../components/FadeIn'
import RippleButton from '../components/RippleButton'
import ProjectVisual from '../components/ProjectVisual'
import { projects, categories } from '../data/projects'

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.industry === active)),
    [active]
  )

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work built to move a metric, not just win an award"
        description="Every project below started with a business goal — more bookings, more calls, more sales — and was designed to hit it."
      />

      <section className="section bg-white pt-16">
        <div className="container">
          <LayoutGroup>
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    active === cat ? 'text-white' : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  {active === cat && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-ink-900"
                      transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                    />
                  )}
                  <span className="relative">{cat}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>

          <motion.div layout className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.article
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group overflow-hidden rounded-3xl border border-ink-100 shadow-card transition-shadow duration-500 hover:shadow-card-lg"
                >
                  {/* <div className="overflow-hidden">
                    <ProjectVisual
                      industry={p.industry}
                      palette={p.palette}
                      className="h-64 w-full transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div> */}

                  <div className="overflow-hidden">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <ProjectVisual
                        industry={p.industry}
                        palette={p.palette}
                        className="h-64 w-full transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>


                  <div className="p-7 sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="eyebrow">{p.industry}</span>
                      <span className="font-mono text-xs text-ink-400">{p.year}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-ink-900">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.description}</p>

                    <dl className="mt-6 space-y-4 border-t border-ink-100 pt-6">
                      <div className="flex gap-3">
                        <Target size={17} className="mt-0.5 shrink-0 text-primary-500" />
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">Challenge</dt>
                          <dd className="mt-1 text-sm leading-relaxed text-ink-600">{p.challenge}</dd>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Lightbulb size={17} className="mt-0.5 shrink-0 text-primary-500" />
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">Solution</dt>
                          <dd className="mt-1 text-sm leading-relaxed text-ink-600">{p.solution}</dd>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <TrendingUp size={17} className="mt-0.5 shrink-0 text-primary-500" />
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">Results</dt>
                          <dd className="mt-1 text-sm font-medium leading-relaxed text-primary-700">{p.results}</dd>
                        </div>
                      </div>
                    </dl>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span key={t} className="rounded-full bg-ink-50 px-2.5 py-1 font-mono text-[11px] text-ink-500">
                            {t}
                          </span>
                        ))}
                      </div>
                      {/* <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
                      >
                        Visit project <ArrowUpRight size={15} />
                      </a> */}

                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
                      >
                        Visit project <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section bg-ink-50/60">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-display-md font-display font-semibold text-ink-900">
              Your business could be the next case study
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-500">
              Tell us where your website is falling short, and we'll show you exactly how we'd fix it.
            </p>
            <RippleButton to="/contact" variant="primary" className="mt-8">
              Start a project <ArrowUpRight size={16} />
            </RippleButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
