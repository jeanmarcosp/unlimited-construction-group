import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import ServicesGrid from '../components/ServicesGrid'
import ProcessSteps from '../components/ProcessSteps'
import CTASection from '../components/CTASection'
import Placeholder from '../components/Placeholder'
import { about } from '../data/content'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />

      {/* About teaser */}
      <section className="section bg-navy-50">
        <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Placeholder label="Team / job site photo" aspect="aspect-[4/3]" />
          <div>
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">
              {about.heading}
            </h2>
            <p className="mt-4 text-navy-600">{about.lead}</p>
            <ul className="mt-6 space-y-3">
              {about.values.slice(0, 3).map((v) => (
                <li key={v.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                  <span className="text-sm text-navy-700">
                    <span className="font-semibold text-navy-900">{v.title}.</span> {v.description}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-accent-600"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTASection />
    </>
  )
}
