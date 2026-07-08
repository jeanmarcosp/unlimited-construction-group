import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function CTASection() {
  const { t } = useLang()
  const cta = t.cta

  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-accent-500 px-8 py-14 text-navy-950 sm:px-14">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #0a1220 0, #0a1220 1px, transparent 1px, transparent 16px)',
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold sm:text-4xl">{cta.heading}</h2>
              <p className="mt-3 text-navy-900/80">{cta.body}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn bg-navy-950 text-white hover:bg-navy-800">
                {cta.requestQuote}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={business.phoneHref}
                className="btn border border-navy-950/30 text-navy-950 hover:bg-navy-950/10"
              >
                <Phone className="h-4 w-4" />
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
