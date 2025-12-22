'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { TrendingDown, DollarSign, AlertTriangle, Clock, FileText, BarChart3, ArrowUp, Star, MoreVertical, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AiSeoProblem() {
  const t = useTranslations('ai_seo.problem')
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState('tab_metrics')

  const problems = [
    {
      icon: TrendingDown,
      title: t('financial1'),
      description: t('problem1_desc')
    },
    {
      icon: DollarSign,
      title: t('financial2'),
      description: t('problem2_desc')
    },
    {
      icon: AlertTriangle,
      title: t('financial3'),
      description: t('problem3_desc')
    },
    {
      icon: BarChart3,
      title: t('metric1'),
      description: t('problem4_desc')
    }
  ]

  const metrics = [
    { label: t('metric_scope'), value: '40%', change: '+24%', color: 'bg-gray-500' },
    { label: t('metric_started'), value: '60%', change: '-24%', color: 'bg-yellow-500' },
    { label: t('metric_completed'), value: '20%', change: '-68%', color: 'bg-blue-500' }
  ]

  const breakdownItems = [
    { label: t('breakdown_traffic'), value: 85, total: 100, color: 'bg-red-500' },
    { label: t('breakdown_conversion'), value: 45, total: 100, color: 'bg-orange-500' },
    { label: t('breakdown_pipeline'), value: 30, total: 100, color: 'bg-yellow-500' }
  ]

  const tabs = [
    t('tab_metrics'),
    t('tab_breakdown'),
    t('tab_trends'),
    t('tab_details')
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Left side animations
      gsap.fromTo(
        '.problem-left-content',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Feature items stagger
      gsap.fromTo(
        '.problem-feature-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Right card animation
      gsap.fromTo(
        '.problem-dashboard-card',
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Graph animation
      gsap.fromTo(
        '.graph-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.problem-dashboard-card',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-[#030308] via-[#0a0a0c] to-[#030308] py-32">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Content */}
            <div className="problem-left-content space-y-8">
              {/* Small Title */}
              <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
                  <AlertTriangle className="w-3 h-3" />
                </div>
                <span>{t('badge')}</span>
              </div>

              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                {t('title')}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                {t('subtitle')}
              </p>

              {/* Features List */}
              <div className="space-y-6 mt-10">
                {problems.map((problem, index) => {
                  const IconComponent = problem.icon
                  return (
                    <div key={index} className="problem-feature-item flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{problem.title}</h3>
                        <p className="text-sm text-gray-400">{problem.description}</p>
                  </div>
                </div>
                  )
                })}
              </div>

              {/* Closing Statement */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-xl italic text-gray-300 leading-relaxed">
                  "{t('lead')}"
                </p>
                  </div>
                  </div>

            {/* Right Side - Dashboard Card */}
            <div className="problem-dashboard-card lg:sticky lg:top-24">
              <div className="relative rounded-2xl bg-[#0a0a0c] border border-white/10 p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{t('dashboard_period')}</div>
                    <h3 className="text-xl font-semibold text-white">{t('dashboard_title')}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                      <Star className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Progress Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-white">{t('progress_label')}</h4>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    {metrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded ${metric.color}`} />
                          <span className="text-sm text-gray-300">{metric.label}</span>
              </div>
                        <div className="flex items-center gap-2">
                          <ArrowUp className="w-3 h-3 text-gray-500" />
                          <span className="text-sm font-medium text-white">{metric.value}</span>
                          <span className={`text-xs ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {metric.change}
                          </span>
                </div>
              </div>
                    ))}
                  </div>
                </div>

                {/* Graph */}
                <div className="mb-6 h-32 relative">
                  <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Area */}
                    <path
                      d="M 0,60 Q 50,50 100,40 T 200,20 L 200,80 L 0,80 Z"
                      fill="url(#graphGradient)"
                      className="graph-line"
                      style={{ transformOrigin: 'left' }}
                    />
                    {/* Yellow line */}
                    <path
                      d="M 0,60 Q 50,50 100,40 T 200,20"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="2"
                      className="graph-line"
                      style={{ transformOrigin: 'left' }}
                    />
                    {/* Blue line */}
                    <path
                      d="M 0,70 Q 50,60 100,50 T 200,30"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="3,3"
                      className="graph-line"
                      style={{ transformOrigin: 'left' }}
                    />
                    {/* Gray line */}
                    <path
                      d="M 0,50 Q 50,45 100,35 T 200,15"
                      fill="none"
                      stroke="#6b7280"
                      strokeWidth="2"
                      className="graph-line"
                      style={{ transformOrigin: 'left' }}
                    />
                  </svg>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                    <span>{t('graph_date1')}</span>
                    <span>{t('graph_date2')}</span>
                    <span>{t('graph_date3')}</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 mb-6 border-b border-white/10">
                  {tabs.map((tab, index) => {
                    const tabKeys = ['tab_metrics', 'tab_breakdown', 'tab_trends', 'tab_details']
                    const tabKey = tabKeys[index]
                    return (
                      <button
                        key={tabKey}
                        onClick={() => setActiveTab(tabKey)}
                        className={`px-3 py-2 text-sm font-medium transition-colors ${
                          activeTab === tabKey
                            ? 'text-white border-b-2 border-white'
                            : 'text-gray-400 hover:text-gray-300'
                        }`}
                      >
                        {tab}
                      </button>
                    )
                  })}
                </div>

                {/* Breakdown */}
                <div className="space-y-4">
                  {breakdownItems.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-300">{item.label}</span>
                        <span className="text-sm font-medium text-white">
                          {item.value}% of ▲ {item.total}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} transition-all duration-1000`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
