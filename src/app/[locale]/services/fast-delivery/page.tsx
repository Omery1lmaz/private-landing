'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FastHero from './components/FastHero'
import FastProblem from './components/FastProblem'
import FastSolution from './components/FastSolution'
import FastTimeline from './components/FastTimeline'
import FastMethodology from './components/FastMethodology'
import FastCases from './components/FastCases'
import FastGuarantee from './components/FastGuarantee'
import FastCTA from './components/FastCTA'

export default function FastDeliveryPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#030308]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <FastHero />

        {/* Content Sections */}
        <div className="space-y-0">
          <FastProblem />
          <FastSolution />
          <FastTimeline />
          <FastMethodology />
          <FastCases />
          <FastGuarantee />
        </div>

        {/* Final CTA */}
        <FastCTA />

        <Footer />
      </div>
    </main>
  )
}
