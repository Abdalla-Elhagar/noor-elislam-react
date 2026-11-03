import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <p className="mb-2 text-6xl font-extrabold text-gold">404</p>
        <h1 className="mb-3 text-2xl font-extrabold">الصفحة دي مش موجودة</h1>
        <p className="mb-6 text-muted">يمكن الرابط اتغير أو اتكتب غلط.</p>
        <Button to="/" icon="arrow">
          الرجوع للرئيسية
        </Button>
      </div>
    </section>
  )
}
