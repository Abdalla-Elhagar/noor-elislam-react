import { cn } from "../../utils/cn";
import Icon from "../ui/Icon";

const badgeTones = {
  default: "bg-gold-soft text-[#765711]",
  sale: "bg-[#fff0d6] text-[#a76a17]",
  discount: "bg-[#fff0d6] text-[#a76a17]",
};

function Rating({ stars, value }) {
  return (
    <div
      className="mb-[13px] text-xs text-gold-bright"
      aria-label={`التقييم ${value} من 5`}
    >
      {"★".repeat(stars)}
      {"☆".repeat(5 - stars)}{" "}
      <span className="me-1 text-[#77847b]">({value})</span>
    </div>
  );
}

/**
 * كارت منتج واحد بيخدم صفحة المنتجات وصفحة العروض.
 * كل الحقول الاختيارية (badge / description / rating / stock / oldPrice) بتظهر لو اتبعتت.
 */
export default function ProductCard({
  image,
  alt,
  category,
  title,
  description,
  badge,
  rating,
  stock,
  price,
  oldPrice,
  addLabel = "أضف",
  isInCart = false,
  onAdd,
  onRemove,
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-white transition duration-300 hover:-translate-y-[5px] hover:border-gold hover:shadow-gold">
      <div className="relative h-[190px] overflow-hidden bg-[#f8f3e8] p-3 sm:h-[205px] lg:h-[220px]">
        {badge && (
          <span
            className={cn(
              "absolute right-3 top-3 z-10 rounded-lg px-[9px] py-[5px] text-[11px] font-extrabold",
              badgeTones[badge.tone ?? "default"],
            )}
          >
            {badge.text}
          </span>
        )}
        <img
          src={image}
          alt={alt ?? title}
          loading="lazy"
          className="size-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        {category && (
          <span className="mb-[7px] text-[11px] font-extrabold text-gold-dark">
            {category}
          </span>
        )}
        <h3 className="mb-2 min-h-12 text-[13px] font-extrabold leading-[1.8] sm:text-[15px]">
          {title}
        </h3>

        {description && (
          <p className="mb-2.5 min-h-[42px] text-xs leading-[1.8] text-muted">
            {description}
          </p>
        )}
        {/* {rating && <Rating {...rating} />} */}
        {/* {stock && (
          <p
            className={cn(
              'mb-[13px] flex items-center gap-1.5 text-[11px] font-bold',
              stock.low ? 'text-[#ad6d1e]' : 'text-[#527b48]',
            )}
          >
            <Icon name={stock.low ? 'alert' : 'checkCircle'} className="text-[10px]" />
            {stock.label}
          </p>
        )} */}

        <div
          className={cn(
            "mt-auto flex gap-1.5 border-t border-[#f0eadc] pt-[13px] sm:gap-2",
            isInCart
              ? "flex-col items-stretch"
              : "items-center justify-between",
          )}
        >
          <div className="whitespace-nowrap text-[15px] font-extrabold text-gold-dark sm:text-lg">
            {oldPrice && (
              <span className="block text-[11px] font-medium text-[#9b9587] line-through">
                {oldPrice} ج.م
              </span>
            )}
            {price} ج.م
          </div>
          <button
            type="button"
            onClick={isInCart ? onRemove : onAdd}
            className={cn(
              "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-[10px] px-2 py-2 text-[10px] font-bold sm:gap-2 sm:px-3 sm:py-2.5 sm:text-xs",
              isInCart
                ? "w-full border border-[#c34d4d]/30 bg-[#fff4f2] text-[#c34d4d] transition hover:bg-[#ffe7e3]"
                : "btn-gold-gradient",
            )}
          >
            <Icon name={isInCart ? "trash" : "plus"} />
            {isInCart ? "إزالة من السلة" : addLabel}
          </button>
        </div>
      </div>
    </article>
  );
}
