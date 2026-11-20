// بيانات الموقع العامة: الاسم، الروابط، التواصل، السلايدر... كلها في مكان واحد.

export const brand = {
  name: "معرض نور الاسلام",
  tagline: "اختيارك الأفضل دائماً",
  logo: "/img/7.jpeg",
};

// أي رابط بيبدأ بـ # (زي '#contact') بيسكرول لنفس العنصر في الصفحة الحالية
export const navLinks = [
  { label: "الصفحة الرئيسية", to: "/", end: true },
  { label: "منتجاتنا", to: "/products" },
  { label: "عروضنا", to: "/offers" },
  { label: "تواصل معنا", to: "#contact" },
];

export const contactInfo = {
  address: "الكبري البسيوني, شارع عمر زعفان",
  phone: "201018074725",
  hours: "من 10 صباحا إلي 9 مساءاً",
};

// ضع روابط صفحات المعرض الحقيقية
export const socialLinks = [
  {
    id: "facebook",
    label: "فيسبوك",
    href: "https://www.facebook.com/share/1c1QhJAp1Y",
  },
  { id: "whatsapp", label: "واتساب", href: "https://wa.me/201018074725" },
];

export const footerQuickLinks = [
  { label: "الصفحة الرئيسية", to: "/" },
  { label: "منتجاتنا", to: "/products" },
  { label: "عروضنا", to: "/offers" },
  { label: "من نحن", to: "/#about" },
  { label: "تواصل معنا", to: "#contact" },
];

export const footerWhyUs = [
  { label: "جودة المنتجات", to: "/#about" },
  { label: "أسعار مناسبة", to: "/#about" },
  { label: "خدمة العملاء", to: "#contact" },
  { label: "أحدث العروض", to: "/offers" },
];

export const homeSlides = [
  {
    image: "/img/1.jpeg",
    label: "أهلاً بك في معرضنا",
    title: ["معرض نور الاسلام", "جودة تستحقها"],
    text: "اكتشف تشكيلة الأدوات الصحية والخلاطات والأحواض، وجهّز حمامك بجودة وأسعار مناسبة.",
    primary: {
      label: "اكتشف منتجاتنا",
      to: "/products#products",
      icon: "arrow",
    },
    secondary: { label: "اعرف المزيد", to: "/#about", icon: "info" },
  },
  {
    image: "/img/2.jpeg",
    label: "تسوق بثقة وراحة",
    title: ["الجودة في المقام الأول", "والسعر يناسبك"],
    text: "نوفر مستلزمات الحمام والمطبخ بتصميمات متنوعة وجودة نهتم بها لتناسب بيتك.",
    primary: {
      label: "تصفح المنتجات",
      to: "/products#products",
      icon: "arrow",
    },
    secondary: { label: "اتصل بنا", to: "#contact", icon: "phone" },
  },
  {
    image: "/img/3.jpeg",
    label: "عروض مميزة في انتظارك",
    title: ["وفر أكتر مع", "عروض نور الاسلام"],
    text: "تابع عروض الأدوات الصحية وأطقم الحمام، واختار الأنسب لتجهيز بيتك بأفضل قيمة.",
    primary: { label: "اكتشف عروضنا", to: "/offers", icon: "tags" },
    secondary: { label: "تواصل معنا", to: "#contact", icon: "headset" },
  },
];

export const homeFeatures = [
  {
    icon: "award",
    title: "جودة مميزة",
    text: "أدوات صحية بجودة نهتم بها",
  },
  {
    icon: "tags",
    title: "أسعار مناسبة",
    text: "خيارات تناسب تجهيزات بيتك وميزانيتك",
  },
  {
    icon: "handshake",
    title: "خدمة تهتم بك",
    text: "نسعى دائماً لكسب ثقتك ورضاك",
  },
];

export const aboutPoints = [
  "أدوات صحية متنوعة",
  "اهتمام برضا العملاء",
  "أسعار مناسبة",
  "مستلزمات للحمام والمطبخ",
];

export const productBenefits = [
  { icon: "check", title: "تشكيلة متنوعة", text: "خلاطات وأحواض وأطقم حمام" },
  {
    icon: "truck",
    title: "توصيل للمنزل",
    text: "اعرض سياسة التوصيل الخاصة بك",
  },
  {
    icon: "shield",
    title: "اهتمام بالجودة",
    text: "اختيارات نهتم بجودتها لتدوم",
  },
  { icon: "headset", title: "خدمة العملاء", text: "نحن هنا لمساعدتك" },
];

export const offerSlides = [
  // {
  //   icon: "sparkles",
  //   kicker: "عروض موسمية لفترة محدودة",
  //   title: ["أقوى عروض", "الموسم"],
  //   text: "اكتشف أسعارًا مميزة على الأدوات الصحية وتجهيزات الحمام قبل انتهاء عروض الأسبوع.",
  //   highlight: "تخفيضات تصل إلى 20% على منتجات مختارة!",
  // },
  // {
  //   icon: "bolt",
  //   kicker: "عروض الأسبوع",
  //   title: ["اختياراتك اليومية", "بسعر أوفر"],
  //   text: "خصومات على الخلاطات والأحواض وأطقم الحمام لفترة محدودة.",
  //   highlight: "وفّر أكثر على المنتجات الأكثر طلبًا!",
  // },
  // {
  //   icon: "gift",
  //   kicker: "عروض لا تفوتك",
  //   title: ["جدّد حمامك", "بعروض مميزة"],
  //   text: "اكتشف مستلزمات الحمام والمطبخ بأسعار خاصة، وجهّز بيتك بسهولة.",
  //   highlight: "عروض جديدة وخصومات طوال الأسبوع!",
  // },
];
