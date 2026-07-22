import { useState } from 'react'
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import FadeIn from '../components/FadeIn'
import RippleButton from '../components/RippleButton'

const budgetOptions = ['Under $2,000', '$2,000 – $5,000', '$5,000 – $10,000', '$10,000+']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({ name: '', email: '', business: '', budget: '', message: '' })

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.'
    if (!form.message.trim()) nextErrors.message = 'Tell us a little about your project.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your website"
        description="Tell us a bit about your business and what you're hoping to achieve. We reply within one business day."
      />

      <section className="section bg-white pt-16">
        <div className="container grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact info */}
          <FadeIn>
            <div className="space-y-5">
              <a href="mailto:hello@northinge.agency" className="flex items-center gap-4 rounded-2xl border border-ink-100 p-5 transition-colors hover:border-primary-200 hover:bg-primary-50/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600"><Mail size={20} /></span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Email</p>
                  <p className="mt-0.5 text-sm font-medium text-ink-900">hello@northinge.agency</p>
                </div>
              </a>
              <a href="tel:+14155550148" className="flex items-center gap-4 rounded-2xl border border-ink-100 p-5 transition-colors hover:border-primary-200 hover:bg-primary-50/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600"><Phone size={20} /></span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Phone</p>
                  <p className="mt-0.5 text-sm font-medium text-ink-900">(415) 555-0148</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-ink-100 p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600"><MapPin size={20} /></span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Studio</p>
                  <p className="mt-0.5 text-sm font-medium text-ink-900">548 Market Street, San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-100 text-ink-500 transition-colors hover:border-primary-300 hover:text-primary-600"
                  aria-label="Social link"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative mt-8 h-64 overflow-hidden rounded-3xl border border-ink-100">
              <svg viewBox="0 0 500 300" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="500" height="300" fill="#EFF5FF" />
                <g stroke="#C7D0E0" strokeWidth="1">
                  <path d="M0 60 H500 M0 130 H500 M0 200 H500 M0 260 H500" />
                  <path d="M80 0 V300 M180 0 V300 M300 0 V300 M400 0 V300" />
                </g>
                <path d="M0 150 Q120 90 250 150 T500 140" stroke="#8DB6FB" strokeWidth="6" fill="none" opacity="0.6" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+8px)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white shadow-card-lg">
                  <MapPin size={18} />
                </span>
              </div>
              <div className="absolute bottom-4 left-4 rounded-full bg-white px-3.5 py-2 text-xs font-medium text-ink-600 shadow-card">
                548 Market Street, San Francisco
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1} className="card-surface p-8 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <CheckCircle2 size={32} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">Message sent</h3>
                <p className="mt-2 max-w-sm text-sm text-ink-500">
                  Thanks, {form.name.split(' ')[0] || 'there'}. We'll reply within one business day with next steps.
                </p>
                <RippleButton variant="secondary" className="mt-8" onClick={() => setSubmitted(false)}>
                  Send another message
                </RippleButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-ink-700">Full name</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange('name')}
                      className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-primary-500 ${errors.name ? 'border-red-300' : 'border-ink-200'}`}
                      placeholder="Jamie Rivera"
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-ink-700">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-primary-500 ${errors.email ? 'border-red-300' : 'border-ink-200'}`}
                      placeholder="jamie@business.com"
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="text-sm font-medium text-ink-700">Business name</label>
                  <input
                    id="business"
                    type="text"
                    value={form.business}
                    onChange={handleChange('business')}
                    className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-primary-500"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <span className="text-sm font-medium text-ink-700">Estimated budget</span>
                  <div className="mt-2 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setForm((f) => ({ ...f, budget: b }))}
                        className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition-colors ${
                          form.budget === b
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-ink-200 text-ink-500 hover:border-ink-300'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-ink-700">Tell us about your project</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    className={`mt-2 w-full resize-none rounded-xl border px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-primary-500 ${errors.message ? 'border-red-300' : 'border-ink-200'}`}
                    placeholder="What's not working with your current site, or what are you hoping to launch?"
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                </div>

                <RippleButton type="submit" variant="primary" className="w-full">
                  Send message <ArrowUpRight size={16} />
                </RippleButton>
                <p className="text-center text-xs text-ink-400">We typically respond within one business day.</p>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </>
  )
}
