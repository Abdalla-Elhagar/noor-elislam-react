import { useState } from 'react'
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

export default function SearchPanel({
  query,
  onQuery,
  category,
  onCategory,
  sort,
  onSort,
  priceRange,
  onPriceChange,
  onResetPrices,
  hasPriceFilter,
  invalidPriceRange,
}) {
  const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(false)

  return (
    <div className="mb-[30px] grid grid-cols-2 gap-2 rounded-[18px] border border-line bg-white p-3 sm:gap-3 sm:p-[18px] lg:grid-cols-[minmax(220px,1fr)_180px_200px_auto]">
      <div className="relative col-span-2 min-w-0 lg:col-span-1">
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
        className={`${fieldClass} w-full min-w-0`}
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
        className={`${fieldClass} w-full min-w-0`}
      >
        {sortOptions.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>

      <button
        type="button"
        aria-expanded={isPriceFilterOpen}
        aria-controls="product-price-filter"
        onClick={() => setIsPriceFilterOpen((open) => !open)}
        className={`col-span-2 inline-flex h-[46px] items-center justify-center gap-2 rounded-[11px] border px-4 text-[13px] font-bold transition hover:border-gold sm:col-span-2 lg:col-span-1 ${
          hasPriceFilter
            ? 'border-gold bg-gold-light text-gold-dark'
            : 'border-line bg-white text-ink'
        }`}
      >
        <Icon name="filter" className="text-sm" />
        <span>فلترة السعر</span>
        {hasPriceFilter && (
          <span className="rounded-full bg-gold-dark px-1.5 py-0.5 text-[10px] text-white">
            مفعّل
          </span>
        )}
      </button>

      {isPriceFilterOpen && (
        <div
          id="product-price-filter"
          className="col-span-2 grid gap-3 rounded-xl border border-line bg-cream/60 p-3 sm:grid-cols-2 sm:items-end sm:p-4 lg:col-span-4"
        >
          <label className="min-w-0 text-xs font-bold text-muted">
            أقل سعر (ج.م)
            <input
              type="number"
              min="0"
              step="any"
              inputMode="decimal"
              value={priceRange.min}
              onChange={(event) => onPriceChange('min', event.target.value)}
              placeholder="مثال: 500"
              aria-label="أقل سعر"
              className={`${fieldClass} mt-1.5 w-full`}
            />
          </label>
          <label className="min-w-0 text-xs font-bold text-muted">
            أعلى سعر (ج.م)
            <input
              type="number"
              min="0"
              step="any"
              inputMode="decimal"
              value={priceRange.max}
              onChange={(event) => onPriceChange('max', event.target.value)}
              placeholder="مثال: 5000"
              aria-label="أعلى سعر"
              className={`${fieldClass} mt-1.5 w-full`}
            />
          </label>
          {hasPriceFilter && (
            <button
              type="button"
              onClick={onResetPrices}
              className="h-[46px] justify-self-start px-2 text-xs font-bold text-gold-dark underline underline-offset-4 sm:col-span-2"
            >
              مسح السعر
            </button>
          )}
          {invalidPriceRange && (
            <p className="text-xs font-bold text-[#ad4545] sm:col-span-2" role="alert">
              أدخل أسعارًا صحيحة واجعل الحد الأدنى أقل من أو يساوي الحد الأعلى.
            </p>
          )}
        </div>
      )}
    </div>
  )
}
