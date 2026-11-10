import { useMemo, useState } from "react";

import OffersHero from "../components/offers/OffersHero";
import ProductCard from "../components/product/ProductCard";
import ProductGrid from "../components/product/ProductGrid";
import EmptyState from "../components/ui/EmptyState";
import SectionHeading from "../components/ui/SectionHeading";

import { useCart } from "../context/CartContext";
import {
  categories,
  getProductCartId,
  getProductPricing,
  products,
} from "../data/products";

const MIN_HERO_DISCOUNT = 30;
const fallbackImage = "/img/4.jpeg";

const discountedProducts = products
  .filter((product) => Number(product.discount) > 0)
  .map((product) => {
    const category = categories.find((item) => item.id === product.category);
    const pricing = getProductPricing(product);
    const hasProductImage =
      typeof product.image === "string" &&
      product.image.startsWith("img/") &&
      product.image !== "img/proImg";

    return {
      ...product,
      ...pricing,
      discount: Number(product.discount),
      categoryLabel: category?.label || "منتجات متنوعة",
      image: hasProductImage ? `/${product.image}` : fallbackImage,
      imageAlt: hasProductImage ? product.name : "صورة توضيحية من المعرض",
    };
  });

const highestDiscount = Math.max(
  0,
  ...discountedProducts.map((product) => product.discount),
);
const featuredDiscountedProduct = discountedProducts
  .filter((product) => product.imageAlt === product.name)
  .sort((a, b) => b.discount - a.discount)[0];

export default function Offers() {
  const [minimumDiscount, setMinimumDiscount] = useState(0);
  const { items, addItem, removeItem } = useCart();

  const visibleProducts = useMemo(
    () =>
      discountedProducts.filter(
        (product) => product.discount >= minimumDiscount,
      ),
    [minimumDiscount],
  );

  const showDiscountedProducts = () => {
    setMinimumDiscount(MIN_HERO_DISCOUNT);
    document.getElementById("offersProducts")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <OffersHero
        maxDiscount={highestDiscount}
        featuredProduct={featuredDiscountedProduct}
        onShowDiscounted={showDiscountedProducts}
      />

      <section
        id="offersProducts"
        className="scroll-mt-24 pb-12 pt-[18px] md:pb-[70px] md:pt-[22px]"
      >
        <div className="container-x">
          <SectionHeading
            icon="tags"
            title="منتجات عليها خصومات"
            description="تصفح المنتجات المخفضة واختر العرض المناسب لك"
            action={
              <span
                className="whitespace-nowrap text-xs font-bold text-gold-dark"
                aria-live="polite"
              >
                {visibleProducts.length} منتجات
              </span>
            }
          />

          {minimumDiscount > 0 && (
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gold/30 bg-gold-light px-4 py-3 text-sm">
              <span>عرض المنتجات بخصم {minimumDiscount}% فأكثر</span>
              <button
                type="button"
                onClick={() => setMinimumDiscount(0)}
                className="font-bold text-gold-dark underline underline-offset-4"
              >
                عرض كل الخصومات
              </button>
            </div>
          )}

          {visibleProducts.length > 0 ? (
            <ProductGrid layout="offers">
              {visibleProducts.map((product) => {
                const cartId = getProductCartId(product);

                return (
                  <ProductCard
                    key={cartId}
                    image={product.image}
                    alt={product.imageAlt}
                    category={product.categoryLabel}
                    title={product.name}
                    badge={{
                      text: `خصم ${product.discount}%`,
                      tone: "discount",
                    }}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    addLabel="أضف للسلة"
                    isInCart={items.some((item) => item.id === cartId)}
                    onAdd={() =>
                      addItem({
                        id: cartId,
                        name: product.name,
                        price: product.price,
                        oldPrice: product.oldPrice,
                        image: product.image,
                      })
                    }
                    onRemove={() => removeItem(cartId)}
                  />
                );
              })}
            </ProductGrid>
          ) : (
            <EmptyState icon="tags">
              لا توجد منتجات بخصم {minimumDiscount}% فأكثر حاليًا.
            </EmptyState>
          )}
        </div>
      </section>
    </>
  );
}
