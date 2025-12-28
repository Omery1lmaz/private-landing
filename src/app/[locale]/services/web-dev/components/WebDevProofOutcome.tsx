'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { TrendingUp, Zap, Target, BarChart3, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface OutcomeCardProps {
  icon: React.ElementType
  metric: string
  label: string
  color: string
  iconColor: string
}

function OutcomeCard({ icon: Icon, metric, label, color, iconColor }: OutcomeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, cardRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={cardRef} className="group relative">
      <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30 hover:from-white/[0.08] hover:to-white/[0.03] overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Animated border glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at top left, rgba(6, 182, 212, 0.06) 0%, transparent 60%)`
          }}
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-6 flex items-center justify-between">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg shadow-cyan-500/20">
              <Icon className={`w-8 h-8 ${iconColor}`} />
            </div>
          </div>

          {/* Metric */}
          <div className="mb-4">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {metric}
            </div>
          </div>

          {/* Label */}
          <p className="text-gray-300 text-base font-medium leading-relaxed group-hover:text-white transition-colors">
            {label}
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute top-6 right-6 text-3xl font-bold opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none text-cyan-400">
          ✓
        </div>
      </div>
    </div>
  )
}

export default function WebDevProofOutcome() {
  const t = useTranslations('web_dev.proof_outcome')
  const sectionRef = useRef<HTMLElement>(null)

  const outcomes = [
    {
      icon: TrendingUp,
      metric: t('outcome1_metric'),
      label: t('outcome1_label'),
      color: 'from-cyan-500/20 to-teal-500/20',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Zap,
      metric: t('outcome2_metric'),
      label: t('outcome2_label'),
      color: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400',
    },
    {
      icon: Target,
      metric: t('outcome3_metric'),
      label: t('outcome3_label'),
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: BarChart3,
      metric: t('outcome4_metric'),
      label: t('outcome4_label'),
      color: 'from-cyan-500/20 to-teal-500/20',
      iconColor: 'text-cyan-400',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        '.proof-outcome-title',
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
          <div className="text-center mb-20 proof-outcome-title">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Outcomes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <OutcomeCard key={index} {...outcome} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

