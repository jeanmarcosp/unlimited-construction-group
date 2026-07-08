import { ImageIcon } from 'lucide-react'

// A clearly-marked image placeholder with a correct aspect ratio.
// Swap these out for real project photography in a later phase.
export default function Placeholder({ label = 'Project photo', className = '', aspect = 'aspect-[4/3]' }) {
  return (
    <div
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-xl border border-navy-100 bg-gradient-to-br from-navy-100 via-navy-50 to-white ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #35527e 0, #35527e 1px, transparent 1px, transparent 12px)',
        }}
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-2 text-navy-400">
        <ImageIcon className="h-8 w-8" aria-hidden="true" />
        <span className="text-xs font-medium uppercase tracking-widest">{label}</span>
      </div>
    </div>
  )
}
