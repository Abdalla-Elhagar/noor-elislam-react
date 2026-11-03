import { categories } from '../../data/products'
import Icon from '../ui/Icon'

const fieldClass =
  'h-[46px] rounded-[11px] border border-line bg-white px-3 text-[13px] outline-none transition focus:border-gold focus:shadow-[0_0_0_3px_rgba(196,154,53,.13)]'

export const sortOptions = [
  { value: 'default', label: 'الترتيب الافتراضي' },
  { value: 'low', label: 'السعر: من الأقل للأعلى' },
  { value: 'high', label: 'السعر: من الأعلى للأقل' },
  { value: 'name', label: 'الاسم: أ إلى ي' },
]

export default function SearchPanel({ query, onQuery, category, onCategory, sort, onSort }) {
  return (
    <div className="mb-[30px] flex flex-wrap gap-[9px] rounded-[18px] border border-line bg-white p-3 sm:gap-3 sm:p-[18px]">
      <div className="relative min-w-0 flex-[1_1_100%] sm:min-w-[220px] sm:flex-1">
        <Icon name="search" className="absolute start-4 top-1/2 -translate-y-1/2 text-[#87958b]" />
        <input
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="ابحث عن اسم المنتج..."
          aria-label="ابحث عن منتج"
          className={`${fieldClass} w-full ps-[43px]`}
        />
      </div>

      <select
        value={category}
        onChange={(e) => onCategory(e.target.value)}
        aria-label="تصفية حسب القسم"
        className={`${fieldClass} w-full flex-[1_1_100%] sm:w-auto sm:min-w-[175px] sm:flex-none`}
      >
        <option value="all">كل الأقسام</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>{c.label}</option>
        ))}
      </select>

      <select
        value={sort}
        onChange={(e) => onSort(e.target.value)}
        aria-label="ترتيب المنتجات"
        className={`${fieldClass} w-full flex-[1_1_100%] sm:w-auto sm:min-w-[175px] sm:flex-none`}
      >
        {sortOptions.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}
