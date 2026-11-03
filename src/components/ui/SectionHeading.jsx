import Icon from './Icon'

export default function SectionHeading({ title, description, icon, id, action, as: Tag = 'h2' }) {
  return (
    <div className="mb-[25px] flex flex-wrap items-center justify-between gap-4">
      <div>
        <Tag id={id} className="mb-[7px] text-xl font-extrabold md:text-[25px]">
          {icon && <Icon name={icon} className="me-2 inline text-gold-dark" />}
          {title}
        </Tag>
        {description && <p className="text-[13px] text-muted">{description}</p>}
      </div>
      {action}
    </div>
  )
}
