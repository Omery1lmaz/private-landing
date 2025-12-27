'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'
import { Plus, Minus } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function UnifiedAISpace() {
  const t = useTranslations('unified_ai_space')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.from('.ai-node', {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          scale: 0.8,
          stagger: 0.05,
          duration: 0.4,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const leftColumn = [
    { name: t('chatgpt'), version: t('chatgpt_version'), logo: 'green', hasMinus: false },
    { name: t('claude'), version: '', logo: 'orange', hasMinus: false },
    { name: t('gemini'), version: '', logo: 'blue', hasMinus: false },
    { name: t('midjourney'), version: '', logo: 'white', hasMinus: false },
    { name: t('dalle'), version: '', logo: 'green', hasMinus: false },
  ]

  const rightColumn = [
    { name: t('deepl'), version: '', logo: 'blue', hasMinus: false, inDev: false },
    { name: t('heygen'), version: t('in_development'), logo: 'white', hasMinus: true, inDev: true },
    { name: t('deepgram'), version: t('in_development'), logo: 'white', hasMinus: false, inDev: true },
    { name: t('elevenlabs'), version: t('in_development'), logo: 'white', hasMinus: false, inDev: true },
    { name: t('ai'), version: t('in_development'), logo: 'white', hasMinus: false, inDev: true },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black py-20 px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          {t('title')}
        </h2>

        <div className="relative flex items-center justify-between min-h-[600px]">
          {/* Left Column */}
          <div className="flex flex-col gap-4 z-20">
            {leftColumn.map((tool, index) => (
              <div
                key={index}
                className="ai-node bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 w-64 relative group hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Logo placeholder */}
                    <div
                      className={`w-8 h-8 rounded ${
                        tool.logo === 'green'
                          ? 'bg-green-500/30'
                          : tool.logo === 'orange'
                          ? 'bg-orange-500/30'
                          : tool.logo === 'blue'
                          ? 'bg-blue-500/30'
                          : 'bg-white/20'
                      }`}
                    />
                    <div>
                      <p className="text-white font-medium">{tool.name}</p>
                      {tool.version && (
                        <p className="text-white/60 text-xs">{tool.version}</p>
                      )}
                    </div>
                  </div>
                  <button className="w-6 h-6 rounded border border-white/20 flex items-center justify-center hover:bg-white/10">
                    {tool.hasMinus ? (
                      <Minus className="w-3 h-3 text-white" />
                    ) : (
                      <Plus className="w-3 h-3 text-white" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Central Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="relative">
              {/* Glowing circle */}
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.6)]">
                <span className="text-4xl font-bold text-white">a</span>
              </div>
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: '800px', height: '600px', left: '-400px', top: '-300px' }}>
                {/* Lines to left column */}
                {leftColumn.map((_, index) => {
                  const angle = (index - 2) * 15 - 90
                  const x1 = 400
                  const y1 = 300
                  const x2 = 400 - 250
                  const y2 = 300 + (index - 2) * 80
                  return (
                    <line
                      key={`left-${index}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(139, 92, 246, 0.4)"
                      strokeWidth="1"
                    />
                  )
                })}
                {/* Lines to right column */}
                {rightColumn.map((_, index) => {
                  const x1 = 400
                  const y1 = 300
                  const x2 = 400 + 250
                  const y2 = 300 + (index - 2) * 80
                  return (
                    <line
                      key={`right-${index}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(139, 92, 246, 0.4)"
                      strokeWidth="1"
                    />
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 z-20">
            {rightColumn.map((tool, index) => (
              <div
                key={index}
                className="ai-node bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 w-64 relative group hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Logo placeholder */}
                    <div
                      className={`w-8 h-8 rounded ${
                        tool.logo === 'blue' ? 'bg-blue-500/30' : 'bg-white/20'
                      }`}
                    />
                    <div>
                      <p className="text-white font-medium">{tool.name}</p>
                      {tool.version && (
                        <p className="text-white/60 text-xs">{tool.version}</p>
                      )}
                    </div>
                  </div>
                  <button className="w-6 h-6 rounded border border-white/20 flex items-center justify-center hover:bg-white/10">
                    {tool.hasMinus ? (
                      <Minus className="w-3 h-3 text-white" />
                    ) : (
                      <Plus className="w-3 h-3 text-white" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

