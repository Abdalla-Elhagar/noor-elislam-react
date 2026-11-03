import { useCallback, useEffect, useState } from 'react'

/**
 * سلايدر بتشغيل تلقائي: بيقف مع hover/focus، وبيحترم prefers-reduced-motion.
 * hoverProps: انشرها على العنصر الرئيسي للسلايدر.
 */
export default function useCarousel({ length, interval = 5000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback(
    (i) => setIndex(((i % length) + length) % length),
    [length],
  )
  const next = useCallback(() => setIndex((i) => (i + 1) % length), [length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + length) % length), [length])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduceMotion || length < 2) return undefined
    // index في الـdeps عشان العداد يبدأ من جديد بعد أي تغيير يدوي
    const id = setInterval(next, interval)
    return () => clearInterval(id)
  }, [paused, length, interval, next, index])

  const hoverProps = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
    },
  }

  return { index, next, prev, goTo, hoverProps }
}
