import { aboutPoints } from '../../data/site'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import SectionLabel from '../ui/SectionLabel'

export default function About() {
  return (
    <section id="about" className="bg-white py-[65px] sm:py-[100px]">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div className="relative pb-[18px] pl-[18px] before:absolute before:bottom-0 before:left-0 before:h-[65%] before:w-[65%] before:rounded-2xl before:border-4 before:border-gold before:content-[''] sm:pb-[25px] sm:pl-[25px]">
          <img
            src="/img/4.jpeg"
            alt="تصميم داخلي أنيق"
            loading="lazy"
            className="relative z-[1] block h-[300px] w-full rounded-2xl object-cover sm:h-[430px]"
          />
          <div className="absolute bottom-[35px] right-0 z-[2] rounded-xl bg-gold px-[18px] py-3.5 text-center text-white shadow-[0_8px_25px_rgba(0,0,0,.15)] sm:-right-[15px] sm:bottom-10 sm:px-[25px] sm:py-5">
            <strong className="block text-[28px] font-extrabold">
              <Icon name="star" className="mx-auto" />
            </strong>
            <span className="text-xs">ثقتكم هي نجاحنا</span>
          </div>
        </div>

        <div>
          <SectionLabel>من نحن</SectionLabel>
          <h2 className="mb-5 text-[clamp(28px,3vw,39px)] font-extrabold leading-[1.6]">
            أهلاً بك في
            <br />
            <span className="text-gold-dark">معرض نور الاسلام</span>
          </h2>
          <p className="mb-[25px] text-[15px] leading-[2.2] text-[#747474]">
            في معرض نور الاسلام نؤمن أن تجربة التسوق المميزة تبدأ من الاهتمام باحتياجات العميل. نسعى لتوفير منتجات متنوعة بجودة جيدة وأسعار تنافسية، مع الاهتمام بحسن التعامل وتقديم تجربة شراء سهلة ومريحة.
          </p>
          <p className="mb-[25px] text-[15px] leading-[2.2] text-[#747474]">
            هدفنا هو بناء علاقة طويلة الأمد مع عملائنا، من خلال الثقة والوضوح والحرص على تقديم أفضل قيمة ممكنة.
          </p>

          <ul className="mb-[30px] grid gap-3.5 sm:grid-cols-2 sm:gap-[18px]">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-center gap-[11px] text-sm font-bold">
                <span className="grid size-[34px] shrink-0 place-items-center rounded-lg bg-gold-light text-gold-dark">
                  <Icon name="check" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <Button to="#contact" icon="arrow">
            تواصل معنا الآن
          </Button>
        </div>
      </div>
    </section>
  )
}
