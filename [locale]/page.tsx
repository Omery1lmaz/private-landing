import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ProofOfCapability from '@/components/ProofOfCapability'
import WhyWorkWithMe from '@/components/WhyWorkWithMe'
import HowWeReduceRisk from '@/components/HowWeReduceRisk'
import EngagementModels from '@/components/EngagementModels'
import Pricing from '@/components/Pricing'
import CasePatterns from '@/components/CasePatterns'
import AISEOPerformance from '@/components/AISEOPerformance'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import WhoIsNotFor from '@/components/WhoIsNotFor'
import Contact from '@/components/Contact'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import GlobeSection from '@/components/GlobeSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="infrastructure">
        <GlobeSection />
      </div>
      <div id="services">
        <Services />
      </div>
      <ProofOfCapability />
      <div id="why-us">
        <WhyWorkWithMe />
      </div>
      <HowWeReduceRisk />
      <EngagementModels />
      <div id="pricing">
        <Pricing />
      </div>
      <CasePatterns />
      <AISEOPerformance />
      <div id="portfolio">
        <Portfolio />
      </div>
      <Testimonials />
      <WhoIsNotFor />
      <div id="contact">
        <Contact />
      </div>
      <CTABanner />
      <Footer />
    </main>
  )
}
