'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { ArrowRight, Rocket, Timer } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FastCTA() {
  const t = useTranslations('fast_delivery.cta')
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative bg-gradient-to-b from-[#030308] to-[#050510]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="cta-content relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-teal-500/20 rounded-3xl blur-2xl -z-10" />

            <div className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 mb-6 shadow-lg shadow-cyan-500/30">
                <Rocket className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {t('title')}
              </h2>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                {t('subtitle')}
              </p>

              {/* Urgency Elements */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                  <Timer className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-medium">{t('urgency')}</span>
                </div>
              </div>

              {/* Primary CTA */}
              <button
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-10 py-5 rounded-xl text-lg md:text-xl transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('button')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


