
import { useEffect, useMemo, useState } from 'react'

import Benefits from '../components/products/Benefits'
import CategoryGrid from '../components/products/CategoryGrid'
import CategorySection from '../components/products/CategorySection'
import Newsletter from '../components/products/Newsletter'
import ProductsHero from '../components/products/ProductsHero'
import SearchPanel from '../components/products/SearchPanel'

import EmptyState from '../components/ui/EmptyState'
import SectionHeading from '../components/ui/SectionHeading'

import { categories, products } from '../data/products'
import { normalizeArabic } from '../utils/arabic'

// عدد المنتجات في كل صفحة
const ITEMS_PER_PAGE = 8

// طرق ترتيب المنتجات
const sorters = {
  low: (a, b) => a.price - b.price,
  high: (a, b) => b.price - a.price,
  name: (a, b) => a.name.localeCompare(b.name, 'ar'),
  default: () => 0,
}

export default function Products() {
  // States
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('default')
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [currentPage, setCurrentPage] = useState(1)
  const [scrollTarget, setScrollTarget] = useState(null)

  const minPrice = priceRange.min === '' ? null : Number(priceRange.min)
  const maxPrice = priceRange.max === '' ? null : Number(priceRange.max)
  const invalidPriceRange =
    (minPrice !== null && (!Number.isFinite(minPrice) || minPrice < 0)) ||
    (maxPrice !== null && (!Number.isFinite(maxPrice) || maxPrice < 0)) ||
    (minPrice !== null && maxPrice !== null && minPrice > maxPrice)

  // تجميع المنتجات حسب الأقسام وتطبيق البحث والترتيب
  const groups = useMemo(() => {
    if (invalidPriceRange) return []

    const q = normalizeArabic(query)

    return categories
      .filter((c) => category === 'all' || c.id === category)
      .map((c) => ({
        category: c,
        items: products
          .filter((p) => {
            const price = Number(p.price)
            const hasPrice =
              p.price !== null &&
              p.price !== undefined &&
              Number.isFinite(price)

            return (
              p.category === c.id &&
              normalizeArabic(p.name).includes(q) &&
              (minPrice === null || (hasPrice && price >= minPrice)) &&
              (maxPrice === null || (hasPrice && price <= maxPrice))
            )
          })
          .sort(sorters[sort] || sorters.default),
      }))
      .filter((g) => g.items.length > 0)
  }, [query, category, sort, minPrice, maxPrice, invalidPriceRange])

  // جميع المنتجات المطابقة للفلاتر
  const filteredProducts = useMemo(() => {
    return groups.flatMap((group) =>
      group.items.map((item) => ({
        ...item,
        categoryInfo: group.category,
      }))
    )
  }, [groups])

  // إجمالي عدد الصفحات
  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  )

  // ضمان أن الصفحة الحالية ضمن النطاق الصحيح
  const safeCurrentPage = Math.min(
    Math.max(currentPage, 1),
    Math.max(totalPages, 1)
  )

  // المنتجات المعروضة في الصفحة الحالية
  const paginatedProducts = useMemo(() => {
    const start = (safeCurrentPage - 1) * ITEMS_PER_PAGE

    return filteredProducts.slice(
      start,
      start + ITEMS_PER_PAGE
    )
  }, [filteredProducts, safeCurrentPage])

  // إعادة الصفحة الأولى عند تغيير البحث أو القسم أو الترتيب
  useEffect(() => {
    setCurrentPage(1)
  }, [query, category, sort, priceRange])

  // تجميع المنتجات المعروضة حسب الأقسام
  const paginatedGroups = useMemo(() => {
    return categories
      .filter((c) => category === 'all' || c.id === category)
      .map((c) => ({
        category: c,
        items: paginatedProducts.filter(
          (p) => p.category === c.id
        ),
      }))
      .filter((g) => g.items.length > 0)
  }, [paginatedProducts, category])

  // الانتقال إلى قسم المنتجات
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  // اختيار قسم
  const handleSelectCategory = (id) => {
    setCategory(id)
    setQuery('')
    setCurrentPage(1)

    setScrollTarget(id === 'all' ? 'products' : id)
  }

  // تنفيذ السكرول بعد تحديث القسم
  useEffect(() => {
    if (!scrollTarget) return

    document.getElementById(scrollTarget)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    setScrollTarget(null)
  }, [scrollTarget, category])

  // الانتقال بين الصفحات
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return

    setCurrentPage(page)
    scrollToProducts()
  }

  return (
    <>
      {/* Hero */}
      <ProductsHero />

      {/* Benefits */}
      <Benefits />

      {/* Categories */}
      <CategoryGrid
        selected={category}
        onSelect={handleSelectCategory}
      />

      {/* Products Section */}
      <section
        id="products"
        className="scroll-mt-24 pb-[38px] md:pb-[55px]"
      >
        <div className="container-x">

          {/* Section Heading */}
          <SectionHeading
            icon="bag"
            title="منتجاتنا"
            description="تصفح المنتجات واستخدم البحث للوصول إلى المنتج المطلوب"
          />

          {/* Search & Filters */}
          <SearchPanel
            query={query}
            onQuery={setQuery}
            category={category}
            onCategory={setCategory}
            sort={sort}
            onSort={setSort}
            priceRange={priceRange}
            onPriceChange={(bound, value) =>
              setPriceRange((current) => ({ ...current, [bound]: value }))
            }
            onResetPrices={() => setPriceRange({ min: '', max: '' })}
            hasPriceFilter={priceRange.min !== '' || priceRange.max !== ''}
            invalidPriceRange={invalidPriceRange}
          />

          {/* Products */}
          {paginatedGroups.length > 0 ? (
            <div className="space-y-8">
              {paginatedGroups.map((group) => (
                <CategorySection
                  key={group.category.id}
                  category={group.category}
                  products={group.items}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={invalidPriceRange ? 'alert' : 'box'}
              title={
                invalidPriceRange
                  ? 'نطاق السعر غير صحيح'
                  : 'لا توجد منتجات مطابقة'
              }
            >
              {invalidPriceRange
                ? 'أدخل أسعارًا صحيحة واجعل الحد الأدنى أقل من أو يساوي الحد الأعلى.'
                : 'جرب البحث باسم مختلف أو اختر قسمًا آخر.'}
            </EmptyState>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col items-center gap-5">

              {/* Products Count */}
              <p className="text-sm text-muted">
                عرض
                <span className="mx-1 font-bold text-gold">
                  {(safeCurrentPage - 1) * ITEMS_PER_PAGE + 1}
                </span>

                إلى

                <span className="mx-1 font-bold text-gold">
                  {Math.min(
                    safeCurrentPage * ITEMS_PER_PAGE,
                    filteredProducts.length
                  )}
                </span>

                من

                <span className="mx-1 font-bold text-ink">
                  {filteredProducts.length}
                </span>

                منتج
              </p>

              {/* Pagination Buttons */}
              <div
                className="flex flex-wrap items-center justify-center gap-2"
                dir="rtl"
              >

                {/* Previous Button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(safeCurrentPage - 1)}
                  disabled={safeCurrentPage === 1}
                  aria-label="الصفحة السابقة"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl border border-line
                    bg-white text-gold
                    transition-all duration-300
                    hover:border-gold hover:bg-gold hover:text-white
                    hover:shadow-gold-hover
                    disabled:cursor-not-allowed disabled:opacity-30
                    disabled:hover:border-line
                    disabled:hover:bg-white
                    disabled:hover:text-gold
                    disabled:hover:shadow-none
                  "
                >
                  ❮
                </button>

                {/* Page Numbers */}
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    aria-label={`الصفحة ${page}`}
                    aria-current={
                      safeCurrentPage === page ? 'page' : undefined
                    }
                    className={`
                      flex h-11 min-w-11 items-center justify-center
                      rounded-xl border px-3 font-bold
                      transition-all duration-300
                      ${
                        safeCurrentPage === page
                          ? 'border-gold bg-gold text-white shadow-gold'
                          : 'border-line bg-white text-gold hover:border-gold hover:bg-gold hover:text-white hover:shadow-gold-hover'
                      }
                    `}
                  >
                    {page}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(safeCurrentPage + 1)}
                  disabled={safeCurrentPage === totalPages}
                  aria-label="الصفحة التالية"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl border border-line
                    bg-white text-gold
                    transition-all duration-300
                    hover:border-gold hover:bg-gold hover:text-white
                    hover:shadow-gold-hover
                    disabled:cursor-not-allowed disabled:opacity-30
                    disabled:hover:border-line
                    disabled:hover:bg-white
                    disabled:hover:text-gold
                    disabled:hover:shadow-none
                  "
                >
                  ❯
                </button>

              </div>
            </div>
          )}

        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  )
}
