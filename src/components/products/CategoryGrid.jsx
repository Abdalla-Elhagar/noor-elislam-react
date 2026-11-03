import { categories } from '../../data/products'
import { cn } from '../../utils/cn'
import IconBox from '../ui/IconBox'
import SectionHeading from '../ui/SectionHeading'

const allCategories = [
  { id: 'all', icon: 'all', label: 'كل المنتجات', hint: 'جميع الأقسام' },
  ...categories,
]

export default function CategoryGrid({ selected, onSelect }) {
  return (
    <section id="categories" className="py-[38px] md:py-[55px]">
      <div className="container-x">
        <SectionHeading
          icon="layers"
          title="تسوق حسب القسم"
          description="اختار القسم المناسب وشوف كل المنتجات الموجودة فيه"
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {allCategories.map((cat) => {
            const active = selected === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={active}
                onClick={() => onSelect(cat.id)}
                className={cn(
                  'group block h-full rounded-[18px] border px-2 py-[18px] text-center transition duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold-light md:py-[22px]',
                  active ? 'border-gold bg-gold-light' : 'border-line bg-white',
                )}
              >
                <IconBox
                  icon={cat.icon}
                  className="mx-auto mb-3.5 size-[65px] rounded-[20px] text-[25px] group-hover:from-gold-bright group-hover:to-[#b88a20] group-hover:text-white"
                />
                <h3 className="mb-1.5 text-sm font-extrabold">{cat.label}</h3>
                <p className="text-xs text-muted">{cat.hint}</p>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
