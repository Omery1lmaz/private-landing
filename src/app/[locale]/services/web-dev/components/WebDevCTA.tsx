'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevCTA() {
  const t = useTranslations('web_dev.cta')
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // CTA button pulse animation
      gsap.to('.cta-button', {
        scale: 1.02,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-[#030308]">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Card - Ana sayfa tarzı */}
          <div ref={cardRef} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Ready to Start?</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                    {t('title')}
                  </span>
                </h2>

                <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Let's build a web product that scales with your business and delivers exceptional user experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <button
                    onClick={scrollToContact}
                    className="cta-button group relative bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-10 py-5 rounded-2xl text-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 inline-flex items-center gap-3"
                  >
                    <span>{t('button')}</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Secondary link */}
                  <Link
                    href={`/${locale}/#contact`}
                    className="text-cyan-400 hover:text-cyan-300 text-lg font-medium transition-colors inline-flex items-center gap-2 px-6 py-3 rounded-xl hover:bg-white/5"
                  >
                    {t('link')}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Fast Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Transparent Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
