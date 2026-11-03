import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import Icon from './Icon'

export default function Modal({ open, onClose, title, icon, children }) {
  const titleId = useId()
  const panelRef = useRef(null)
  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return undefined
    const previouslyFocused = document.activeElement
    const onKeyDown = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKeyDown)
    panelRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[1100] flex animate-fade-in items-center justify-center bg-black/50 p-4"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="max-h-[90vh] w-full max-w-[500px] overflow-y-auto rounded-2xl bg-white shadow-2xl outline-none"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 id={titleId} className="flex items-center gap-2 text-lg font-extrabold">
            {icon && <Icon name={icon} className="text-gold-dark" />}
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق"
            className="grid size-9 place-items-center rounded-lg text-muted transition hover:bg-gold-light hover:text-gold-dark"
          >
            <Icon name="close" />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
