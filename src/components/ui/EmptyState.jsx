import Icon from './Icon'

export default function EmptyState({ icon = 'box', title, children }) {
  return (
    <div role="status" className="rounded-[18px] border border-line bg-white px-4 py-11 text-center text-muted">
      <Icon name={icon} className="mx-auto mb-3.5 text-[38px] text-[#c9b36f]" />
      {title && <h5 className="mb-1 font-bold text-ink">{title}</h5>}
      <p>{children}</p>
    </div>
  )
}
