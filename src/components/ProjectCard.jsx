import { MapPin } from 'lucide-react'
import Placeholder from './Placeholder'

export default function ProjectCard({ project }) {
  const { title, category, location, year, description } = project
  return (
    <div className="group overflow-hidden rounded-xl border border-navy-100 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        {/* SCAFFOLD: replace <Placeholder> with a real <img> once photos are available. */}
        <Placeholder label={`${title} photo`} aspect="aspect-[4/3]" className="rounded-none border-0" />
        <span className="absolute left-3 top-3 rounded-full bg-navy-950/90 px-3 py-1 text-xs font-semibold text-accent-400">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy-900">{title}</h3>
        <div className="mt-1 flex items-center gap-1.5 text-sm text-navy-500">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>
            {location} · {year}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-navy-600">{description}</p>
      </div>
    </div>
  )
}
