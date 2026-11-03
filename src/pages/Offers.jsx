import { useMemo, useState } from "react";

import OffersHero from "../components/offers/OffersHero";
import PromoFilters from "../components/offers/PromoFilters";
import ProductCard from "../components/product/ProductCard";
import ProductGrid from "../components/product/ProductGrid";
import EmptyState from "../components/ui/EmptyState";
import SectionHeading from "../components/ui/SectionHeading";

import { useCart } from "../context/CartContext";
import { offers } from "../data/offers";
import { categories, getProductCartId, products } from "../data/products";

const offerItems = offers.map((offer) => {
  const product = products.find(
    (p) => String(p.id) === String(offer.productId),
  );

  const category = categories.find((c) => c.id === product?.category);

  const price = Number(offer.price) || 0;

  const oldPrice = Number(
    offer.oldPrice ?? product?.oldPrice ?? product?.price ?? 0,
  );

  const discount =
    oldPrice > price && oldPrice > 0
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : 0;

  return {
    ...offer,
    product,
    title: product?.name || offer.name || "منتج",
    image: product?.image || "",
    categoryLabel:
      category?.label ||
      (offer.filters?.includes("pots") ? "الحلة" : "الخلاطات"),
    price,
    oldPrice,
    discount,
  };
});

export default function Offers() {
  const [filter, setFilter] = useState("all");
  const { items, addItem, removeItem } = useCart();

  const visible = useMemo(() => {
    return offerItems.filter((offer) => {
      if (filter === "all") return true;

      return Array.isArray(offer.filters) && offer.filters.includes(filter);
    });
  }, [filter]);

  return (
    <>
      <OffersHero />
      {/* 
      <PromoFilters
        active={filter}
        onChange={setFilter}
      />

      <section
        id="offersProducts"
        className="pb-12 pt-[18px] md:pb-[70px] md:pt-[22px]"
      >
        <div className="container-x">
          <SectionHeading
            icon="tags"
            title="عروض تستحق التجربة"
            description="استمتع بأفضل الأسعار والخصومات على منتجاتنا"
            action={
              <span
                className="whitespace-nowrap text-xs font-bold text-gold-dark"
                aria-live="polite"
              >
                {visible.length} عروض
              </span>
            }
          />

          {visible.length > 0 ? (
            <ProductGrid layout="offers">
              {visible.map((offer) => {
                const cartId = offer.product ? getProductCartId(offer.product) : offer.id

                return (
                  <ProductCard
                    key={offer.id}
                    image={offer.image}
                    alt={`صورة ${offer.title}`}
                    category={offer.categoryLabel}
                    title={offer.title}
                    badge={{
                      text:
                        offer.discount > 0
                          ? `خصم ${offer.discount}%`
                          : "عرض خاص",
                      tone: "discount",
                    }}
                    stock={{
                      label: offer.lowStock
                        ? "قطع محدودة"
                        : "متوفر",
                      low: offer.lowStock,
                    }}
                    price={offer.price}
                    oldPrice={
                      offer.oldPrice > offer.price
                        ? offer.oldPrice
                        : undefined
                    }
                    addLabel="أضف للسلة"
                    isInCart={items.some((item) => item.id === cartId)}
                    onAdd={() =>
                      addItem({
                        id: cartId,
                        name: offer.title,
                        price: offer.price,
                        image: offer.image,
                      })
                    }
                    onRemove={() => removeItem(cartId)}
                  />
                )
              })}
            </ProductGrid>
          ) : (
            <EmptyState icon="tags">
              لا توجد منتجات ضمن هذا العرض حاليًا.
            </EmptyState>
          )}
        </div>
      </section> */}
    </>
  );
}
