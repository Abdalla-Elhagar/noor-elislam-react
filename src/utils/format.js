export const formatPrice = (value, locale = 'en-US') =>
  `${Number(value).toLocaleString(locale)} ج.م`
