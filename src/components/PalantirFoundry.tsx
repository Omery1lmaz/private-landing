   'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

export default function PalantirFoundry() {
  const t = useTranslations('palantir_foundry')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.from('.foundry-layer', {
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
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {t('title')}
            </h2>
            <p className="text-xl text-white/70">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left: Foundry Stack */}
          <div className="lg:col-span-2 space-y-6">
            {/* Layer 1: Decision Orchestration */}
            <div className="foundry-layer relative">
              <div className="text-xs text-white/50 mb-2">{t('layer1_title')}</div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                {/* Monitor + flow diagram representation */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded w-16 h-12 border border-white/20 flex items-center justify-center">
                    <div className="w-12 h-8 bg-white/20 rounded flex flex-col gap-1 p-1">
                      <div className="h-1 bg-white/40 rounded" />
                      <div className="h-1 bg-white/40 rounded w-2/3" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-2 mb-2">
                      <div className="bg-white/10 rounded px-2 py-1 text-xs text-white/70 border border-white/20">
                        Option 1
                      </div>
                      <div className="bg-white/10 rounded px-2 py-1 text-xs text-white/70 border border-white/20">
                        Option 2
                      </div>
                    </div>
                    {/* Flow diagram */}
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border border-white/30 rounded" />
                      <div className="h-px w-8 bg-white/20" />
                      <div className="w-4 h-4 border border-white/30 rounded" />
                      <div className="h-px w-8 bg-white/20" />
                      <div className="w-4 h-4 border border-white/30 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 2: Modular Workflows */}
            <div className="foundry-layer relative">
              <div className="text-xs text-white/50 mb-2">{t('layer2_title')}</div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                {/* Grid of modules */}
                <div className="grid grid-cols-8 gap-2">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square border border-white/20 rounded ${
                        i % 3 === 0 ? 'bg-white/10' : 'bg-white/5'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Layer 3: Dynamic Ontology */}
            <div className="foundry-layer relative">
              <div className="text-xs text-white/50 mb-2">{t('layer3_title')}</div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-6">
                  {/* Gear icon */}
                  <div className="relative">
                    <svg className="w-16 h-16 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                    </svg>
                  </div>
                  {/* Robotic arm + data points */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-1 bg-white/20" />
                      <div className="w-8 h-8 border border-white/30 rounded-full" />
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-white/20 rounded-full" />
                        <div className="w-3 h-3 bg-white/40 rounded-full" />
                        <div className="w-3 h-3 bg-white/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 4: Model Integration */}
            <div className="foundry-layer relative">
              <div className="text-xs text-white/50 mb-2">{t('layer4_title')}</div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                {/* Dense grid of blocks */}
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square border border-white/20 ${
                        i % 4 === 0 ? 'bg-white/10' : 'bg-white/5'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div className="relative h-32">
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 120">
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="white" opacity="0.5" />
                  </marker>
                </defs>
                {/* Curved arrow 1 */}
                <path
                  d="M 50 60 Q 100 20 150 40 Q 200 60 250 40"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.5"
                  markerEnd="url(#arrowhead)"
                />
                {/* Curved arrow 2 */}
                <path
                  d="M 50 80 Q 150 100 250 80"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.5"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
            </div>
          </div>

          {/* Right: External Systems */}
          <div className="space-y-8">
            {/* Data Platform */}
            <div className="foundry-layer">
              <div className="text-xs text-white/50 mb-4">{t('data_platform_title')}</div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                {/* Grid representation */}
                <div className="grid grid-cols-6 gap-1 mb-6">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-white/10 border border-white/20" />
                  ))}
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <p>→ AWS</p>
                  <p>→ AZURE</p>
                  <p>→ SNOWFLAKE</p>
                  <p>→ GOOGLE CLOUD</p>
                </div>
              </div>
            </div>

            {/* Operational Systems */}
            <div className="foundry-layer">
              <div className="text-xs text-white/50 mb-4">{t('operational_systems_title')}</div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                {/* 3D cubes representation */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-white/10 border border-white/20 transform rotate-12"
                      style={{
                        transform: `rotate(${i % 2 === 0 ? '12deg' : '-12deg'})`,
                      }}
                    />
                  ))}
                </div>
                <div className="space-y-2 text-xs text-white/70">
                  <p>→ S3</p>
                  <p>→ IBM</p>
                  <p>→ ESRI</p>
                  <p>→ SAP</p>
                  <p>→ KAFKA</p>
                  <p>→ ORACLE</p>
                  <p>→ OSISOFT</p>
                  <p>→ HADOOP</p>
                  <p>→ SALESFORCE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

