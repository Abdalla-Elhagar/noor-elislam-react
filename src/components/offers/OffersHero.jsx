import { offerSlides } from "../../data/site";
import useCarousel from "../../hooks/useCarousel";
import useCountdown from "../../hooks/useCountdown";
import { cn } from "../../utils/cn";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { SliderArrow, SliderDots } from "../ui/SliderControls";
import Countdown from "./Countdown";

function OfferSlide({ slide, active, first, time }) {
  const Heading = first ? "h1" : "h2";
  return (
    <article
      aria-hidden={!active}
      className={cn(
        "grid items-center gap-5 pb-[42px] pt-3 transition-opacity duration-500 [grid-area:1/1] md:grid-cols-[1.1fr_.9fr] md:gap-[clamp(24px,5vw,70px)] md:pt-[18px]",
        active
          ? "z-[1] opacity-100"
          : "pointer-events-none invisible opacity-0",
      )}
    >
      <div>
        <span className="mb-3 inline-flex items-center gap-[9px] text-sm font-extrabold text-[#ffe2aa]">
          <Icon name={slide.icon} className="text-[#ffd166]" />
          {slide.kicker}
        </span>
        <Heading className="mb-2.5 text-[clamp(32px,9vw,46px)] font-extrabold leading-[1.35] md:text-[clamp(34px,5vw,62px)]">
          {slide.title[0]}
          <br />
          <span className="text-[#ffd166]">{slide.title[1]}</span>
        </Heading>
        <p className="max-w-[650px] text-[13px] leading-[1.9] text-white/90 md:text-base">
          {slide.text}
        </p>
        <strong className="mt-[9px] inline-block text-[13px] font-extrabold text-[#ffe2aa] md:text-base">
          {slide.highlight}
        </strong>

        <div className="mt-[25px] flex flex-col items-start gap-[17px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <Countdown time={time} />
          <Button
            to="#offersProducts"
            variant="gradient"
            icon="arrow"
            className="min-h-[46px] !rounded-[10px] px-5 py-[11px] text-[13px]"
          >
            تسوق الآن
          </Button>
        </div>
      </div>

      <div className="h-[190px] overflow-hidden rounded-[20px] border border-white/20 bg-white/10 shadow-[0_18px_45px_rgba(0,0,0,.2)] md:h-[260px] md:rounded-[28px] lg:h-[300px]">
        <img
          src="/img/8.jpeg"
          alt="مجموعة من المنتجات الصحية"
          loading={first ? "eager" : "lazy"}
          className="size-full object-cover"
        />
      </div>
    </article>
  );
}

export default function OffersHero() {
  const { index, next, prev, goTo, hoverProps } = useCarousel({
    length: offerSlides.length,
  });
  const time = useCountdown();

  return (
    <section
      aria-roledescription="carousel"
      aria-label="العروض الموسمية"
      className="relative overflow-hidden bg-[linear-gradient(112deg,#e87916_0%,#a84312_52%,#29251d_100%)] py-7 text-white md:py-[46px]"
      {...hoverProps}
    >
      {offerSlides.length == 0 ? (
        <div className="flex justify-center items-center h-[20vh] text-white text-[40px] font-semibold">
          إنتظروا عروضنا قريباََ
        </div>
      ) : (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-[260px] start-[20%] size-[620px] rounded-full border border-white/10"
          />
          <div className="container-x relative">
            <div className="relative grid px-[26px] min-[381px]:px-[30px] md:px-[46px]">
              {offerSlides.map((slide, i) => (
                <OfferSlide
                  key={slide.kicker}
                  slide={slide}
                  active={i === index}
                  first={i === 0}
                  time={time}
                />
              ))}

              <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-between">
                <SliderArrow direction="prev" onClick={prev} />
                <SliderArrow direction="next" onClick={next} />
              </div>
              <SliderDots
                count={offerSlides.length}
                active={index}
                onSelect={goTo}
                className="absolute bottom-3.5 left-1/2 z-[3] -translate-x-1/2"
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
