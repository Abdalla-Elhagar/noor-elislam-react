import Button from '../ui/Button'
import Icon from '../ui/Icon'

export default function ProductsHero() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(115deg,#f5e8c5,#fffdf7_75%)] py-[35px] lg:py-[55px]">
      <div className="container-x grid items-center gap-6 lg:grid-cols-2">
        <div className="py-4">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ead9a8] bg-white px-[15px] py-2 text-[13px] font-bold text-gold-dark">
            <Icon name="leaf" />
            صحتك تبدأ من اختياراتك
          </div>
          <h1 className="mb-[15px] text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.6]">
            كل ما تحتاجه لحياة <span className="text-gold-dark">صحية أفضل</span>
          </h1>
          <p className="max-w-[520px] text-[15px] leading-[2] text-[#69776e]">
            اكتشف مجموعة متنوعة من المنتجات الصحية والفيتامينات ومستلزمات العناية اليومية، واختر ما يناسب احتياجاتك.
          </p>
          <Button to="#products" variant="gradient" icon="arrow" className="mt-[15px] !inline-flex px-[25px] py-[13px]">
            اكتشف المنتجات
          </Button>
        </div>

        <div className="h-[230px] overflow-hidden rounded-[28px] bg-[#f2e5c5] shadow-[0_15px_40px_rgba(143,107,24,.12)] lg:h-[310px]">
          <img src="/img/8.jpeg" alt="مجموعة من المنتجات الصحية" loading="lazy" className="size-full object-cover" />
        </div>
      </div>
    </section>
  )
}
