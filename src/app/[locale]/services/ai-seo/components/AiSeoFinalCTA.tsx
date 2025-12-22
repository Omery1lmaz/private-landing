'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AiSeoFinalCTA() {
  const t = useTranslations('ai_seo.final')
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

      // Guarantees stagger
      gsap.fromTo(
        '.cta-guarantee',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Button pulse animation
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
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Card */}
          <div ref={cardRef} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-400 mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Ready to Transform</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight">
                {t('title')}
              </h2>

              <button
                onClick={scrollToContact}
                className="cta-button group relative bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-400 hover:to-purple-400 text-white font-semibold px-10 py-5 rounded-2xl text-xl transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-1 inline-flex items-center gap-3 mb-8"
              >
                <span>{t('cta')}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-8">
                <span className="cta-guarantee flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {t('guarantee1')}
                </span>
                <span className="cta-guarantee flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {t('guarantee2')}
                </span>
                <span className="cta-guarantee flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {t('guarantee3')}
                </span>
              </div>

              {/* Closing Statement */}
              <p className="text-lg text-gray-500 italic font-medium">
                {t('closing')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


