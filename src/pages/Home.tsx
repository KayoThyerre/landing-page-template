import AboutSection from '../components/AboutSection'
import CarouselSection from '../components/CarouselSection'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarouselSection />
      <AboutSection />
    </>
  )
}

export default Home
