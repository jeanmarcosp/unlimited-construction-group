import { useLang } from '../i18n/LanguageContext'

export default function ProcessSteps() {
  const { t } = useLang()
  const process = t.process

  return (
    <section className="section bg-navy-950 text-white">
      <div className="container">
        <div className="max-w-2xl">
          <span className="eyebrow text-accent-400">{process.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{process.heading}</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {process.steps.map((step) => (
            <div key={step.number} className="relative rounded-xl border border-white/10 bg-navy-900/60 p-8">
              <span className="text-5xl font-extrabold text-accent-500/30">{step.number}</span>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-200">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
