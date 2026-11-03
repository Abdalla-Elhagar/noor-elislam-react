import { cn } from '../../utils/cn'
import Icon from './Icon'
import SmartLink from './SmartLink'

const base =
  'inline-flex items-center justify-center gap-2.5 font-bold transition duration-300 disabled:opacity-60'

const variants = {
  gold: 'rounded-lg border border-gold bg-gold text-white hover:-translate-y-[3px] hover:border-gold-dark hover:bg-gold-dark',
  outline:
    'rounded-lg border border-white/60 text-white hover:bg-white hover:text-ink',
  gradient: 'btn-gold-gradient rounded-xl border-0',
}

const sizes = {
  md: 'px-[15px] py-[11px] text-[13px] sm:px-[25px] sm:py-[13px] sm:text-sm',
  sm: 'px-3 py-2 text-xs',
}

/** زر موحّد: لو فيه `to` بيبقى Link، لو `href` بيبقى <a>، غير كده <button>. */
export default function Button({
  to,
  href,
  variant = 'gold',
  size = 'md',
  icon,
  className,
  children,
  ...rest
}) {
  const classes = cn(base, variants[variant], sizes[size], className)
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} />}
    </>
  )

  if (to) return <SmartLink to={to} className={classes} {...rest}>{content}</SmartLink>
  if (href) return <a href={href} className={classes} {...rest}>{content}</a>
  return <button type="button" className={classes} {...rest}>{content}</button>
}
