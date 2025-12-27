'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileHero from './components/MobileHero'
import MobileProblem from './components/MobileProblem'
import MobileSolution from './components/MobileSolution'
import MobileTechStack from './components/MobileTechStack'
import MobileProcess from './components/MobileProcess'
import MobileFeatures from './components/MobileFeatures'
import MobileShowcase from './components/MobileShowcase'
import MobileCTA from './components/MobileCTA'

gsap.registerPlugin(ScrollTrigger)

export default function MobileAppPage() {
  const mainRef = useRef<HTMLElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background elements
      const bgElements = backgroundRef.current?.querySelectorAll('.parallax-bg-element')
      
      bgElements?.forEach((element, index) => {
        gsap.to(element, {
          y: (index + 1) * 100,
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      })

      // Parallax grid pattern
      if (gridRef.current) {
        gsap.to(gridRef.current, {
          backgroundPosition: '0% 100%',
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
          },
        })
      }
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="min-h-screen relative overflow-hidden bg-[#0a0a0f]">
      {/* Parallax Background */}
      <div ref={backgroundRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f]" />
        
        {/* Parallax background orbs */}
        <div className="parallax-bg-element absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="parallax-bg-element absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-teal-500/8 rounded-full blur-3xl" />
        <div className="parallax-bg-element absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl" />

        {/* Parallax Grid Pattern */}
        <div
          ref={gridRef}
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <MobileHero />

        {/* Content Sections */}
        <div className="space-y-0">
          <MobileProblem />
          <MobileSolution />
          <MobileTechStack />
          <MobileProcess />
          <MobileFeatures />
          <MobileShowcase />
        </div>

        {/* Final CTA */}
        <MobileCTA />

        <Footer />
      </div>
    </main>
  )
}
