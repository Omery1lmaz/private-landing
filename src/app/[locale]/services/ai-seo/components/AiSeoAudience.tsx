'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Users, Target, Eye, UserCheck, Building, ShoppingCart, X, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type StatCardProps = {
  icon: React.ReactNode
  label: string
  value: string
  color?: string
}

function StatCard({ icon, label, value, color = 'violet' }: StatCardProps) {
  const colorClasses = {
    cyan: 'border-cyan-500/20 hover:border-cyan-500/30 text-cyan-400',
    red: 'border-red-500/20 hover:border-red-500/30 text-red-400',
    green: 'border-green-500/20 hover:border-green-500/30 text-green-400',
    violet: 'border-violet-500/20 hover:border-violet-500/30 text-violet-400'
  }

  return (
    <div className={`rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm hover:bg-white/[0.06] ${colorClasses[color as keyof typeof colorClasses]} transition-all`}>
      <div className="flex items-center gap-2 mb-1 text-gray-400">
        {icon}
        <span className="text-xs uppercase tracking-wide text-gray-500">{label}</span>
      </div>
      <div className="text-xl font-bold text-white">{value}</div>
    </div>
  )
}

export default function AiSeoAudience() {
  const t = useTranslations('ai_seo')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.audience-header',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Main card animation
      gsap.fromTo(
        '.content-card',
        { opacity: 0, scale: 0.9, y: 80, rotationX: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.content-card',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // List items stagger with different directions
      gsap.fromTo(
        '.audience-list-item',
        { opacity: 0, x: (index) => (index % 2 === 0 ? -50 : 50), y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'back.out(1.3)',
          scrollTrigger: {
            trigger: '.content-card',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Closing message animation
      gsap.fromTo(
        '.audience-closing',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.audience-closing',
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Parallax glow
      gsap.to('.audience-glow', {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-[#030308] via-[#0a0a0f] to-[#030308] py-32">
      {/* Enhanced grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Subtle ambient glow */}
      <div className="audience-glow absolute top-1/3 right-0 w-[420px] h-[420px] bg-gradient-to-br from-violet-500/08 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title on top */}
        <div className="audience-header max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
            {t('audience.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
            {t('audience.subtitle')}
          </p>
        </div>

        {/* Single card with balanced two-column content */}
        <div className="max-w-6xl mx-auto">
          <div className="content-card rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 p-8 md:p-10 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column: suitable items */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">
                  {t('audience.suitable_title')}
                </h4>
                <div className="space-y-2">
                  {[t('audience.suitable1'), t('audience.suitable2'), t('audience.suitable3'), t('audience.suitable4')].map((item, index) => (
                    <div key={index} className="audience-list-item group flex items-start gap-3 p-4 rounded-lg bg-green-500/6 border border-green-500/12 hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-200 text-sm group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column: unsuitable items */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">
                  {t('audience.unsuitable_title')}
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {[t('audience.unsuitable1'), t('audience.unsuitable2'), t('audience.unsuitable3'), t('audience.unsuitable4')].map((item, index) => (
                    <div key={index} className="audience-list-item group flex items-start gap-3 p-4 rounded-lg bg-red-500/6 border border-red-500/12 hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-300">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <X className="w-4 h-4 text-red-400" />
                      </div>
                      <span className="text-gray-200 text-sm group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Psychological closing message */}
            <div className="audience-closing mt-10 pt-8 border-t border-white/10">
              <p className="text-center text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-violet-300 via-purple-300 to-violet-300 bg-clip-text text-transparent">
                {t('audience.lead')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


