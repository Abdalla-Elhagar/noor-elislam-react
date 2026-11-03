import {
  FaAppleWhole, FaArrowLeft, FaArrowUp, FaAward, FaBagShopping, FaBars, FaBolt,
  FaBorderAll, FaBoxOpen, FaCapsules, FaCartShopping, FaCheck, FaChevronLeft,
  FaChevronRight, FaCircleCheck, FaCircleExclamation, FaCircleInfo, FaClock,
  FaCrown, FaEnvelope, FaFacebookF, FaFaucetDrip, FaFilter, FaGift, FaHandshake,
  FaHeadset, FaInstagram, FaKitMedical, FaLayerGroup, FaLeaf, FaLocationDot, FaMagnifyingGlass,
  FaPhone, FaPlus, FaPumpSoap, FaShieldHeart, FaSink, FaSpa, FaStar, FaTags,
  FaToilet, FaToiletPaper, FaBath, FaTiktok, FaTrash, FaTruckFast,
  FaWandMagicSparkles, FaWhatsapp, FaXmark,
} from 'react-icons/fa6'

const icons = {
  all: FaBorderAll, apple: FaAppleWhole, arrow: FaArrowLeft, arrowUp: FaArrowUp,
  award: FaAward, bag: FaBagShopping, bars: FaBars, bolt: FaBolt, box: FaBoxOpen,
  faucet: FaFaucetDrip, bathroomAccessories: FaToiletPaper, toilet: FaToilet,
  sink: FaSink, basin: FaBath, filter: FaFilter,
  capsules: FaCapsules, cart: FaCartShopping, check: FaCheck,
  chevronLeft: FaChevronLeft, chevronRight: FaChevronRight,
  checkCircle: FaCircleCheck, alert: FaCircleExclamation, info: FaCircleInfo,
  clock: FaClock, close: FaXmark, crown: FaCrown, mail: FaEnvelope,
  facebook: FaFacebookF, gift: FaGift, handshake: FaHandshake, headset: FaHeadset,
  instagram: FaInstagram, medical: FaKitMedical, layers: FaLayerGroup, leaf: FaLeaf,
  pin: FaLocationDot, search: FaMagnifyingGlass, phone: FaPhone, plus: FaPlus,
  soap: FaPumpSoap, shield: FaShieldHeart, spa: FaSpa, star: FaStar, tags: FaTags,
  tiktok: FaTiktok, trash: FaTrash, truck: FaTruckFast, sparkles: FaWandMagicSparkles,
  whatsapp: FaWhatsapp,
}

export default function Icon({ name, className, ...rest }) {
  const Component = icons[name]
  if (!Component) return null
  return <Component className={className} aria-hidden="true" focusable="false" {...rest} />
}
