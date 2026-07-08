import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { allServices, coreServices } from '../data/content'

export default function Services() {
  const coreSlugs = new Set(coreServices.map((s) => s.slug))
  const additional = allServices.filter((s) => !coreSlugs.has(s.slug))

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Every phase of construction, handled by one team"
        subtitle="From luxury homes to commercial builds, we bring the expertise, licensing, and reliability your project deserves across South Florida."
      />

      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-extrabold text-navy-900">Core Services</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <h2 className="mt-16 text-2xl font-extrabold text-navy-900">Additional Capabilities</h2>
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
