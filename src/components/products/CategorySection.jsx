import { useCart } from '../../context/CartContext'
import ProductCard from '../product/ProductCard'
import ProductGrid from '../product/ProductGrid'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import SmartLink from '../ui/SmartLink'

export default function CategorySection({ category, products }) {
  const { addItem } = useCart()

  return (
    <div id={category.id} className="mb-[38px] md:mb-[55px]">
      <SectionHeading
        icon={category.icon}
        title={category.title}
        description={category.description}
        action={
          <SmartLink to="#categories" className="text-[13px] font-extrabold text-gold-dark">
            الأقسام <Icon name="arrow" className="inline" />
          </SmartLink>
        }
      />
      <ProductGrid>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            image={p.image}
            category={category.label}
            title={p.name}
            description={p.description}
            badge={p.badge && { text: p.badge, tone: p.badgeSale ? 'sale' : 'default' }}
            rating={{ stars: p.stars, value: p.rating }}
            price={p.price}
            onAdd={() => addItem({ id: `product-${p.id}`, name: p.name, price: p.price })}
          />
        ))}
      </ProductGrid>
    </div>
  )
}
