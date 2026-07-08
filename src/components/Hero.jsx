import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLang()
  const hero = t.hero
  const years = 2026 - business.established

  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Blueprint texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true" />

      <div className="container relative grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="eyebrow text-accent-400">{hero.eyebrow}</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-200">{hero.subhead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={hero.primaryCta.to} className="btn-primary">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to={hero.secondaryCta.to} className="btn-outline">
              {hero.secondaryCta.label}
            </Link>
          </div>

          <p className="mt-6 text-sm text-navy-300">{hero.licensedNote}</p>
        </div>

        {/* Hero image placeholder */}
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-2xl">
            <div
              className="flex h-full w-full items-center justify-center"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 14px)',
              }}
            >
              <span className="text-xs font-medium uppercase tracking-widest text-navy-400">
                {hero.featuredPhoto}
              </span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-white p-4 shadow-xl sm:block">
            <p className="text-3xl font-extrabold text-navy-900">{years}+</p>
            <p className="text-xs font-medium uppercase tracking-widest text-navy-500">
              {hero.yearsBuilding}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
