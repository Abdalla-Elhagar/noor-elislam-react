import { cn } from '../../utils/cn'

const layouts = {
  // صفحة المنتجات: عمودين في الموبايل و4 في الشاشات الكبيرة
  products: 'grid-cols-2 lg:grid-cols-4',
  // صفحة العروض: عمود، ثم 3، ثم 4، ثم 5 في الشاشات الواسعة
  offers: 'grid-cols-1 min-[701px]:grid-cols-3 min-[1051px]:grid-cols-4 min-[1500px]:grid-cols-5',
}

export default function ProductGrid({ layout = 'products', children }) {
  return <div className={cn('grid gap-3 sm:gap-5', layouts[layout])}>{children}</div>
}
