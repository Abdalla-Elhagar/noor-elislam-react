import About from '../components/home/About'
import ContactBanner from '../components/home/ContactBanner'
import Features from '../components/home/Features'
import HeroSlider from '../components/home/HeroSlider'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Features />
      <About />
      <ContactBanner />
    </>
  )
}
