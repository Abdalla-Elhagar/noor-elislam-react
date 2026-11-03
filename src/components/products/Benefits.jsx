import { productBenefits } from '../../data/site'
import IconBox from '../ui/IconBox'

export default function Benefits() {
  return (
    <section className="border-b border-line bg-white py-6">
      <div className="container-x grid grid-cols-2 gap-3 lg:grid-cols-4">
        {productBenefits.map((b) => (
          <div key={b.title} className="flex items-center gap-[13px] px-3 py-2">
            <IconBox icon={b.icon} className="size-[45px] rounded-[13px] text-[19px]" />
            <div>
              <h3 className="mb-[5px] text-sm font-extrabold">{b.title}</h3>
              <p className="text-xs text-muted">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
