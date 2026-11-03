// بيانات الموقع العامة: الاسم، الروابط، التواصل، السلايدر... كلها في مكان واحد.

export const brand = {
  name: 'معرض نور الاسلام',
  tagline: 'اختيارك الأفضل دائماً',
  logo: '/img/7.jpeg',
}

// أي رابط بيبدأ بـ # (زي '#contact') بيسكرول لنفس العنصر في الصفحة الحالية
export const navLinks = [
  { label: 'الصفحة الرئيسية', to: '/', end: true },
  { label: 'منتجاتنا', to: '/products' },
  { label: 'عروضنا', to: '/offers' },
  { label: 'تواصل معنا', to: '#contact' },
]

export const contactInfo = {
  address: 'أضف عنوان معرض نور الاسلام هنا',
  phone: 'أضف رقم الهاتف هنا',
  hours: 'تواصل معنا لمعرفة مواعيد العمل',
  email: 'أضف البريد الإلكتروني هنا',
}

// ضع روابط صفحات المعرض الحقيقية
export const socialLinks = [
  { id: 'facebook', label: 'فيسبوك', href: '#' },
  { id: 'instagram', label: 'إنستجرام', href: '#' },
  { id: 'whatsapp', label: 'واتساب', href: '#' },
  { id: 'tiktok', label: 'تيك توك', href: '#' },
]

export const footerQuickLinks = [
  { label: 'الصفحة الرئيسية', to: '/' },
  { label: 'منتجاتنا', to: '/products' },
  { label: 'عروضنا', to: '/offers' },
  { label: 'من نحن', to: '/#about' },
  { label: 'تواصل معنا', to: '#contact' },
]

export const footerWhyUs = [
  { label: 'جودة المنتجات', to: '/#about' },
  { label: 'أسعار مناسبة', to: '/#about' },
  { label: 'خدمة العملاء', to: '#contact' },
  { label: 'أحدث العروض', to: '/offers' },
]

export const homeSlides = [
  {
    image: '/img/1.jpeg',
    label: 'أهلاً بك في معرضنا',
    title: ['معرض نور الاسلام', 'جودة تستحقها'],
    text: 'اكتشف تجربة تسوق مختلفة، واختار من مجموعة متنوعة من المنتجات التي تجمع بين الجودة العالية والأسعار المناسبة.',
    primary: { label: 'اكتشف منتجاتنا', to: '/products#products', icon: 'arrow' },
    secondary: { label: 'اعرف المزيد', to: '/#about', icon: 'info' },
  },
  {
    image: '/img/2.jpeg',
    label: 'تسوق بثقة وراحة',
    title: ['الجودة في المقام الأول', 'والسعر يناسبك'],
    text: 'نهتم بتقديم اختيارات متنوعة تناسب احتياجاتك، مع الحرص على جودة المنتجات ورضا عملائنا.',
    primary: { label: 'تصفح المنتجات', to: '/products#products', icon: 'arrow' },
    secondary: { label: 'اتصل بنا', to: '#contact', icon: 'phone' },
  },
  {
    image: '/img/3.jpeg',
    label: 'عروض مميزة في انتظارك',
    title: ['وفر أكتر مع', 'عروض نور الاسلام'],
    text: 'تابع أحدث العروض والمنتجات المتاحة لدينا، واختار الأنسب لك بأفضل قيمة ممكنة.',
    primary: { label: 'اكتشف عروضنا', to: '/offers', icon: 'tags' },
    secondary: { label: 'تواصل معنا', to: '#contact', icon: 'headset' },
  },
]

export const homeFeatures = [
  { icon: 'award', title: 'جودة مميزة', text: 'نهتم بجودة المنتجات واختيار الأفضل' },
  { icon: 'tags', title: 'أسعار مناسبة', text: 'اختيارات تناسب احتياجاتك وميزانيتك' },
  { icon: 'handshake', title: 'خدمة تهتم بك', text: 'نسعى دائماً لكسب ثقتك ورضاك' },
]

export const aboutPoints = ['منتجات متنوعة', 'اهتمام برضا العملاء', 'أسعار تنافسية', 'خدمة مميزة']

export const productBenefits = [
  { icon: 'check', title: 'منتجات متنوعة', text: 'اختيارات تناسب احتياجاتك' },
  { icon: 'truck', title: 'توصيل للمنزل', text: 'اعرض سياسة التوصيل الخاصة بك' },
  { icon: 'shield', title: 'اهتمام بالجودة', text: 'اختر منتجات من مصادر موثوقة' },
  { icon: 'headset', title: 'خدمة العملاء', text: 'نحن هنا لمساعدتك' },
]

export const offerSlides = [
  {
    icon: 'sparkles',
    kicker: 'عروض موسمية لفترة محدودة',
    title: ['أقوى عروض', 'الموسم'],
    text: 'اكتشف أسعارًا مميزة على منتجات الصحة والعناية اليومية قبل انتهاء عروض الأسبوع.',
    highlight: 'تخفيضات تصل إلى 20% على منتجات مختارة!',
  },
  {
    icon: 'bolt',
    kicker: 'عروض الأسبوع',
    title: ['اختياراتك اليومية', 'بسعر أوفر'],
    text: 'خصومات مختارة على المكملات ومنتجات العناية التي تحتاجها كل يوم.',
    highlight: 'وفّر أكثر على المنتجات الأكثر طلبًا!',
  },
  {
    icon: 'gift',
    kicker: 'عروض لا تفوتك',
    title: ['دلّل نفسك', 'بعروض مميزة'],
    text: 'اكتشف منتجات العناية والتغذية بأسعار خاصة، وتسوّق ما يناسبك بسهولة.',
    highlight: 'عروض جديدة وخصومات طوال الأسبوع!',
  },
]
