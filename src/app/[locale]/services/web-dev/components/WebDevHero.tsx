'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Code, Zap, Rocket, Globe, ArrowRight, Layers, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevHero() {
  const t = useTranslations('web_dev.hero')
  const locale = useLocale()
  const rootRef = useRef<HTMLDivElement | null>(null)
  const visualRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const badgeRef = useRef<HTMLDivElement | null>(null)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
      )

      // Text entrance timeline with stagger
      const tl = gsap.timeline()
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, clipPath: 'inset(0 0 100% 0)' },
        { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1, ease: 'power3.out' }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.2)' },
          '-=0.5'
        )

      // Visual entrance with rotation
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { opacity: 0, x: 60, rotate: -5, scale: 0.9 },
          { opacity: 1, x: 0, rotate: 0, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
        )
      }

      // Floating icons stagger
      gsap.fromTo(
        '.floating-icon',
        { opacity: 0, y: 30, scale: 0.5, rotation: -180 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          delay: 0.8,
        }
      )

      // Background parallax movement
      if (gridRef.current) {
        gsap.to(gridRef.current, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }

      // Continuous floating animation for central box
      gsap.to('.central-box', {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'sine.inOut',
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <header ref={rootRef} className="bg-gradient-to-b min-h-screen from-[#030308] via-[#030308] to-[#030308] py-20 relative overflow-hidden">
      {/* Enhanced Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-cyan-500/25 rounded-full blur-[180px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Animated background grid with motion */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px),linear-gradient(90deg, rgba(6, 182, 212, 0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
            style={{
              left: `${25 + i * 25}%`,
              animation: `pulse 4s ease-in-out infinite`,
              animationDelay: `${i * 1.3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
            {/* Left: Content */}
            <div className="space-y-8 pt-8 max-w-3xl">
              {/* Premium Badge */}
              <div ref={badgeRef} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 text-sm text-cyan-400 font-medium backdrop-blur-sm shadow-lg shadow-cyan-500/20">
                <Sparkles className="w-4 h-4" />
                <span>Premium Web Development</span>
              </div>

              {/* Main Title with gradient */}
              <div>
                <h1
                  ref={titleRef}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
                >
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                    {t('title')}
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-10"
              >
                {t('subtitle')}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {[
                  { text: 'PageSpeed 90+', color: 'cyan' },
                  { text: 'SEO-First', color: 'teal' },
                  { text: 'Scalable', color: 'cyan' },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-gray-300 hover:border-cyan-500/30 hover:text-cyan-400 transition-all"
                  >
                    {feature.text}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="group relative bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-10 py-5 rounded-xl text-lg md:text-xl transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t('cta_primary')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => {
                    const processSection = document.querySelector('.web-dev-process')
                    processSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group relative bg-white/5 border-2 border-white/10 text-white hover:bg-white/10 hover:border-cyan-500/40 font-medium px-8 py-5 rounded-xl text-lg transition-all duration-300 flex items-center gap-2 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  {t('cta_secondary')}
                  <Layers className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: Enhanced Visual */}
            <div className="relative w-full flex items-center justify-center py-8">
              <div ref={visualRef} className="relative w-full max-w-lg aspect-square">
                {/* Enhanced Orbital Rings with glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="absolute w-full h-full rounded-full border-2 border-cyan-500/20 animate-spin"
                    style={{ animationDuration: '40s' }}
                  />
                  <div
                    className="absolute w-4/5 h-4/5 rounded-full border-2 border-teal-500/25 animate-spin"
                    style={{ animationDuration: '25s', animationDirection: 'reverse' }}
                  />
                  <div
                    className="absolute w-3/5 h-3/5 rounded-full border-2 border-cyan-500/30 animate-spin"
                    style={{ animationDuration: '18s' }}
                  />
                  {/* Glow rings */}
                  <div className="absolute w-full h-full rounded-full bg-cyan-500/5 blur-2xl" />
                  <div className="absolute w-4/5 h-4/5 rounded-full bg-teal-500/5 blur-xl" />
                </div>

                {/* Enhanced Central Gradient Box */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="central-box relative w-48 h-48 md:w-56 md:h-56 rounded-3xl transition-all duration-700 bg-gradient-to-br from-cyan-600 via-teal-500 to-cyan-500 p-1 shadow-2xl shadow-cyan-500/30">
                    <div className="w-full h-full rounded-3xl bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 flex items-center justify-center p-8 backdrop-blur-sm">
                      <div className="w-full h-full">
                        <WebDevIcon />
                      </div>
                    </div>
                    {/* Animated border glow */}
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-500 opacity-50 blur-xl animate-pulse" />
                  </div>

                  {/* Enhanced Glow Effect */}
                  <div
                    className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full blur-3xl opacity-40 transition-all duration-700"
                    style={{ backgroundColor: '#06b6d4' }}
                  />
                </div>

                {/* Enhanced Floating icons with better animations */}
                {[
                  { id: 'code', Icon: Code, angle: -Math.PI / 6, radius: 160, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
                  { id: 'speed', Icon: Zap, angle: Math.PI / 3, radius: 190, color: 'text-teal-400', bg: 'bg-teal-500/20' },
                  { id: 'rocket', Icon: Rocket, angle: -(2 * Math.PI) / 3, radius: 200, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
                  { id: 'globe', Icon: Globe, angle: (2 * Math.PI) / 3, radius: 240, color: 'text-teal-400', bg: 'bg-teal-500/20' },
                ].map((item) => {
                  const x = Math.cos(item.angle) * item.radius
                  const y = Math.sin(item.angle) * item.radius

                  return (
                    <div
                      key={item.id}
                      className="floating-icon absolute left-1/2 top-1/2 transition-all duration-300 cursor-default group"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center border-2 border-white/20 bg-gradient-to-br from-black/80 to-black/60 hover:scale-125 hover:border-cyan-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm">
                        <item.Icon className={`${item.color} w-6 h-6 md:w-7 md:h-7`} strokeWidth={2} />
                        <div className={`absolute inset-0 rounded-xl ${item.bg} opacity-0 group-hover:opacity-100 blur-md transition-opacity`} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const WebDevIcon = () => {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="webDevGradHero" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="20" y="20" width="60" height="60" rx="6" stroke="url(#webDevGradHero)" strokeWidth="2.5" fill="none" opacity="0.6" filter="url(#glow)" />
      <rect x="28" y="28" width="44" height="44" rx="4" fill="url(#webDevGradHero)" opacity="0.2" />
      <line x1="35" y1="42" x2="65" y2="42" stroke="url(#webDevGradHero)" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
      <line x1="35" y1="52" x2="58" y2="52" stroke="url(#webDevGradHero)" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
      <line x1="35" y1="62" x2="65" y2="62" stroke="url(#webDevGradHero)" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
      <circle cx="50" cy="25" r="4" fill="#06b6d4" filter="url(#glow)" />
      <circle cx="62" cy="25" r="4" fill="#14b8a6" filter="url(#glow)" />
      <circle cx="74" cy="25" r="4" fill="#06b6d4" filter="url(#glow)" />
    </svg>
  )
}
