'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WebDevHero from './components/WebDevHero'
import WebDevProblemSolution from './components/WebDevProblemSolution'
import WebDevWhatYouGet from './components/WebDevWhatYouGet'
import WebDevProcess from './components/WebDevProcess'
import WebDevProofOutcome from './components/WebDevProofOutcome'
import WebDevPricingTeaser from './components/WebDevPricingTeaser'
import WebDevContact from './components/WebDevContact'

export default function WebDevPage() {
  return (
    <main className="min-h-screen bg-[#020406] selection:bg-cyan-500/30 relative">
      <Navbar />

      {/* Global Scroll Progress */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 origin-left scale-x-0 animate-[scrollProgress_1s_linear_initial] [animation-timeline:scroll()]"
      />

      <WebDevHero />
      <WebDevProblemSolution />
      <WebDevWhatYouGet />
      <WebDevProcess />
      <WebDevProofOutcome />
      <WebDevPricingTeaser />
      <WebDevContact />

      <Footer />
    </main>
  )
}
