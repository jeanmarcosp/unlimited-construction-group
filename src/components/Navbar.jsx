import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useLang()

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${
      isActive ? 'text-accent-600' : 'text-navy-700 hover:text-navy-950'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur">
      <nav className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt={`${business.name} logo`} className="h-12 w-auto" />
          <span className="hidden text-lg font-display font-extrabold leading-tight text-navy-900 sm:block">
            Unlimited
            <span className="block text-xs font-semibold uppercase tracking-widest text-navy-400">
              Construction Group
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {t.nav.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <LanguageToggle />
          <a href={business.phoneHref} className="btn-primary">
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-1 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-navy-800"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-navy-100 bg-white md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {t.nav.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-base font-semibold ${
                    isActive ? 'bg-navy-50 text-accent-600' : 'text-navy-800 hover:bg-navy-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a href={business.phoneHref} className="btn-primary mt-2">
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
