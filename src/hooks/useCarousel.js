import { useCallback, useEffect, useState } from 'react'

/**
 * سلايدر بتشغيل تلقائي: بيقف مع hover/focus، وبيحترم prefers-reduced-motion.
 * hoverProps: انشرها على العنصر الرئيسي للسلايدر.
 */
export default function useCarousel({ length, interval = 5000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState('next')

  const goTo = useCallback(
    (i) => {
      const target = ((i % length) + length) % length
      const forwardDistance = (target - index + length) % length
      const backwardDistance = (index - target + length) % length

      if (target === index) return
      setDirection(forwardDistance <= backwardDistance ? 'next' : 'prev')
      setIndex(target)
    },
    [index, length],
  )
  const next = useCallback(() => {
    setDirection('next')
    setIndex((i) => (i + 1) % length)
  }, [length])
  const prev = useCallback(() => {
    setDirection('prev')
    setIndex((i) => (i - 1 + length) % length)
  }, [length])
  const getSlideOffset = useCallback(
    (slideIndex) => {
      if (slideIndex === index || length < 2) return 0
      const adjacentIndex =
        direction === 'next'
          ? (index - 1 + length) % length
          : (index + 1) % length
      if (slideIndex === adjacentIndex) {
        return direction === 'next' ? -100 : 100
      }
      return direction === 'next' ? 100 : -100
    },
    [direction, index, length],
  )

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

  return { index, next, prev, goTo, getSlideOffset, hoverProps }
}
