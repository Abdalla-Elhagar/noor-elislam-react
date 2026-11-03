import { cn } from '../../utils/cn'

export default function SectionLabel({ children, className }) {
  return (
    <div
      className={cn(
        "mb-4 inline-flex items-center gap-2.5 text-sm font-extrabold text-gold-dark before:h-0.5 before:w-8 before:bg-gold before:content-['']",
        className,
      )}
    >
      {children}
    </div>
  )
}
