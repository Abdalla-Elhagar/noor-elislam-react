import { useCallback, useEffect, useRef, useState } from 'react'

// نهاية يوم السبت الجاي (23:59:59)
export function getNextSaturday() {
  const end = new Date()
  const daysUntilSaturday = (6 - end.getDay() + 7) % 7 || 7
  end.setDate(end.getDate() + daysUntilSaturday)
  end.setHours(23, 59, 59, 999)
  return end
}

const pad = (n) => String(n).padStart(2, '0')

export default function useCountdown(getTarget = getNextSaturday) {
  const targetRef = useRef(null)
  if (targetRef.current === null) targetRef.current = getTarget()

  const calculate = useCallback(() => {
    let remaining = targetRef.current.getTime() - Date.now()
    if (remaining <= 0) {
      targetRef.current = getTarget()
      remaining = targetRef.current.getTime() - Date.now()
    }
    return {
      days: pad(Math.floor(remaining / 86400000)),
      hours: pad(Math.floor((remaining % 86400000) / 3600000)),
      minutes: pad(Math.floor((remaining % 3600000) / 60000)),
      seconds: pad(Math.floor((remaining % 60000) / 1000)),
    }
  }, [getTarget])

  const [time, setTime] = useState(calculate)

  useEffect(() => {
    const id = setInterval(() => setTime(calculate()), 1000)
    return () => clearInterval(id)
  }, [calculate])

  return time
}
