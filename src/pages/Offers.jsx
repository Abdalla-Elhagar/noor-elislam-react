import { useMemo, useState } from 'react'
import OffersHero from '../components/offers/OffersHero'
import PromoFilters from '../components/offers/PromoFilters'
import ProductCard from '../components/product/ProductCard'
import ProductGrid from '../components/product/ProductGrid'
import EmptyState from '../components/ui/EmptyState'
import SectionHeading from '../components/ui/SectionHeading'
import { useCart } from '../context/CartContext'
import { offers } from '../data/offers'
import { getCategoryById, getProductById } from '../data/products'

// دمج العرض مع بيانات المنتج الأصلي (الاسم/الصورة/القسم/السعر القديم/نسبة الخصم)
const offerItems = offers.map((offer) => {
  const product = getProductById(offer.productId)
  return {
    ...offer,
    product,
    categoryLabel: getCategoryById(product.category).label,
    discount: Math.round(((product.price - offer.price) / product.price) * 100),
  }
})

export default function Offers() {
  const [filter, setFilter] = useState('all')
  const { addItem } = useCart()

  const visible = useMemo(
    () => offerItems.filter((o) => filter === 'all' || o.filters.includes(filter)),
    [filter],
  )

  return (
    <>
      <OffersHero />
      <PromoFilters active={filter} onChange={setFilter} />

      <section id="offersProducts" className="pb-12 pt-[18px] md:pb-[70px] md:pt-[22px]">
        <div className="container-x">
          <SectionHeading
            icon="tags"
            title="عروض تستحق التجربة"
            description="أسعار العرض موضحة بجوار السعر السابق لكل منتج"
            action={
              <span className="whitespace-nowrap text-xs font-bold text-gold-dark" aria-live="polite">
                {visible.length} عروض
              </span>
            }
          />

          {visible.length > 0 ? (
            <ProductGrid layout="offers">
              {visible.map((o) => (
                <ProductCard
                  key={o.id}
                  image={o.product.image}
                  alt={`عبوة ${o.product.name}`}
                  category={o.categoryLabel}
                  title={o.product.name}
                  badge={{ text: `خصم ${o.discount}%`, tone: 'discount' }}
                  stock={{ label: o.lowStock ? 'قطع محدودة' : 'متوفر', low: o.lowStock }}
                  price={o.price}
                  oldPrice={o.product.price}
                  addLabel="أضف للسلة"
                  onAdd={() => addItem({ id: o.id, name: o.product.name, price: o.price })}
                />
              ))}
            </ProductGrid>
          ) : (
            <EmptyState icon="tags">لا توجد منتجات ضمن هذا العرض حاليًا.</EmptyState>
          )}
        </div>
      </section>
    </>
  )
}
