import { brand } from '../../data/site'

export default function PageLoader() {
  return (
    <div
      className="grid min-h-[70vh] place-items-center bg-cream px-5"
      role="status"
      aria-label="جاري تحميل الصفحة"
      dir="rtl"
    >
      <div className="flex flex-col items-center text-center">
        <div className="brand-loader-logo mb-5">
          <span className="brand-loader-ring" aria-hidden="true" />
          <span className="relative grid size-[78px] place-items-center overflow-hidden rounded-full border-2 border-white bg-white shadow-gold sm:size-[92px]">
            <img
              src={brand.logo}
              alt=""
              className="size-full object-contain p-1"
            />
          </span>
        </div>

        <p className="text-lg font-extrabold text-ink">{brand.name}</p>
        <p className="mt-1 text-xs text-gold-dark">{brand.tagline}</p>

        <div className="mt-5 h-1 w-32 overflow-hidden rounded-full bg-gold-soft" aria-hidden="true">
          <span className="brand-loader-progress block h-full w-1/2 rounded-full bg-gold" />
        </div>
        <span className="sr-only">جاري التحميل</span>
      </div>
    </div>
  )
}
