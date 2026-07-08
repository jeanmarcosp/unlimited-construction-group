import { useState } from 'react'
import { Send, ChevronDown } from 'lucide-react'

// NOTE: This form is a styled UI placeholder for Phase 1 — it does not submit.
// Wiring to an email/backend service is planned for a later phase.
export default function ContactForm() {
  const [service, setService] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Intentionally non-functional in this phase.
  }

  const fieldClass =
    'w-full rounded-md border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500'

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-800">
            Full name
          </label>
          <input id="name" name="name" type="text" placeholder="Jane Doe" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-800">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" placeholder="(305) 000-0000" className={fieldClass} />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-800">
          Email
        </label>
        <input id="email" name="email" type="email" placeholder="you@email.com" className={fieldClass} />
      </div>

      <div className="mt-4">
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy-800">
          Service of interest
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`${fieldClass} appearance-none pr-10 ${
              service ? 'text-navy-900' : 'text-navy-400'
            }`}
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>General Construction</option>
            <option>Building Envelope</option>
            <option>Roofing</option>
            <option>Remodeling &amp; Restoration</option>
            <option>Consulting Engineering</option>
            <option>Other</option>
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-800">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project, timeline, and location…"
          className={fieldClass}
        />
      </div>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        <Send className="h-4 w-4" />
        Send Message
      </button>
      <p className="mt-3 text-xs text-navy-400">
        Prefer to talk now? Call us — we respond quickly to every inquiry.
      </p>
    </form>
  )
}
