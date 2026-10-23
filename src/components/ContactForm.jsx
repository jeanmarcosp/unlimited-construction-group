import { useEffect, useRef, useState } from 'react'
import { Send, ChevronDown } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { formatPhone, isValidPhone } from '../utils/phone'
import { isValidEmail, suggestEmail } from '../utils/email'

// Submissions are sent via Web3Forms (https://web3forms.com), which emails them to
// the address tied to VITE_WEB3FORMS_ACCESS_KEY. See .env.example.
export default function ContactForm() {
  const { t } = useLang()
  const f = t.form
  const [service, setService] = useState('')

  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [phone, setPhone] = useState('')
  const phoneRef = useRef(null)
  const [email, setEmail] = useState('')
  const emailRef = useRef(null)
  const [emailSuggestion, setEmailSuggestion] = useState(null)

  // Phone is optional, but if it's filled in it must be a complete US number.
  // Re-runs on language change so the browser's validation message stays translated.
  useEffect(() => {
    phoneRef.current?.setCustomValidity(phone && !isValidPhone(phone) ? f.phoneInvalid : '')
  }, [phone, f.phoneInvalid])

  // Email is required (the browser handles empty), so only flag malformed addresses.
  useEffect(() => {
    emailRef.current?.setCustomValidity(email && !isValidEmail(email) ? f.emailInvalid : '')
  }, [email, f.emailInvalid])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data.botcheck) return // honeypot filled — likely a bot

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${data.name}`,
          from_name: 'Unlimited Construction Group',
          ...data,
        }),
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.message)
      form.reset()
      setPhone('')
      setEmail('')
      setEmailSuggestion(null)
      setService('')
      setStatus('success')
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full rounded-md border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500'

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-800">
            {f.fullName}
          </label>
          <input id="name" name="name" type="text" required placeholder={f.fullNamePlaceholder} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-800">
            {f.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            ref={phoneRef}
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            placeholder={f.phonePlaceholder}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-800">
          {f.email}
        </label>
        <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            ref={emailRef}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setEmailSuggestion(null)
            }}
            // Checked on blur rather than per keystroke so "gmail.co" isn't flagged mid-typing.
            onBlur={() => setEmailSuggestion(suggestEmail(email))}
            placeholder={f.emailPlaceholder}
            className={fieldClass}
          />
          {emailSuggestion && (
            <p className="mt-1.5 text-xs text-navy-500">
              {f.didYouMean}{' '}
              <button
                type="button"
                onClick={() => {
                  setEmail(emailSuggestion)
                  setEmailSuggestion(null)
                }}
                className="font-semibold text-navy-900 underline underline-offset-2 hover:no-underline"
              >
                {emailSuggestion}
              </button>
              ?
            </p>
          )}
      </div>

      <div className="mt-4">
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy-800">
          {f.service}
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
              {f.selectService}
            </option>
            {f.serviceOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-800">
          {f.projectDetails}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={f.projectPlaceholder}
          className={fieldClass}
        />
      </div>

      {/* Honeypot: hidden from people, bots tend to fill it in. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {status === 'sending' ? f.sending : f.send}
      </button>
      <p role="status" aria-live="polite" className="mt-3 text-sm font-medium">
        {status === 'success' && <span className="text-emerald-600">{f.success}</span>}
        {status === 'error' && <span className="text-red-600">{f.error}</span>}
      </p>
      <p className="mt-3 text-xs text-navy-400">{f.callNote}</p>
    </form>
  )
}
