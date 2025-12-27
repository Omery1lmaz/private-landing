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
import Templates from '@/components/Templates'
import EventWebsiteShowcase from '@/components/EventWebsiteShowcase'
import ProjectManagementShowcase from '@/components/ProjectManagementShowcase'
import CryptoTradingShowcase from '@/components/CryptoTradingShowcase'
import HRDepartment from '@/components/HRDepartment'
import UnifiedAISpace from '@/components/UnifiedAISpace'
import FinancialAdvantages from '@/components/FinancialAdvantages'
import SimpleClearUseful from '@/components/SimpleClearUseful'
import AISEOFeatures from '@/components/AISEOFeatures'
import PalantirFoundry from '@/components/PalantirFoundry'
import Web3Infrastructure from '@/components/Web3Infrastructure'

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
      <div id="templates">
        <Templates />
      </div>
      <EventWebsiteShowcase />
      <ProjectManagementShowcase />
      <CryptoTradingShowcase />
      <HRDepartment />
      <UnifiedAISpace />
      <FinancialAdvantages />
      <SimpleClearUseful />
      <AISEOFeatures />
      <PalantirFoundry />
      <Web3Infrastructure />
   {/*    <Testimonials /> */}
      <div id="contact">
        <Contact />
      </div>
      <CTABanner />
      <Footer />
    </main>
  )
}
