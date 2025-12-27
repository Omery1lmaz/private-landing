'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'
import { Maximize2, Search } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function AISEOFeatures() {
  const t = useTranslations('ai_seo_features')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.from('.seo-module', {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          scale: 0.9,
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
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-black py-20 px-4 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Headline */}
        <div className="text-center mb-16">
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('headline')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Left: SEO Goal Setting */}
          <div className="seo-module">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12">
              {/* 3D Glass Ring */}
              <div className="flex items-center justify-center mb-6 h-48">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full border-8 border-purple-500/30 bg-purple-500/10 backdrop-blur-sm transform rotate-45" />
                  <div className="absolute inset-4 rounded-full border-4 border-purple-400/40 bg-purple-400/5 backdrop-blur-sm transform -rotate-45" />
                  <div className="absolute inset-8 rounded-full border-2 border-purple-300/50" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {t('goal_setting_title')}
              </h3>
              <p className="text-white/70">
                {t('goal_setting_desc')}
              </p>
            </div>
          </div>

          {/* Top Right: Site Overview Dashboard */}
          <div className="seo-module">
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 lg:p-8 overflow-hidden">
              {/* Overlay buttons */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Maximize2 className="w-4 h-4 text-white" />
                </button>
                <button className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Dashboard mockup */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">
                    {t('dashboard_title')}
                  </h4>
                  <p className="text-purple-400 text-sm">{t('dashboard_url')}</p>
                </div>

                <div className="flex gap-2 border-b border-white/10 pb-2">
                  <button className="text-white/60 text-sm hover:text-white">
                    {t('analytics_tab')}
                  </button>
                  <button className="text-white text-sm border-b-2 border-purple-500 pb-1">
                    {t('smart_keyword_tab')}
                  </button>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <div className="flex items-end gap-2 mb-4">
                    <div className="text-3xl font-bold text-white">
                      {t('visibility_metric')}
                    </div>
                    <div className="text-green-400 text-sm mb-2">
                      {t('visibility_change')}
                    </div>
                  </div>

                  {/* Graph */}
                  <div className="h-32 relative">
                    <svg className="w-full h-full" viewBox="0 0 300 120">
                      <defs>
                        <linearGradient id="graphGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <polyline
                        points="10,100 50,95 90,92 130,88 170,85 210,82 250,80 290,78"
                        fill="url(#graphGrad)"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                      />
                      <text x="10" y="115" fill="#8b5cf6" fontSize="10">Jun 18</text>
                      <text x="280" y="70" fill="#8b5cf6" fontSize="10">Visibility 9.8%</text>
                    </svg>
                  </div>

                  <p className="text-white/60 text-sm mt-4">
                    {t('dashboard_user_friendly')}
                  </p>
                  <p className="text-white/80 text-xs mt-1">
                    {t('dashboard_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left: Traffic Metrics */}
          <div className="seo-module">
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 lg:p-8">
              <div className="mb-6">
                <div className="text-5xl font-bold text-white mb-2">
                  {t('traffic_metric')}
                </div>
                <div className="text-white/70 text-sm mb-1">{t('traffic_label')}</div>
                <div className="text-green-400 text-sm">
                  {t('traffic_change')}
                </div>
              </div>

              {/* Traffic graph */}
              <div className="h-32">
                <svg className="w-full h-full" viewBox="0 0 300 120">
                  <defs>
                    <linearGradient id="trafficGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="10,100 50,90 90,85 130,80 170,75 210,70 250,65 290,60"
                    fill="url(#trafficGrad)"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                  />
                  <text x="10" y="115" fill="#8b5cf6" fontSize="10">50K</text>
                  <text x="10" y="30" fill="#8b5cf6" fontSize="10">100K</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Right: Smart Keyword Generation */}
          <div className="seo-module">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12">
              {/* 3D Glass Prism */}
              <div className="flex items-center justify-center mb-6 h-48">
                <div className="relative w-48 h-48 perspective-1000">
                  <div
                    className="absolute inset-0 transform rotate-45"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(139, 92, 246, 0.3) 100%)',
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
                      border: '2px solid rgba(139, 92, 246, 0.5)',
                    }}
                  />
                  <div
                    className="absolute inset-4 transform -rotate-45"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(139, 92, 246, 0.3) 100%)',
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
                      border: '1px solid rgba(168, 85, 247, 0.4)',
                    }}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {t('keyword_title')}
              </h3>
              <p className="text-white/70">
                {t('keyword_desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <button className="bg-purple-600/30 backdrop-blur-sm border border-purple-500/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-600/40 transition-colors flex items-center gap-2 mx-auto">
            {t('go_to_site')}
            <div className="text-xs text-white/70">{t('site_performance')}</div>
          </button>
        </div>
      </div>
    </section>
  )
}

