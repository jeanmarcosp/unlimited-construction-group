import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  const year = 2026

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/images/logo.png"
            alt={`${business.name} logo`}
            className="h-16 w-auto rounded-md bg-white/95 p-2"
          />
          <p className="mt-4 max-w-xs text-sm text-navy-300">{t.tagline}</p>
          <p className="mt-3 text-xs text-navy-400">
            License {business.license} · Est. {business.established}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
            {t.footer.explore}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {t.nav.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-navy-300 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
            {t.footer.services}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {t.coreServices.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-navy-300 transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
            {t.footer.contact}
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
              <span className="text-navy-300">
                {business.address.line1}
                <br />
                {business.address.city}, {business.address.state} {business.address.zip}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent-500" />
              <a href={business.phoneHref} className="text-navy-300 hover:text-white">
                {business.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent-500" />
              <a href={business.emailHref} className="text-navy-300 hover:text-white">
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-navy-400 sm:flex-row">
          <p>
            © {year} {business.name}. {t.footer.rightsReserved}
          </p>
          <p>
            {t.footer.licensedGC} · {business.license} · {t.serviceArea}
          </p>
        </div>
      </div>
    </footer>
  )
}
