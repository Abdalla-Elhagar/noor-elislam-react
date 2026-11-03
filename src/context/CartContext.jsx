import { createContext, useCallback, useContext, useMemo, useReducer, useState } from 'react'
import { useToast } from './ToastContext'

const CartContext = createContext(null)

function cartReducer(items, action) {
  switch (action.type) {
    case 'add': {
      const exists = items.some((i) => i.id === action.item.id)
      return exists
        ? items
        : [...items, { ...action.item, quantity: 1 }]
    }
    case 'remove':
      return items.filter((i) => i.id !== action.id)
    case 'setQuantity':
      if (!Number.isInteger(action.quantity) || action.quantity < 1) return items
      return items.map((i) =>
        i.id === action.id ? { ...i, quantity: action.quantity } : i,
      )
    case 'clear':
      return []
    default:
      return items
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [])
  const [isOpen, setIsOpen] = useState(false)
  const { showToast } = useToast()

  const addItem = useCallback(
    (item) => {
      dispatch({ type: 'add', item })
      showToast(`تمت إضافة ${item.name} إلى السلة`)
    },
    [showToast],
  )
  const removeItem = useCallback((id) => dispatch({ type: 'remove', id }), [])
  const setQuantity = useCallback(
    (id, quantity) => dispatch({ type: 'setQuantity', id, quantity }),
    [],
  )
  const clearCart = useCallback(() => dispatch({ type: 'clear' }), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((sum, i) => sum + i.quantity, 0),
      total: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      isOpen,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      openCart,
      closeCart,
    }),
    [items, isOpen, addItem, removeItem, setQuantity, clearCart, openCart, closeCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>')
  return ctx
}
