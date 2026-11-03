// توحيد الحروف العربية عشان البحث يلاقي (أ/إ/آ = ا) و(ة = ه) و(ى = ي)
export function normalizeArabic(value = '') {
  return value
    .toLowerCase()
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .trim()
}
