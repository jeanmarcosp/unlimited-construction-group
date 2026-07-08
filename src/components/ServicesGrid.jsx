import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ServiceCard from './ServiceCard'
import { useLang } from '../i18n/LanguageContext'

export default function ServicesGrid() {
  const { t } = useLang()
  const section = t.servicesSection

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl">
          <span className="eyebrow">{section.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">
            {section.heading}
          </h2>
          <p className="mt-4 text-navy-600">{section.body}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.coreServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-accent-600"
          >
            {section.viewAll}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
