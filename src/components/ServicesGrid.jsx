import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ServiceCard from './ServiceCard'
import { coreServices } from '../data/content'

export default function ServicesGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl">
          <span className="eyebrow">What We Do</span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Full-service construction, one trusted partner
          </h2>
          <p className="mt-4 text-navy-600">
            From the ground up or down to the details, we manage every phase of the build for
            luxury homes, commercial projects, and renovations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-accent-600"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
