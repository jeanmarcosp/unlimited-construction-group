import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { useLang } from '../i18n/LanguageContext'

export default function Services() {
  const { t } = useLang()
  const page = t.servicesPage
  const coreSlugs = new Set(t.coreServices.map((s) => s.slug))
  const additional = t.allServices.filter((s) => !coreSlugs.has(s.slug))

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} />

      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-extrabold text-navy-900">{page.coreTitle}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.coreServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <h2 className="mt-16 text-2xl font-extrabold text-navy-900">{page.additionalTitle}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additional.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
