import { useToast } from '../../context/ToastContext'
import { useCart } from '../../context/CartContext'
import { contactInfo } from '../../data/site'
import { formatPrice } from '../../utils/format'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Modal from '../ui/Modal'

function CartRow({ item, onRemove, onQuantityChange }) {
  return (
    <li className="flex items-center justify-between gap-2.5 border-b border-line py-3 text-[13px]">
      <div className="min-w-0 flex-1">
        <strong>{item.name}</strong>
        <div className="mt-1 text-muted">
          <label className="inline-flex items-center gap-2">
            الكمية
            <input
              type="number"
              min="1"
              step="1"
              inputMode="numeric"
              value={item.quantity}
              onChange={(event) => onQuantityChange(item.id, Number(event.target.value))}
              aria-label={`كمية ${item.name}`}
              className="w-[72px] rounded-lg border border-line px-2 py-1 text-center text-ink"
            />
          </label>
          <span className="ms-2">× {formatPrice(item.price, 'ar-EG')}</span>
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
  const { items, total, isOpen, closeCart, removeItem, setQuantity } = useCart()
  const { showToast } = useToast()

  const handleCheckout = () => {
    if (items.length === 0) {
      showToast('السلة فارغة، أضف منتجات أولًا')
      return
    }

    const orderDetails = items
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}\n` +
          `   الكمية: ${item.quantity}\n` +
          `   سعر القطعة: ${formatPrice(item.price, 'ar-EG')}\n` +
          `   الإجمالي: ${formatPrice(item.price * item.quantity, 'ar-EG')}`,
      )
      .join('\n\n')
    const message =
      `السلام عليكم، أرغب في طلب المنتجات التالية:\n\n${orderDetails}\n\n` +
      `إجمالي الطلب: ${formatPrice(total, 'ar-EG')}\n` +
      'يرجى تأكيد الطلب والتوصيل. شكرًا لكم.'
    const whatsappUrl = `https://wa.me/${contactInfo.phone}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

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
            <CartRow
              key={item.id}
              item={item}
              onRemove={removeItem}
              onQuantityChange={setQuantity}
            />
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
        سيتم فتح واتساب برسالة تحتوي على المنتجات وإجمالي الطلب.
      </p>
    </Modal>
  )
}
