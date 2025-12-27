'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HRDepartment() {
  const t = useTranslations('hr_department')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.from('.hr-card', {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.6,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const cards = [
    {
      number: '01',
      title: t('card1_title'),
      type: 'chat',
    },
    {
      number: '02',
      title: t('card2_title'),
      type: 'metrics',
    },
    {
      number: '03',
      title: t('card3_title'),
      type: 'bubbles',
    },
    {
      number: '04',
      title: t('card4_title'),
      type: 'graph',
    },
    {
      number: '05',
      title: t('card5_title'),
      type: 'gauge',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 py-20 px-4 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Panel */}
          <div className="space-y-8">
            {/* Navigation dots */}
            <div className="flex flex-col gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full glow" />
              <div className="w-2 h-2 bg-purple-400 rounded-full glow" />
              <div className="w-2 h-2 bg-purple-400 rounded-full glow" />
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t('title')}
            </h1>
            <p className="text-xl text-white/90">{t('subtitle')}</p>
            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              {t('description')}
            </p>

            <div className="flex items-center gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center gap-2">
                {t('cta')}
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Panel - Cards Grid */}
          <div className="grid grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`hr-card bg-purple-900/30 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6 relative overflow-hidden ${
                  index === 2 ? 'col-span-3' : index === 3 || index === 4 ? 'col-span-1' : ''
                }`}
                style={{
                  gridColumn: index === 2 ? 'span 3' : index === 4 ? 'span 1' : 'span 1',
                  gridRow: index === 3 || index === 4 ? '2' : '1',
                }}
              >
                {/* Card number */}
                <div className="absolute top-4 left-4 text-purple-400/60 text-sm font-mono">
                  {card.number}
                </div>

                {/* Card content based on type */}
                <div className="mt-8 h-32 flex items-center justify-center">
                  {card.type === 'chat' && (
                    <div className="relative w-full h-full">
                      <div className="absolute bottom-2 left-0 w-20 h-16 bg-purple-500/40 rounded-2xl rounded-bl-sm" />
                      <div className="absolute bottom-8 left-6 w-16 h-12 bg-purple-600/50 rounded-xl rounded-bl-sm" />
                      <div className="absolute top-0 right-4 w-8 h-8 bg-purple-400 rounded-full" />
                    </div>
                  )}
                  {card.type === 'metrics' && (
                    <div className="w-full space-y-2">
                      <div className="text-purple-300 text-sm">2 years</div>
                      <div className="text-purple-300 text-sm">Bonuses</div>
                      <div className="flex gap-2">
                        <div className="h-4 w-8 bg-purple-500/50 rounded" />
                        <div className="h-4 w-6 bg-purple-600/50 rounded" />
                        <div className="h-4 w-10 bg-purple-500/50 rounded" />
                      </div>
                    </div>
                  )}
                  {card.type === 'bubbles' && (
                    <div className="relative w-full h-full">
                      <div className="absolute bottom-4 left-0 w-16 h-12 bg-purple-500/40 rounded-xl rounded-bl-sm" />
                      <div className="absolute bottom-8 left-4 w-14 h-10 bg-purple-600/50 rounded-lg rounded-bl-sm" />
                      <div className="absolute bottom-2 left-8 w-12 h-8 bg-purple-400/40 rounded-lg rounded-bl-sm" />
                    </div>
                  )}
                  {card.type === 'graph' && (
                    <div className="w-full h-full flex items-end justify-center gap-1">
                      {[20, 40, 30, 50, 45, 60, 55].map((height, i) => (
                        <div
                          key={i}
                          className="bg-purple-500 rounded-t"
                          style={{ width: '12px', height: `${height}%` }}
                        />
                      ))}
                    </div>
                  )}
                  {card.type === 'gauge' && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 border-4 border-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-purple-300">eNPS</span>
                        </div>
                        <div className="absolute -left-4 top-0 flex flex-col gap-1">
                          {[1, 1, 1].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-purple-500 rounded-full" />
                          ))}
                        </div>
                        <div className="absolute -right-4 top-0 flex flex-col gap-1">
                          <div className="w-3 h-3 bg-purple-500/50 rounded-full border border-purple-400" />
                          <div className="w-3 h-3 bg-purple-500 rounded-full" />
                          <div className="w-3 h-3 bg-purple-500/50 rounded-full border border-purple-400" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{card.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

