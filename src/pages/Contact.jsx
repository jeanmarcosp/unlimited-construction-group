import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import { business } from '../data/content'

export default function Contact() {
  const details = [
    {
      icon: Phone,
      label: 'Phone',
      value: business.phone,
      href: business.phoneHref,
    },
    {
      icon: Mail,
      label: 'Email',
      value: business.email,
      href: business.emailHref,
    },
    {
      icon: MapPin,
      label: 'Office',
      value: `${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
      href: business.mapUrl,
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon–Fri, 8:00 AM – 5:00 PM', // placeholder — confirm actual hours
    },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's build something great together"
        subtitle="Reach out for a quote or to discuss your project. We respond quickly and are happy to answer any questions."
      />

      <section className="section">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Details */}
          <div>
            <div className="space-y-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-accent-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-navy-400">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-lg font-semibold text-navy-900 hover:text-accent-600"
                        {...(href.startsWith('http')
                          ? { target: '_blank', rel: 'noreferrer' }
                          : {})}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-navy-900">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 overflow-hidden rounded-xl border border-navy-100">
              <iframe
                src={business.mapEmbedUrl}
                title={`Map to ${business.name}`}
                className="aspect-[16/10] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
