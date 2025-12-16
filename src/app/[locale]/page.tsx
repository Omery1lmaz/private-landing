'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyWorkWithMe from '@/components/WhyWorkWithMe'
import Pricing from '@/components/Pricing'
import AISEOPerformance from '@/components/AISEOPerformance'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
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
      <div id="why-us">
        <WhyWorkWithMe />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <AISEOPerformance />
      <div id="portfolio">
        <Portfolio />
      </div>
      <Testimonials />
      <div id="contact">
        <Contact />
      </div>
      <CTABanner />
      <Footer />
    </main>
  )
}
