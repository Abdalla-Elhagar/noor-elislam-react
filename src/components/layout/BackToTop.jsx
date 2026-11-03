import useScrolledPast from '../../hooks/useScrolledPast'
import { cn } from '../../utils/cn'
import Icon from '../ui/Icon'

export default function BackToTop() {
  const visible = useScrolledPast(350)
  return (
    <button
      type="button"
      aria-label="العودة للأعلى"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-3 left-3 z-[999] grid size-[43px] place-items-center rounded-[10px] bg-gold text-white shadow-[0_5px_15px_rgba(0,0,0,.15)] transition duration-300 hover:bg-gold-dark sm:bottom-[22px] sm:left-[22px]',
        visible ? 'visible opacity-100' : 'invisible opacity-0',
      )}
    >
      <Icon name="arrowUp" />
    </button>
  )
}
