import { homeFeatures } from '../../data/site'
import Icon from '../ui/Icon'

export default function Features() {
  return (
    <section className="relative z-[5] -mt-px bg-gold py-3.5 sm:py-2">
      <div className="container-x grid md:grid-cols-3">
        {homeFeatures.map((f) => (
          <div key={f.title} className="flex items-center gap-3.5 px-[18px] py-3 text-white md:justify-center md:p-2.5">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/55 text-[21px]">
              <Icon name={f.icon} />
            </span>
            <div>
              <h3 className="mb-[5px] text-[15px] font-extrabold">{f.title}</h3>
              <p className="text-xs text-white/90">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
