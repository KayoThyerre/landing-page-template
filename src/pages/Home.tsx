import AboutSection from '../components/AboutSection'
import CarouselSection from '../components/CarouselSection'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import NewsSection from '../components/NewsSection'
import StatsSection from '../components/StatsSection'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarouselSection />
      <AboutSection />
      <StatsSection />
      <NewsSection />
    </>
  )
}

export default Home
