import { useCart } from '../../context/CartContext'
import { getProductCartId } from '../../data/products'
import ProductCard from '../product/ProductCard'
import ProductGrid from '../product/ProductGrid'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import SmartLink from '../ui/SmartLink'

export default function CategorySection({ category, products, showHeading = true }) {
  const { items, addItem, removeItem } = useCart()

  return (
    <div id={category?.id} className="mb-[38px] md:mb-[55px]">
      {showHeading && category && (
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
      )}
      <ProductGrid>
        {products.map((p) => {
          const cartId = getProductCartId(p)

          return (
            <ProductCard
              key={cartId}
              image={p.image}
              category={category?.label}
              title={p.name}
              description={p.description}
              badge={p.badge && { text: p.badge, tone: p.badgeSale ? 'sale' : 'default' }}
              rating={{ stars: p.stars, value: p.rating }}
              price={p.price}
              oldPrice={p.oldPrice}
              isInCart={items.some((item) => item.id === cartId)}
              onAdd={() => addItem({ id: cartId, name: p.name, price: p.price })}
              onRemove={() => removeItem(cartId)}
            />
          )
        })}
      </ProductGrid>
    </div>
  )
}
