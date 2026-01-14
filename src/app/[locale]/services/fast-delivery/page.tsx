'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FastDeliveryHero from './components/FastDeliveryHero'
import FastDeliveryProblemSolution from './components/FastDeliveryProblemSolution'
import FastDeliveryWhatYouGet from './components/FastDeliveryWhatYouGet'
import FastDeliveryProcess from './components/FastDeliveryProcess'
import FastDeliveryProofOutcome from './components/FastDeliveryProofOutcome'
import FastDeliveryPricingTeaser from './components/FastDeliveryPricingTeaser'
import FastDeliveryContact from './components/FastDeliveryContact'

export default function FastDeliveryPage() {
  return (
    <main className="min-h-screen bg-[#020406] selection:bg-cyan-500/30 relative">
      <Navbar />

      {/* Global Scroll Progress */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 origin-left scale-x-0 animate-[scrollProgress_1s_linear_initial] [animation-timeline:scroll()]"
      />

      <FastDeliveryHero />
      <FastDeliveryProblemSolution />
      <FastDeliveryWhatYouGet />
      <FastDeliveryProcess />
      <FastDeliveryProofOutcome />
      <FastDeliveryPricingTeaser />
      <FastDeliveryContact />

      <Footer />
    </main>
  )
}
