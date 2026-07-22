import { Link } from 'react-router-dom'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa6'
import Logo from './Logo'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const servicesList = [
  'Business Websites',
  'Landing Pages',
  'E-commerce Websites',
  'Website Redesign',
  'Website Maintenance',
  'SEO Optimization',
]

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/northinge_studio/",
    label: "Instagram",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@northinge.studio?is_from_webapp=1&sender_device=pc",
    label: "TikTok",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/2349038091921",
    label: "WhatsApp",
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              We design and build websites for small businesses, hotels, restaurants, gyms,
              healthcare providers, schools, and real estate companies that are ready to grow.
            </p>
            {/* <div className="mt-6 flex gap-3">
              {[Instagram, FaTiktok, FaWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-ink-200 transition-colors hover:border-primary-400 hover:text-primary-400"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div> */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-ink-200 transition-colors hover:border-primary-400 hover:text-primary-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-ink-300 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {servicesList.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-ink-300 transition-colors hover:text-white">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-300">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-primary-400" />
                <span>northinge.studio@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary-400" />
                <span>(+234) 902-68-29525</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary-400" />
                <span>Based in Lagos, Nigeria <br /> Working with businesses worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-ink-400">© {new Date().getFullYear()} Northinge. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-ink-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
