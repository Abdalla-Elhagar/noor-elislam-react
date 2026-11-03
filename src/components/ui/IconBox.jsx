import { cn } from '../../utils/cn'
import Icon from './Icon'

/** مربع أيقونة بخلفية ذهبية فاتحة - بيتحكم في حجمه من className */
export default function IconBox({ icon, className }) {
  return (
    <span
      className={cn(
        'grid shrink-0 place-items-center bg-gradient-to-br from-gold-light to-[#f2e3b8] text-gold-dark transition-all duration-300',
        className,
      )}
    >
      <Icon name={icon} />
    </span>
  )
}
