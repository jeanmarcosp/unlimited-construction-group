import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import CTASection from '../components/CTASection'
import { portfolio } from '../data/content'

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const projects =
    active === 'All'
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.category === active)

  return (
    <>
      <PageHeader
        eyebrow={portfolio.eyebrow}
        title={portfolio.heading}
        subtitle={portfolio.subtitle}
      />

      <section className="section">
        <div className="container">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {portfolio.categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === cat
                    ? 'bg-navy-900 text-white'
                    : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {projects.length === 0 && (
            <p className="mt-10 text-center text-navy-500">
              No projects in this category yet — check back soon.
            </p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
