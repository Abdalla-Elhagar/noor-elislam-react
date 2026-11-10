import useCarousel from "../../hooks/useCarousel";
import useCountdown from "../../hooks/useCountdown";
import { cn } from "../../utils/cn";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { SliderArrow, SliderDots } from "../ui/SliderControls";
import Countdown from "./Countdown";

function OfferSlide({
  active,
  first,
  offset,
  maxDiscount,
  featuredProduct,
  onShowDiscounted,
  time,
}) {
  const Heading = first ? "h1" : "h2";
  const image = first ? featuredProduct?.image || "/img/4.jpeg" : "/img/4.jpeg";

  return (
    <article
      aria-hidden={!active}
      className={cn(
        "grid items-center gap-5 pb-[42px] pt-3 transition-[opacity,transform] duration-500 [grid-area:1/1] md:grid-cols-[1.1fr_.9fr] md:gap-[clamp(24px,5vw,70px)] md:pt-[18px]",
        active
          ? "z-[1] opacity-100"
          : "pointer-events-none invisible opacity-0",
      )}
      style={{ transform: `translateX(${offset}%)` }}
    >
      <div>
        <span className="mb-3 inline-flex items-center gap-[9px] text-sm font-extrabold text-[#ffe2aa]">
          <Icon name={first ? "tags" : "gift"} className="text-[#ffd166]" />
          {first ? "خصومات على منتجات مختارة" : "عرض التشطيب الكامل"}
        </span>
        <Heading className="mb-2.5 text-[clamp(32px,9vw,46px)] font-extrabold leading-[1.35] md:text-[clamp(34px,5vw,62px)]">
          {first ? (
            <>
              خصومات تصل إلى
              <br />
              <span className="text-[#ffd166]">{maxDiscount}%</span>
            </>
          ) : (
            <>
              تشطيب كامل
              <br />
              <span className="text-[#ffd166]">ومراية هدية</span>
            </>
          )}
        </Heading>
        <p className="max-w-[650px] text-[13px] leading-[1.9] text-white/90 md:text-base">
          {first
            ? featuredProduct
              ? `خصومات حقيقية على منتجات مختارة، ومنها ${featuredProduct.name}.`
              : "اكتشف المنتجات المتاحة وأسعارها في صفحة العروض."
            : "مع كل تشطيب كامل للحمام، هتاخد مراية هدية من معرض نور الإسلام."}
        </p>
        <strong className="mt-[9px] inline-block text-[13px] font-extrabold text-[#ffe2aa] md:text-base">
          {first
            ? `شاهد المنتجات بخصم ${Math.min(maxDiscount, 30)}% فأكثر`
            : "جهّز حمامك واستلم هديتك"}
        </strong>

        <div className="mt-[25px] flex flex-col items-start gap-[17px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          {first && <Countdown time={time} />}
          {first ? (
            <Button
              onClick={onShowDiscounted}
              variant="gradient"
              icon="arrow"
              className="min-h-[46px] !rounded-[10px] px-5 py-[11px] text-[13px]"
            >
              شوف الخصومات
            </Button>
          ) : (
            <Button
              to="/products#products"
              variant="gradient"
              icon="arrow"
              className="min-h-[46px] !rounded-[10px] px-5 py-[11px] text-[13px]"
            >
              تسوق الآن
            </Button>
          )}
        </div>
      </div>

      <div className="h-[190px] overflow-hidden rounded-[20px] border border-white/20 bg-transparent p-3 shadow-[0_18px_45px_rgba(0,0,0,.2)] md:h-[260px] md:rounded-[28px] lg:h-[300px]">
        <img
          src={image}
          alt={
            first
              ? featuredProduct?.name || "منتجات عليها خصومات"
              : "مراية في معرض مستلزمات الحمام"
          }
          loading={first ? "eager" : "lazy"}
          className={`size-full ${first ? "object-contain" : "object-cover"}`}
        />
      </div>
    </article>
  );
}

export default function OffersHero({
  maxDiscount,
  featuredProduct,
  onShowDiscounted,
}) {
  const { index, next, prev, goTo, getSlideOffset, hoverProps } = useCarousel({
    length: 2,
  });
  const time = useCountdown();

  return (
    <section
      aria-roledescription="carousel"
      aria-label="العروض الموسمية"
      className="relative overflow-hidden bg-[linear-gradient(112deg,#e87916_0%,#a84312_52%,#29251d_100%)] py-7 text-white md:py-[46px]"
      {...hoverProps}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[260px] start-[20%] size-[620px] rounded-full border border-white/10"
      />
      <div className="container-x relative">
        <div className="relative grid px-[26px] min-[381px]:px-[30px] md:px-[46px]">
          {[0, 1].map((slide) => (
            <OfferSlide
              key={slide}
              active={slide === index}
              first={slide === 0}
              offset={getSlideOffset(slide)}
              maxDiscount={maxDiscount}
              featuredProduct={featuredProduct}
              onShowDiscounted={onShowDiscounted}
              time={time}
            />
          ))}

          <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-between">
            <SliderArrow direction="prev" onClick={prev} />
            <SliderArrow direction="next" onClick={next} />
          </div>
          <SliderDots
            count={2}
            active={index}
            onSelect={goTo}
            className="absolute bottom-3.5 left-1/2 z-[3] -translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
}
