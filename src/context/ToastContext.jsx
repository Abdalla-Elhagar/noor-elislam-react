import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'
import Toast from '../components/ui/Toast'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ message: '', visible: false })
  const timer = useRef()

  const showToast = useCallback((message, duration = 2500) => {
    clearTimeout(timer.current)
    setToast({ message, visible: true })
    timer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), duration)
  }, [])

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast {...toast} />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>')
  return ctx
}
