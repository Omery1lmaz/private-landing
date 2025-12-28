'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { AlertCircle, BarChart3, TrendingUp, ArrowUp, Zap, Search } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevProblemSolution() {
  const t = useTranslations('web_dev.problem_solution')
  const sectionRef = useRef<HTMLElement>(null)
  const [animatedMetric, setAnimatedMetric] = useState(0)

  const solutions = [
    {
      icon: Zap,
      title: t('solution1_title'),
      description: t('solution1_desc'),
    },
    {
      icon: Search,
      title: t('solution2_title'),
      description: t('solution2_desc'),
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        '.problem-solution-title',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Left content animation
      gsap.fromTo(
        '.left-content',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
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
        '.metric-card',
        { opacity: 0, x: 30, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Solution items animation
      gsap.fromTo(
        '.solution-feature',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Animate metric number
      gsap.to(
        {},
        {
          duration: 2,
          ease: 'power2.out',
          onUpdate: function () {
            const progress = this.progress()
            setAnimatedMetric(Math.floor(parseInt(t('metric_value')) * progress))
          },
          scrollTrigger: {
            trigger: '.metric-card',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Animate bars
      gsap.fromTo(
        '.bar-chart-bar',
        { scaleY: 0, transformOrigin: 'bottom' },
        {
          scaleY: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.metric-card',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#030308] py-32">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 problem-solution-title">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 font-medium mb-6 backdrop-blur-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              {t('subtitle')}
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto italic">
              {t('lead')}
            </p>
          </div>

          {/* Two Column Layout - Resimdeki tasarım */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="left-content space-y-8">
              {/* Main heading with highlighted text */}
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {t('main_heading_part1')}{' '}
                  <span className="text-cyan-400">{t('main_heading_part2')}</span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t('main_description')}
                </p>
              </div>

              {/* Solution Features */}
              <div className="space-y-6">
                {solutions.map((solution, index) => {
                  const IconComponent = solution.icon
                  return (
                    <div
                      key={index}
                      className="solution-feature group"
                    >
                      <div className="flex items-start gap-4">
                        {/* Cyan square icon */}
                        <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-colors">
                          <IconComponent className="w-6 h-6 text-cyan-400" strokeWidth={2} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-50 transition-colors">
                            {solution.title}
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {solution.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Column - Metric Card */}
            <div className="metric-card relative">
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />

                <div className="relative z-10">
                  {/* Card Title */}
                  <h4 className="text-sm text-gray-400 mb-6 font-medium">
                    {t('metric_card_title')}
                  </h4>

                  {/* Main Metric */}
                  <div className="flex items-baseline gap-3 mb-8">
                    <div className="text-7xl font-bold text-white">
                      {animatedMetric}%
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-teal-500/20 border border-teal-500/30">
                      <ArrowUp className="w-4 h-4 text-teal-400" />
                      <span className="text-teal-400 font-semibold text-sm">{t('metric_change')}</span>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-400 mb-1">{t('metric1_label')}</div>
                      <div className="text-2xl font-bold text-cyan-400">{t('metric1_value')}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-400 mb-1">{t('metric2_label')}</div>
                      <div className="text-2xl font-bold text-teal-400">{t('metric2_value')}</div>
                    </div>
                  </div>

                  {/* Bar Chart */}
                  <div className="space-y-4">
                    <div className="text-xs text-gray-400 mb-4 font-medium uppercase tracking-wider">{t('chart_title')}</div>
                    
                    {/* Chart Container with Grid Background */}
                    <div className="relative p-4 rounded-xl bg-white/5 border border-white/10">
                      {/* Grid Lines */}
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: `
                          linear-gradient(to top, rgba(6,182,212,0.1) 1px, transparent 1px),
                          linear-gradient(to right, rgba(6,182,212,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '100% 25%',
                      }} />
                      
                      <div className="flex items-end gap-6 relative z-10" style={{ height: '140px' }}>
                        {/* Bar 1 - Cyan, tallest */}
                        <div className="flex-1 flex flex-col items-center gap-3 h-full group">
                          <div className="w-full h-full flex items-end relative">
                            {/* Percentage Label on Top */}
                            <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:-top-8">
                              <div className="px-2.5 py-1 rounded-md bg-gradient-to-r from-cyan-500/90 to-cyan-400/90 backdrop-blur-sm border border-cyan-400/50 shadow-lg shadow-cyan-500/30">
                                <span className="text-xs font-bold text-white">100%</span>
                              </div>
                            </div>
                            
                            {/* Bar with glow effect */}
                            <div className="relative w-full group-hover:scale-105 transition-transform duration-300">
                              <div 
                                className="bar-chart-bar w-full rounded-t-xl relative overflow-hidden"
                                style={{ height: '100%', minHeight: '24px' }}
                              >
                                {/* Main gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600 via-cyan-500 to-cyan-400" />
                                
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" 
                                  style={{ transform: 'translateX(-100%)', animation: 'shimmer 3s infinite' }} />
                                
                                {/* Glow */}
                                <div className="absolute -inset-1 bg-cyan-500/30 rounded-t-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Top highlight */}
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl" />
                              </div>
                              
                              {/* Shadow */}
                              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/40 to-transparent blur-xl -z-10 opacity-50" />
                            </div>
                          </div>
                          <span className="text-xs font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">{t('bar1_label')}</span>
                        </div>

                        {/* Bar 2 - Teal, medium */}
                        <div className="flex-1 flex flex-col items-center gap-3 h-full group">
                          <div className="w-full h-full flex items-end relative">
                            {/* Percentage Label on Top */}
                            <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:-top-8">
                              <div className="px-2.5 py-1 rounded-md bg-gradient-to-r from-teal-500/90 to-teal-400/90 backdrop-blur-sm border border-teal-400/50 shadow-lg shadow-teal-500/30">
                                <span className="text-xs font-bold text-white">75%</span>
                              </div>
                            </div>
                            
                            {/* Bar with glow effect */}
                            <div className="relative w-full group-hover:scale-105 transition-transform duration-300">
                              <div 
                                className="bar-chart-bar w-full rounded-t-xl relative overflow-hidden"
                                style={{ height: '75%', minHeight: '24px' }}
                              >
                                {/* Main gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-600 via-teal-500 to-teal-400" />
                                
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" 
                                  style={{ transform: 'translateX(-100%)', animation: 'shimmer 3s infinite', animationDelay: '0.5s' }} />
                                
                                {/* Glow */}
                                <div className="absolute -inset-1 bg-teal-500/30 rounded-t-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Top highlight */}
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl" />
                              </div>
                              
                              {/* Shadow */}
                              <div className="absolute inset-0 bg-gradient-to-t from-teal-500/40 to-transparent blur-xl -z-10 opacity-50" />
                            </div>
                          </div>
                          <span className="text-xs font-medium text-gray-300 group-hover:text-teal-400 transition-colors">{t('bar2_label')}</span>
                        </div>

                        {/* Bar 3 - Cyan lighter, shortest */}
                        <div className="flex-1 flex flex-col items-center gap-3 h-full group">
                          <div className="w-full h-full flex items-end relative">
                            {/* Percentage Label on Top */}
                            <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:-top-8">
                              <div className="px-2.5 py-1 rounded-md bg-gradient-to-r from-cyan-400/90 to-cyan-300/90 backdrop-blur-sm border border-cyan-300/50 shadow-lg shadow-cyan-400/30">
                                <span className="text-xs font-bold text-white">50%</span>
                              </div>
                            </div>
                            
                            {/* Bar with glow effect */}
                            <div className="relative w-full group-hover:scale-105 transition-transform duration-300">
                              <div 
                                className="bar-chart-bar w-full rounded-t-xl relative overflow-hidden"
                                style={{ height: '50%', minHeight: '24px' }}
                              >
                                {/* Main gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500 via-cyan-400 to-cyan-300" />
                                
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" 
                                  style={{ transform: 'translateX(-100%)', animation: 'shimmer 3s infinite', animationDelay: '1s' }} />
                                
                                {/* Glow */}
                                <div className="absolute -inset-1 bg-cyan-400/30 rounded-t-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Top highlight */}
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl" />
                              </div>
                              
                              {/* Shadow */}
                              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/40 to-transparent blur-xl -z-10 opacity-50" />
                            </div>
                          </div>
                          <span className="text-xs font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">{t('bar3_label')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

