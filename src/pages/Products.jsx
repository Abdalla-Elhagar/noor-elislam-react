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

const sorters = {
  low: (a, b) => a.price - b.price,
  high: (a, b) => b.price - a.price,
  name: (a, b) => a.name.localeCompare(b.name, 'ar'),
  default: () => 0,
}

export default function Products() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('default')
  const [scrollTarget, setScrollTarget] = useState(null)

  // أقسام فيها منتجات مطابقة فقط، والمنتجات مرتبة جوّه كل قسم
  const groups = useMemo(() => {
    const q = normalizeArabic(query)
    return categories
      .filter((c) => category === 'all' || c.id === category)
      .map((c) => ({
        category: c,
        items: products
          .filter((p) => p.category === c.id && normalizeArabic(p.name).includes(q))
          .sort(sorters[sort]),
      }))
      .filter((g) => g.items.length > 0)
  }, [query, category, sort])

  // السكرول بعد ما الـ state يتطبق والقسم يظهر في الـ DOM
  useEffect(() => {
    if (!scrollTarget) return
    document.getElementById(scrollTarget.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [scrollTarget])

  const handleSelectCategory = (id) => {
    setCategory(id)
    setQuery('')
    setScrollTarget({ id: id === 'all' ? 'products' : id, at: Date.now() })
  }

  return (
    <>
      <ProductsHero />
      <Benefits />
      <CategoryGrid selected={category} onSelect={handleSelectCategory} />

      <section id="products" className="pb-[38px] md:pb-[55px]">
        <div className="container-x">
          <SectionHeading
            icon="bag"
            title="منتجاتنا"
            description="تصفح المنتجات واستخدم البحث للوصول إلى المنتج المطلوب"
          />
          <SearchPanel
            query={query}
            onQuery={setQuery}
            category={category}
            onCategory={setCategory}
            sort={sort}
            onSort={setSort}
          />

          {groups.map((g) => (
            <CategorySection key={g.category.id} category={g.category} products={g.items} />
          ))}

          {groups.length === 0 && (
            <EmptyState icon="box" title="لا توجد منتجات مطابقة">
              جرب البحث باسم مختلف أو اختر قسمًا آخر.
            </EmptyState>
          )}
        </div>
      </section>

      <Newsletter />
    </>
  )
}
