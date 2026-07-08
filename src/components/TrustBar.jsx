import { useLang } from '../i18n/LanguageContext'

export default function TrustBar() {
  const { t } = useLang()

  return (
    <div className="border-y border-navy-100 bg-navy-50">
      <div className="container grid grid-cols-2 gap-6 py-6 lg:grid-cols-4">
        {t.trustPoints.map(({ label, icon: Icon }) => (
          <div key={label} className="flex items-center justify-center gap-3 text-center">
            <Icon className="h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
            <span className="text-sm font-semibold text-navy-800">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
