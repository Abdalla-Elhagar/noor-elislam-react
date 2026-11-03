import { cn } from '../../utils/cn'
import Icon from './Icon'

/** سهم السلايدر: direction = prev (على بداية السطر) أو next */
export function SliderArrow({ direction, onClick, className }) {
  const isPrev = direction === 'prev'
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? 'السابق' : 'التالي'}
      className={cn(
        'pointer-events-auto grid size-8 place-items-center rounded-full border border-white/50 bg-white/15 text-xs text-white transition hover:border-gold hover:bg-gold sm:size-[42px] sm:text-base',
        className,
      )}
    >
      <Icon name={isPrev ? 'chevronRight' : 'chevronLeft'} />
    </button>
  )
}

export function SliderDots({ count, active, onSelect, labels = [], className }) {
  return (
    <div role="group" aria-label="اختيار الشريحة" className={cn('flex items-center gap-2', className)}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          aria-label={labels[i] ?? `الشريحة ${i + 1}`}
          aria-current={i === active}
          className={cn(
            'h-[9px] rounded-full transition-all duration-200',
            i === active ? 'w-[25px] bg-[#ffd166]' : 'w-[9px] bg-white/50',
          )}
        />
      ))}
    </div>
  )
}
