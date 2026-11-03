import useCarousel from '../../hooks/useCarousel'
import { homeSlides } from '../../data/site'
import { cn } from '../../utils/cn'
import Button from '../ui/Button'
import { SliderArrow, SliderDots } from '../ui/SliderControls'

function HeroSlide({ slide, active, first }) {
  const Heading = first ? 'h1' : 'h2'
  return (
    <div
      aria-hidden={!active}
      className={cn(
        'absolute inset-0 flex items-center transition-opacity duration-700',
        active ? 'z-[1] opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <img
        src={slide.image}
        alt=""
        loading={first ? 'eager' : 'lazy'}
        fetchPriority={first ? 'high' : 'auto'}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(20,20,20,.86)_0%,rgba(20,20,20,.65)_43%,rgba(20,20,20,.08)_100%)]" />

      <div className="container-x relative z-[2]">
        <div className="max-w-[670px] px-4 py-5 text-white sm:px-0 sm:py-[30px]">
          <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[#f2d58c] before:h-0.5 before:w-9 before:bg-gold before:content-['']">
            {slide.label}
          </div>
          <Heading className="mb-[18px] text-[clamp(28px,8vw,34px)] font-extrabold leading-[1.4] sm:text-[clamp(34px,4.5vw,58px)] sm:leading-[1.5]">
            {slide.title[0]}
            <br />
            <span className="text-[#e1bd68]">{slide.title[1]}</span>
          </Heading>
          <p className="mb-[30px] max-w-[570px] text-xs leading-[1.8] text-[#ededed] sm:text-base sm:leading-[2.1]">
            {slide.text}
          </p>
          <div className="flex flex-wrap items-center gap-[9px] sm:gap-[13px]">
            <Button to={slide.primary.to} icon={slide.primary.icon}>
              {slide.primary.label}
            </Button>
            <Button to={slide.secondary.to} icon={slide.secondary.icon} variant="outline">
              {slide.secondary.label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HeroSlider() {
  const { index, next, prev, goTo, hoverProps } = useCarousel({ length: homeSlides.length })

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="الشرائح الرئيسية"
      className="relative"
      {...hoverProps}
    >
      <div className="relative h-[480px] overflow-hidden sm:h-[500px] lg:h-[570px]">
        {homeSlides.map((slide, i) => (
          <HeroSlide key={slide.image} slide={slide} active={i === index} first={i === 0} />
        ))}

        <div className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-between px-[2%]">
          <SliderArrow direction="prev" onClick={prev} />
          <SliderArrow direction="next" onClick={next} />
        </div>

        <SliderDots
          count={homeSlides.length}
          active={index}
          onSelect={goTo}
          className="absolute bottom-7 left-1/2 z-[3] -translate-x-1/2"
        />
      </div>
    </section>
  )
}
