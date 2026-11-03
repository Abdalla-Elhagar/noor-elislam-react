import { useToast } from '../../context/ToastContext'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/format'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Modal from '../ui/Modal'

function CartRow({ item, onRemove }) {
  return (
    <li className="flex items-center justify-between gap-2.5 border-b border-line py-3 text-[13px]">
      <div>
        <strong>{item.name}</strong>
        <div className="mt-1 text-muted">
          {item.quantity} × {formatPrice(item.price, 'ar-EG')}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <strong>{formatPrice(item.price * item.quantity, 'ar-EG')}</strong>
        <button
          type="button"
          onClick={() => onRemove(item.id)}
          aria-label={`حذف ${item.name}`}
          className="p-1 text-[#c34d4d] transition hover:scale-110"
        >
          <Icon name="trash" />
        </button>
      </div>
    </li>
  )
}

export default function CartModal() {
  const { items, total, isOpen, closeCart, removeItem } = useCart()
  const { showToast } = useToast()

  const handleCheckout = () =>
    showToast(
      items.length === 0
        ? 'السلة فارغة، أضف منتجات أولًا'
        : 'السلة جاهزة؛ اربط زر الطلب بنظام المبيعات',
    )

  return (
    <Modal open={isOpen} onClose={closeCart} title="سلة المشتريات" icon="cart">
      {items.length === 0 ? (
        <div className="py-8 text-center text-muted">
          <Icon name="cart" className="mx-auto mb-3 text-3xl" />
          السلة فارغة حاليًا
        </div>
      ) : (
        <ul>
          {items.map((item) => (
            <CartRow key={item.id} item={item} onRemove={removeItem} />
          ))}
        </ul>
      )}

      <div className="mt-4 flex items-center justify-between">
        <strong>الإجمالي:</strong>
        <strong className="text-xl text-gold-dark">{formatPrice(total, 'ar-EG')}</strong>
      </div>

      <Button variant="gradient" onClick={handleCheckout} className="mt-3 w-full px-4 py-[11px]">
        متابعة الطلب
      </Button>
      <p className="mt-2 text-xs text-muted">
        هذه سلة تجريبية؛ إتمام الطلب يحتاج ربط الموقع بنظام طلبات.
      </p>
    </Modal>
  )
}
