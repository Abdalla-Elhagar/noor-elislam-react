import { Link, useLocation } from 'react-router-dom'

/**
 * Link عادي، لكن لو `to` بيبدأ بـ # (مثلاً "#contact")
 * بيفضل في نفس الصفحة الحالية ويسكرول للعنصر.
 */
export default function SmartLink({ to, ...props }) {
  const { pathname } = useLocation()
  const target = typeof to === 'string' && to.startsWith('#') ? { pathname, hash: to } : to
  return <Link to={target} {...props} />
}
