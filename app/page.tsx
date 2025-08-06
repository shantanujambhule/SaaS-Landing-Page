// import BackgroundVideo from './components/BackgroundVideo'
import BackgroundVideo from './components/BackgroundVideo'
import ContactForm from './components/Contact'
// import CoverAnimator from './components/CoverAnimator'
import FAQ from './components/FAQ'
import Features from './components/Features'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavBar from './components/Navbar'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <>
    <BackgroundVideo />
    <NavBar/>
     <HeroSection />
      {/* <CoverAnimator /> */}

      <main className="relative z-30">
       <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactForm/>
        <Footer/>
        
      </main>
      </>
  )
}
