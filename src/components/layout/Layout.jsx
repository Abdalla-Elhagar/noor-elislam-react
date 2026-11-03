import { lazy, Suspense, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import PageLoader from '../ui/PageLoader'
import BackToTop from './BackToTop'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollManager from './ScrollManager'

// مودال السلة بيتحمل أول مرة تتفتح فقط
const CartModal = lazy(() => import('../cart/CartModal'))

export default function Layout() {
  const { isOpen } = useCart()
  const [cartRequested, setCartRequested] = useState(false)

  useEffect(() => {
    if (isOpen) setCartRequested(true)
  }, [isOpen])

  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      {cartRequested && (
        <Suspense fallback={null}>
          <CartModal />
        </Suspense>
      )}
    </>
  )
}
