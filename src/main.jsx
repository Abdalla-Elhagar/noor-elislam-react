import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './context/ToastContext'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* startTransition: الصفحة القديمة تفضل ظاهرة لحد ما الـ chunk الجديد يتحمل */}
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ToastProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
)
