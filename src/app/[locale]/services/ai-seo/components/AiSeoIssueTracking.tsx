'use client'

import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Zap, Keyboard, Square, Settings, CheckCircle, Play, Tag } from 'lucide-react'

export default function AiSeoIssueTracking() {
  const t = useTranslations('ai_seo.issue_tracking')
  const sectionRef = useRef<HTMLElement>(null)

  const features = [
    { icon: Zap, text: t('feature1') },
    { icon: Keyboard, text: t('feature2') },
    { icon: Square, text: t('feature3') },
    { icon: Settings, text: t('feature4') }
  ]

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#030308] py-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            {/* Left Section */}
            <div className="space-y-8">
              {/* Small Heading */}
              <div className="text-sm text-gray-400 font-medium">
                {t('small_title')}
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('title')}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-400 leading-relaxed">
                {t('description')}
              </p>

              {/* Features List */}
              <ul className="space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 flex items-center justify-center text-gray-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-gray-300">{feature.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Right Section - Kanban Board */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-[#0a0a0c] rounded-xl border border-white/10 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Todo Column */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-400">Todo</span>
                      <span className="text-xs text-gray-500">71</span>
                    </div>
                    <div className="space-y-3">
                      {/* Card 1 */}
                      <div className="bg-[#0f0f12] rounded-lg border border-white/5 p-3 hover:border-white/10 transition-colors">
                        <div className="text-sm font-medium text-white mb-2">
                          SEO-944 Remove UI inconsistencies
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30">
                            Mobile
                          </span>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-[#0f0f12] rounded-lg border border-white/5 p-3 hover:border-white/10 transition-colors">
                        <div className="text-sm font-medium text-white mb-2">
                          SEO-207 TypeError: Cannot read properties
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-xs bg-red-500/20 text-red-400 border border-red-500/30">
                            Bug
                          </span>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-[#0f0f12] rounded-lg border border-white/5 p-3 hover:border-white/10 transition-colors">
                        <div className="text-sm font-medium text-white mb-2">
                          SEO-926 Upgrade to GPT-4o
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-xs bg-purple-500/20 text-purple-400 border border-purple-500/30">
                            Assistant
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* In Progress Column */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Play className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-400">In Progress</span>
                      <span className="text-xs text-gray-500">102</span>
                    </div>
                    <div className="space-y-3">
                      {/* Card 1 */}
                      <div className="bg-[#0f0f12] rounded-lg border border-white/5 p-3 hover:border-white/10 transition-colors">
                        <div className="text-sm font-medium text-white mb-2">
                          SEO-902 Remove contentData from GraphQL API
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2 py-0.5 rounded text-xs bg-green-500/20 text-green-400 border border-green-500/30">
                            Performance
                          </span>
                          <span className="px-2 py-0.5 rounded text-xs bg-gray-500/20 text-gray-400 border border-gray-500/30">
                            #28782
                          </span>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-[#0f0f12] rounded-lg border border-white/5 p-3 hover:border-white/10 transition-colors">
                        <div className="text-sm font-medium text-white mb-2">
                          SEO-402 Design landing page assets
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2 py-0.5 rounded text-xs bg-pink-500/20 text-pink-400 border border-pink-500/30">
                            Design
                          </span>
                          <span className="px-2 py-0.5 rounded text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                            Marketing
                          </span>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-[#0f0f12] rounded-lg border border-white/5 p-3 hover:border-white/10 transition-colors">
                        <div className="text-sm font-medium text-white mb-2">
                          SEO-838 Client preview functionality is broken
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2 py-0.5 rounded text-xs bg-red-500/20 text-red-400 border border-red-500/30">
                            Bug
                          </span>
                          <span className="px-2 py-0.5 rounded text-xs bg-gray-500/20 text-gray-400 border border-gray-500/30">
                            #25412
                          </span>
                        </div>
                      </div>

                      {/* Card 4 */}
                      <div className="bg-[#0f0f12] rounded-lg border border-white/5 p-3 hover:border-white/10 transition-colors">
                        <div className="text-sm font-medium text-white mb-2">
                          SEO-873 Optimize load times
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-xs bg-green-500/20 text-green-400 border border-green-500/30">
                            Performance
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Statistics */}
            <div className="space-y-6">
              <p className="text-lg text-gray-400">
                {t('statistics_text')}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl font-bold text-white mb-2">2x</div>
                  <div className="text-sm text-gray-400">{t('stat1')}</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-2">1.6x</div>
                  <div className="text-sm text-gray-400">{t('stat2')}</div>
                </div>
              </div>
            </div>

            {/* Right - Testimonial */}
            <div className="bg-[#0a0a0c] rounded-xl border border-white/10 p-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-300 italic leading-relaxed">
                  "{t('testimonial_quote')}"
                </p>
                <div>
                  <div className="text-sm font-medium text-white mb-1">{t('testimonial_author')}</div>
                  <div className="text-xs text-gray-500">{t('testimonial_role')}</div>
                </div>
                {/* Logo placeholder */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="text-sm font-semibold text-gray-400">{t('testimonial_company')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



