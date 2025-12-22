'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AiSeoHero from './components/AiSeoHero'
import AiSeoAudience from './components/AiSeoAudience'
import AiSeoProblem from './components/AiSeoProblem'
import AiSeoSolutionCombined from './components/AiSeoSolutionCombined'
import AiSeoGrowth from './components/AiSeoGrowth'
import AiSeoFeatures from './components/AiSeoFeatures'
import AiSeoTrust from './components/AiSeoTrust'
import AiSeoMeasurement from './components/AiSeoMeasurement'
import AiSeoFinalCTA from './components/AiSeoFinalCTA'

export default function AISeoPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#030308]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <AiSeoHero />

        {/* Content Sections */}
        <div className="space-y-0">
        {/*   <AiSeoAudience /> */}
          <AiSeoProblem />
          <AiSeoSolutionCombined />
          <AiSeoGrowth />
          <AiSeoFeatures />
          <AiSeoTrust />
          <AiSeoMeasurement />
        </div>

        {/* Final CTA */}
        <AiSeoFinalCTA />

        <Footer />
      </div>
    </main>
  )
}


