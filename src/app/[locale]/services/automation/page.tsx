'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AutomationHero from './components/AutomationHero'
import AutomationProblemSolution from './components/AutomationProblemSolution'
import AutomationWhatYouGet from './components/AutomationWhatYouGet'
import AutomationProcess from './components/AutomationProcess'
import AutomationProofOutcome from './components/AutomationProofOutcome'
import AutomationPricingTeaser from './components/AutomationPricingTeaser'
import AutomationContact from './components/AutomationContact'

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-[#020406] selection:bg-cyan-500/30 relative">
      <Navbar />

      {/* Global Scroll Progress */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 origin-left scale-x-0 animate-[scrollProgress_1s_linear_initial] [animation-timeline:scroll()]"
      />

      <AutomationHero />
      <AutomationProblemSolution />
      <AutomationWhatYouGet />
      <AutomationProcess />
      <AutomationProofOutcome />
      <AutomationPricingTeaser />
      <AutomationContact />

      <Footer />
    </main>
  )
}
