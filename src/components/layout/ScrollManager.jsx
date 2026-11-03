import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * - تغيير الصفحة: يرجع لأول الصفحة.
 * - لو فيه #hash: يسكرول للعنصر (وبيحاول لحد ما الصفحة الـ lazy تتحمل).
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const previousPath = useRef(pathname)

  useEffect(() => {
    if (previousPath.current !== pathname || !hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      previousPath.current = pathname
    }
    if (!hash) return undefined

    let tries = 0
    let timer
    const id = decodeURIComponent(hash.slice(1))
    const scrollToTarget = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      else if (tries++ < 30) timer = setTimeout(scrollToTarget, 50)
    }
    scrollToTarget()
    return () => clearTimeout(timer)
  }, [pathname, hash, key])

  return null
}
