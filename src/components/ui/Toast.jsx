import { cn } from '../../utils/cn'

export default function Toast({ message, visible }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'pointer-events-none fixed bottom-[22px] left-[22px] z-[2000] max-w-[calc(100%-44px)] rounded-xl bg-gold-dark px-5 py-3.5 text-[13px] text-white shadow-[0_8px_25px_#0002] transition duration-300',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
      )}
    >
      {message}
    </div>
  )
}
