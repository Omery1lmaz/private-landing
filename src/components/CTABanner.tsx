'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Rocket,
  ArrowRight,
  Sparkles,
  Target,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

export default function CTABanner() {
  const t = useTranslations('cta_banner_section')
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.4,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="cta-banner" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#030308]">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Ambient glow effects */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-teal-500/20 rounded-[40px] blur-[80px]" />

            {/* Card */}
            <div className="relative p-8 md:p-12 lg:p-16 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden">
              {/* Inner grid pattern */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(20,184,166,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '25px 25px',
                }}
              />

              {/* Animated border glow */}
              <div
                className="absolute inset-0 rounded-[32px] opacity-50"
                style={{
                  background: `linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(20,184,166,0.2) 50%, rgba(6,182,212,0.2) 100%)`,
                  animation: 'borderGlow 4s ease-in-out infinite alternate',
                }}
              />

              {/* Corner decorations */}
              <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-cyan-500/40 rounded-tl-lg" />
              <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-teal-500/40 rounded-tr-lg" />
              <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-cyan-500/40 rounded-bl-lg" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-teal-500/40 rounded-br-lg" />

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-8">
                  <Rocket className="w-4 h-4" />
                  <span>{t('badge')}</span>
                </div>

                {/* Title */}
                <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  {t('title_part1')}{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    {t('title_part2')}
                  </span>{' '}
                  {t('title_part3')}
                </h2>

                {/* Description */}
                <p ref={contentRef} className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                  {t('description_part1')}
                  <br className="hidden sm:block" />
                  {t('description_part2')}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      24/7
                    </div>
                    <div className="text-sm text-gray-500">{t('stat1_label')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      %95
                    </div>
                    <div className="text-sm text-gray-500">{t('stat2_label')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      ∞
                    </div>
                    <div className="text-sm text-gray-500">{t('stat3_label')}</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    ref={buttonRef}
                    onClick={scrollToContact}
                    className="group relative bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center gap-3">
                      <Target className="w-5 h-5" />
                      <span>{t('cta_button_consultation')}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      const services = document.getElementById('services')
                      services?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="group bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 font-medium px-6 py-4 rounded-2xl transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
                  >
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <span>{t('cta_button_explore_services')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      {t('trust_gdpr')}
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                      {t('trust_uptime')}
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                      {t('trust_support')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for border glow animation */}
      <style jsx>{`
        @keyframes borderGlow {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  )
}