'use client'

import React, { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Clock, Plus, Settings, BarChart3, Star, MoreVertical, ChevronDown, Users, Tag, Flag, Folder } from 'lucide-react'

export default function AiSeoCycles() {
  const t = useTranslations('ai_seo.cycles')
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState('labels')

  const features = [
    {
      icon: Clock,
      title: t('feature1_title'),
      description: t('feature1_desc')
    },
    {
      icon: Plus,
      title: t('feature2_title'),
      description: t('feature2_desc')
    },
    {
      icon: Settings,
      title: t('feature3_title'),
      description: t('feature3_desc')
    },
    {
      icon: BarChart3,
      title: t('feature4_title'),
      description: t('feature4_desc')
    }
  ]

  const labels = [
    { name: 'Bug', colorClass: 'bg-red-400', value: 85, percentage: 85 },
    { name: 'Quality', colorClass: 'bg-purple-400', value: 5, percentage: 100 },
    { name: 'Infrastructure', colorClass: 'bg-gray-400', value: 1, percentage: 74 }
  ]

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#030308] py-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Section */}
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/20" />
                </div>
                <h1 className="text-2xl font-bold text-white">{t('title_icon')}</h1>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('title')}
              </h2>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                {t('description')}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-gray-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Testimonial */}
            <div className="bg-[#0a0a0c] rounded-xl border border-white/10 p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                "{t('testimonial')}"
              </p>
              <div className="text-sm text-gray-500">{t('testimonial_author')}</div>
            </div>
          </div>

          {/* Right Section - Cycle Dashboard */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-[#0a0a0c] rounded-xl border border-white/10 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-400">{t('current_cycle')}</div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-gray-400 hover:text-yellow-400 cursor-pointer" />
                    <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{t('cycle_number')}</h3>
              </div>

              {/* Progress Section */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-4 cursor-pointer group">
                  <span className="text-sm font-medium text-white">{t('progress')}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>

                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-gray-400" />
                      <span className="text-sm text-gray-300">{t('scope')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white">284</span>
                      <span className="text-xs text-green-400">+24%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-yellow-400" />
                      <span className="text-sm text-gray-300">{t('started')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white">68</span>
                      <span className="text-xs text-red-400">-24%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-blue-400" />
                      <span className="text-sm text-gray-300">{t('completed')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white">193</span>
                      <span className="text-xs text-red-400">-68%</span>
                    </div>
                  </div>
                </div>

                {/* Graph */}
                <div className="h-32 bg-[#0f0f12] rounded-lg p-4 mb-6">
                  <svg viewBox="0 0 300 100" className="w-full h-full">
                    {/* Grid lines */}
                    <line x1="0" y1="50" x2="300" y2="50" stroke="#1f1f1f" strokeWidth="1" />
                    <line x1="0" y1="0" x2="0" y2="100" stroke="#1f1f1f" strokeWidth="1" />
                    <line x1="150" y1="0" x2="150" y2="100" stroke="#1f1f1f" strokeWidth="1" />
                    <line x1="300" y1="0" x2="300" y2="100" stroke="#1f1f1f" strokeWidth="1" />
                    
                    {/* Yellow line (Started) */}
                    <path
                      d="M 0,80 Q 50,40 100,30 T 200,25 T 300,20"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="2"
                    />
                    
                    {/* Blue area (Completed) */}
                    <path
                      d="M 0,100 L 0,70 Q 50,50 100,45 T 200,40 T 300,35 L 300,100 Z"
                      fill="#3b82f6"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M 0,70 Q 50,50 100,45 T 200,40 T 300,35"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                    <path
                      d="M 300,35 L 300,100"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      opacity="0.5"
                    />
                    
                    {/* Gray dotted line (Scope) */}
                    <path
                      d="M 0,20 Q 50,25 100,30 T 200,35 T 300,40"
                      fill="none"
                      stroke="#6b7280"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                  </svg>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Jul 15</span>
                    <span>Jul 22</span>
                    <span>Jul 29</span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-white/10">
                <div className="flex gap-0 px-6">
                  {[
                    { id: 'assignees', icon: Users, label: t('assignees') },
                    { id: 'labels', icon: Tag, label: t('labels') },
                    { id: 'priority', icon: Flag, label: t('priority') },
                    { id: 'projects', icon: Folder, label: t('projects') }
                  ].map((tab) => {
                    const IconComponent = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                          activeTab === tab.id
                            ? 'border-white text-white'
                            : 'border-transparent text-gray-400 hover:text-gray-300'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        {tab.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Labels Breakdown */}
              <div className="p-6">
                {labels.map((label, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${label.colorClass}`} />
                        <span className="text-sm font-medium text-white">{label.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">{label.percentage}%</span>
                        <span className="text-sm text-gray-500">of ▲ {label.value}</span>
                      </div>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${label.colorClass}`}
                        style={{ width: `${label.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

