'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'
import { Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Web3Infrastructure() {
  const t = useTranslations('web3_infrastructure')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.from('.web3-layer', {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.5,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black py-20 px-4 overflow-hidden"
    >
      {/* Top Banner */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 border-b border-white/10 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll text-white/60 text-xs font-mono py-3">
          <span className="inline-block">{t('banner_text')}</span>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 mt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Infrastructure Diagram */}
          <div className="space-y-8">
            <div className="text-xs text-white/50 mb-4">{t('diagram_title')}</div>

            {/* Layer 1: Client Layer */}
            <div className="web3-layer relative">
              <div className="text-xs text-white/50 mb-3">{t('layer1_title')}</div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-6">
                  {/* Smartwatch */}
                  <div className="relative">
                    <div className="w-12 h-16 bg-white/10 border border-white/20 rounded-lg">
                      <div className="w-full h-6 bg-white/20 rounded-t-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-white/40 rounded-full" />
                      </div>
                      <div className="p-1">
                        <div className="w-full h-8 bg-white/10 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Smartphone */}
                  <div className="relative">
                    <div className="w-10 h-16 bg-white/10 border border-white/20 rounded-lg">
                      <div className="w-full h-8 bg-white/10 rounded-t-lg" />
                      <div className="p-1">
                        <div className="w-full h-6 bg-white/20 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Tablet */}
                  <div className="relative">
                    <div className="w-16 h-12 bg-white/10 border border-white/20 rounded-lg">
                      <div className="p-2">
                        <div className="space-y-1">
                          <div className="h-1 bg-white/20 rounded w-full" />
                          <div className="h-1 bg-white/20 rounded w-3/4" />
                          <div className="h-1 bg-white/20 rounded w-5/6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 2: CON/EDGE Layer */}
            <div className="web3-layer relative">
              <div className="text-xs text-white/50 mb-3">{t('layer2_title')}</div>
              <div className="relative">
                {/* Connection line */}
                <div className="absolute left-1/2 top-0 w-px h-4 bg-white/20 transform -translate-x-1/2" />
                {/* Transparent slab */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-8 relative">
                  <div className="absolute inset-4 bg-white/5 rounded border border-white/10" />
                  {/* Lightning bolt in center */}
                  <div className="relative z-10 flex items-center justify-center">
                    <Zap className="w-16 h-16 text-yellow-400" fill="currentColor" />
                  </div>
                  {/* Corner connection points */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full" />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/30 rounded-full" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/30 rounded-full" />
                </div>
                {/* Connection line down */}
                <div className="absolute left-1/2 bottom-0 w-px h-4 bg-white/20 transform -translate-x-1/2" />
              </div>
            </div>

            {/* Layer 3: Web3 Service Layer */}
            <div className="web3-layer relative">
              <div className="text-xs text-white/50 mb-3">{t('layer3_title')}</div>
              <div className="relative">
                {/* Connection line */}
                <div className="absolute left-1/2 top-0 w-px h-4 bg-white/20 transform -translate-x-1/2" />
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  {/* Grid of service icons */}
                  <div className="grid grid-cols-6 gap-3">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square border border-white/20 rounded ${
                          i === 0 || i === 1 || i === 5
                            ? 'bg-yellow-400/30 border-yellow-400/50'
                            : i === 3
                            ? 'bg-green-400/30 border-green-400/50'
                            : 'bg-white/5'
                        }`}
                      >
                        {/* Icon placeholder */}
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white/30 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="web3-layer">
            <div className="text-xs text-white/50 mb-4">02</div>
            <h2 className="text-4xl font-bold text-white mb-8 uppercase">
              {t('benefits_title')}
            </h2>

            <div className="space-y-4">
              {[
                t('benefit1'),
                t('benefit2'),
                t('benefit3'),
                t('benefit4'),
                t('benefit5'),
                t('benefit6'),
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-1.5 h-4 bg-white transform rotate-45" />
                  </div>
                  <span className="text-white text-lg uppercase">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Connection line to diagram */}
            <div className="mt-8 relative">
              <svg className="w-full h-32" viewBox="0 0 200 120">
                <defs>
                  <marker
                    id="web3Arrow"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="white" opacity="0.3" />
                  </marker>
                </defs>
                <path
                  d="M 0 60 Q 50 40 100 60 Q 150 80 200 60"
                  stroke="white"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  fill="none"
                  opacity="0.3"
                  markerEnd="url(#web3Arrow)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

