export default function PageLoader() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-label="جاري التحميل">
      <span className="size-11 animate-spin rounded-full border-4 border-gold-soft border-t-gold" />
    </div>
  )
}
