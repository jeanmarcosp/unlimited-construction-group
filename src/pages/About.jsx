import { Target } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Placeholder from '../components/Placeholder'
import CTASection from '../components/CTASection'
import { business } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLang()
  const about = t.about
  const years = 2026 - business.established

  return (
    <>
      <PageHeader eyebrow={about.eyebrow} title={about.heading} subtitle={about.lead} />

      <section className="section">
        <div className="container grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            {about.body.map((para, i) => (
              <p key={i} className="text-navy-600">
                {para}
              </p>
            ))}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 p-8 text-white shadow-lg">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
                aria-hidden="true"
              />
              <div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500 text-navy-950">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                    {about.missionLabel}
                  </p>
                  <p className="mt-2 text-2xl font-extrabold leading-snug">{about.mission}</p>
                </div>
              </div>
            </div>
          </div>
          <Placeholder label={about.companyPhoto} aspect="aspect-[4/5]" />
        </div>
      </section>

      {/* Values */}
      <section className="section relative overflow-hidden bg-navy-950 text-white">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container relative">
          <div className="max-w-2xl">
            <span className="eyebrow text-accent-400">{about.valuesEyebrow}</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{about.valuesHeading}</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-white/10 bg-navy-900/60 p-6"
              >
                <h3 className="text-lg font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="border-y border-navy-100 bg-white">
        <div className="container grid grid-cols-1 gap-8 py-12 text-center sm:grid-cols-3">
          <div>
            <p className="text-4xl font-extrabold text-navy-900">{years}+</p>
            <p className="mt-1 text-sm font-medium uppercase tracking-widest text-navy-500">
              {about.credentials.years}
            </p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-navy-900">{business.license}</p>
            <p className="mt-1 text-sm font-medium uppercase tracking-widest text-navy-500">
              {about.credentials.license}
            </p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-navy-900">{about.credentials.areaValue}</p>
            <p className="mt-1 text-sm font-medium uppercase tracking-widest text-navy-500">
              {about.credentials.area}
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
