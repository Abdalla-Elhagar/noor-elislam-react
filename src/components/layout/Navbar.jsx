import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { brand, navLinks } from '../../data/site'
import { cn } from '../../utils/cn'
import Icon from '../ui/Icon'
import SmartLink from '../ui/SmartLink'

const linkClass = (active) =>
  cn(
    'relative block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors hover:text-gold-dark',
    'lg:rounded-none lg:px-0 lg:py-2 lg:after:absolute lg:after:bottom-0 lg:after:right-0 lg:after:h-0.5',
    "lg:after:bg-gold lg:after:transition-all lg:after:duration-300 lg:after:content-[''] lg:hover:after:w-full",
    active
      ? 'bg-gold-light text-gold-dark lg:bg-transparent lg:after:w-full'
      : 'text-[#444] lg:after:w-0',
  )

function CartButton() {
  const { count, openCart } = useCart()
  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`فتح السلة، عدد المنتجات: ${count}`}
      className="relative inline-flex size-[42px] items-center justify-center gap-2 rounded-xl border border-line bg-gold-light text-gold-dark shadow-[0_3px_10px_rgba(41,37,29,.06)] transition lg:size-auto lg:rounded-lg lg:border-0 lg:bg-gold lg:px-5 lg:py-[11px] lg:text-[13px] lg:font-bold lg:text-white lg:shadow-none lg:hover:-translate-y-0.5 lg:hover:bg-gold-dark"
    >
      <Icon name="cart" className="text-base lg:text-[13px]" />
      <span className="hidden lg:inline">السلة</span>
      <span className="absolute -start-1.5 -top-1.5 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-gold px-1 text-[10px] text-white lg:static lg:size-5 lg:bg-white lg:text-[11px] lg:text-gold-dark">
        {count}
      </span>
    </button>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-[1000] bg-white/[0.98] py-2 shadow-nav lg:py-[7px]">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-6">
        <Link to="/" dir="ltr" className="order-1 flex shrink-0 items-center gap-2 lg:order-none lg:gap-2.5">
          <span dir="rtl" className="text-right">
            <span className="block text-[15px] font-extrabold leading-tight text-ink sm:text-[19px]">
              {brand.name}
            </span>
            <span className="text-[10px] text-gold-dark sm:text-[11px] sm:tracking-wider">{brand.tagline}</span>
          </span>
          <span className="grid size-[46px] place-items-center overflow-hidden rounded-[10px] sm:size-[66px] sm:rounded-xl">
            <img src={brand.logo} alt={`شعار ${brand.name}`} className="size-full object-contain" />
          </span>
        </Link>

        <div dir="ltr" className="order-2 flex shrink-0 items-center gap-3.5 lg:order-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="grid size-[42px] place-items-center rounded-xl bg-gold text-white transition hover:bg-gold-dark lg:hidden"
          >
            <Icon name={open ? 'close' : 'bars'} className="text-lg" />
          </button>

          {isHome ? (
            <SmartLink
              to="#contact"
              className="hidden items-center gap-2 whitespace-nowrap rounded-lg bg-gold px-5 py-[11px] text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-gold-dark lg:inline-flex"
            >
              <Icon name="phone" />
              تواصل معنا
            </SmartLink>
          ) : (
            <CartButton />
          )}
        </div>

        <nav
          id="main-nav"
          aria-label="القائمة الرئيسية"
          onClick={() => setOpen(false)}
          className={cn(
            'order-3 mt-1.5 w-full flex-col gap-0.5 rounded-xl border border-line bg-white p-2 shadow-[0_12px_24px_rgba(41,37,29,.1)]',
            'lg:order-2 lg:mx-auto lg:mt-0 lg:w-auto lg:flex-row lg:items-center lg:gap-[30px] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none',
            open ? 'flex' : 'hidden lg:flex',
          )}
        >
          {navLinks.map((link) =>
            link.to.startsWith('#') ? (
              <SmartLink key={link.label} to={link.to} className={linkClass(false)}>
                {link.label}
              </SmartLink>
            ) : (
              <NavLink key={link.label} to={link.to} end={link.end} className={({ isActive }) => linkClass(isActive)}>
                {link.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}
