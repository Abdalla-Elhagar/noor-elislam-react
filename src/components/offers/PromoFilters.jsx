import { offerFilters } from '../../data/offers'
import { cn } from '../../utils/cn'
import IconBox from '../ui/IconBox'
import SectionHeading from '../ui/SectionHeading'

export default function PromoFilters({ active, onChange }) {
  return (
    <section className="pb-3 pt-[22px] md:pt-[27px]">
      <div className="container-x">
        <SectionHeading title="تسوق حسب العرض" description="اختر مجموعة لعرض المنتجات المناسبة لك" />
        <div role="group" aria-label="تصفية العروض" className="grid gap-2.5 md:grid-cols-3 md:gap-[18px]">
          {offerFilters.map((f) => {
            const isActive = active === f.id
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => onChange(f.id)}
                className={cn(
                  'relative flex min-h-[82px] items-center gap-3.5 overflow-hidden rounded-[18px] border px-5 py-[18px] text-start transition duration-200 hover:-translate-y-0.5 hover:border-gold hover:bg-gold-light hover:shadow-[0_8px_22px_rgba(143,107,24,.08)] md:min-h-[112px]',
                  isActive ? 'border-gold bg-gold-light shadow-[0_8px_22px_rgba(143,107,24,.08)]' : 'border-line bg-white',
                )}
              >
                <IconBox icon={f.icon} className="size-12 rounded-[15px] text-xl" />
                <span>
                  <strong className="mb-0.5 block text-sm font-extrabold">{f.title}</strong>
                  <span className="text-[11px] text-muted">{f.hint}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
