'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileHero from './components/MobileHero'
import MobileProblemSolution from './components/MobileProblemSolution'
import MobileWhatYouGet from './components/MobileWhatYouGet'
import MobileProcess from './components/MobileProcess'
import MobileProofOutcome from './components/MobileProofOutcome'
import MobilePricingTeaser from './components/MobilePricingTeaser'
import MobileContact from './components/MobileContact'

export default function MobileAppPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#020408]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: rgba(6, 182, 212, 0.3);
          color: #fff;
        }
      `}</style>

      <div className="relative z-10">
        <Navbar />

        {/* 1. Hero Section */}
        <MobileHero />

        {/* 2. Problem & Solution */}
        <MobileProblemSolution />

        {/* 3. What You Get (Interactive) */}
        <MobileWhatYouGet />

        {/* 4. Process */}
        <MobileProcess />

        {/* 5. Proof & Outcomes */}
        <MobileProofOutcome />

        {/* 6. Pricing Teaser */}
        <MobilePricingTeaser />

        {/* 7. Final Contact */}
        <MobileContact />

        <Footer />
      </div>
    </main>
  )
}
