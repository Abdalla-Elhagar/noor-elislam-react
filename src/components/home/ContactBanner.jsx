import Button from '../ui/Button'
import SectionLabel from '../ui/SectionLabel'

export default function ContactBanner() {
  return (
    <section className="bg-[#f5f5f5] py-10 md:py-[65px]">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[14px] border border-[#ececec] border-r-[5px] border-r-gold bg-white p-[22px] sm:p-[30px] md:flex-row md:items-center lg:px-10 lg:py-[35px]">
          <div>
            <SectionLabel>عروضنا ومنتجاتنا</SectionLabel>
            <h3 className="mb-2.5 text-[21px] font-extrabold md:text-[25px]">بتدور على اختيار مناسب ليك؟</h3>
            <p className="text-sm leading-[1.9] text-[#747474]">
              تواصل مع معرض نور الاسلام للتعرف على المنتجات المتاحة وآخر العروض والأسعار.
            </p>
          </div>
          <Button to="#contact" icon="arrow" className="shrink-0">
            اسأل عن العروض
          </Button>
        </div>
      </div>
    </section>
  )
}
