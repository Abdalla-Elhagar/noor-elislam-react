// كل عرض بيشاور على المنتج الأصلي بـ productId، فالاسم والصورة والقسم بيتاخدوا من products.js.
// السعر القديم = سعر المنتج الأصلي، ونسبة الخصم بتتحسب تلقائيًا.
// filters: الفلاتر اللي العرض بيظهر فيها (pots | mixers) - lowStock: الكمية محدودة.
//
// تنبيه: الأسعار والعروض هنا منقولة من ملف products.pdf.
// productId لسه null لأن ملف products.js مش متاح وقت التعديل - لازم يتربط يدويًا بالمنتج المناسب.
// name و oldPrice للمرجعية بس لحد ما يتحدد productId (وممكن يتشالوا بعدها).
// oldPrice: null معناها إن الـ PDF مش مكتوب فيه السعر قبل الخصم.

export const offerFilters = [
  {
    id: "all",
    icon: "tags",
    title: "تخفيضات الموسم",
    hint: "تصفح جميع المنتجات المخفضة",
  },
  { id: "pots", icon: "bolt", title: "عروض الحلل", hint: "خصومات على الحلل" },
  {
    id: "mixers",
    icon: "tags",
    title: "عروض الخلاطات",
    hint: "أسعار خاصة بعد الخصم",
  },
];

export const offers = [
  // ===== قسم الحلة =====
  {
    id: "offer-1",
    productId: null,
    name: "حلة 80×50 - تركي",
    oldPrice: 2800,
    price: 2200,
    filters: ["pots"],
    lowStock: false,
  },
  // مراجعة: السعر في الـ PDF عليه علامة استفهام (4500 ← 2200)
  {
    id: "offer-2",
    productId: null,
    name: "حلة + اسمارت (دائري)",
    oldPrice: 4500,
    price: 2200,
    filters: ["pots"],
    lowStock: false,
  },
  {
    id: "offer-3",
    productId: null,
    name: "حلة + اسمارت 45×70",
    oldPrice: 8000,
    price: 6500,
    filters: ["pots"],
    lowStock: false,
  },
  {
    id: "offer-4",
    productId: null,
    name: "حلة هندميت 45×70",
    oldPrice: 2200,
    price: 1899,
    filters: ["pots"],
    lowStock: false,
  },
  {
    id: "offer-5",
    productId: null,
    name: "حلة هندميت 45×60",
    oldPrice: 2000,
    price: 1699,
    filters: ["pots"],
    lowStock: false,
  },
  {
    id: "offer-6",
    productId: null,
    name: "حلة هندميت كامل 45×70",
    oldPrice: 2900,
    price: 2200,
    filters: ["pots"],
    lowStock: false,
  },
  {
    id: "offer-7",
    productId: null,
    name: "حلة هندميت 45×40",
    oldPrice: 1600,
    price: 1400,
    filters: ["pots"],
    lowStock: false,
  },

  // ===== الخلاطات المتنوعة (بعد الخصم) =====
  // السعر القديم 2899 هو سعر النسخة التانية من نفس الخلاط في الـ PDF
  {
    id: "offer-8",
    productId: null,
    name: "خلاط تركي 3 مخرج - دش + وش + شجرة",
    oldPrice: 2899,
    price: 2199,
    filters: ["mixers"],
    lowStock: false,
  },
  {
    id: "offer-9",
    productId: null,
    name: "خلاط مطبخ شيف سحاب جولد",
    oldPrice: null,
    price: 2900,
    filters: ["mixers"],
    lowStock: false,
  },
  {
    id: "offer-10",
    productId: null,
    name: "طقم خلاط كامل هواء أحمر - دوش + وش + مطبخ",
    oldPrice: null,
    price: 3200,
    filters: ["mixers"],
    lowStock: false,
  },
  {
    id: "offer-11",
    productId: null,
    name: "طقم خلاط كامل هواء بني - دوش + وش + مطبخ",
    oldPrice: null,
    price: 3800,
    filters: ["mixers"],
    lowStock: false,
  },
];
