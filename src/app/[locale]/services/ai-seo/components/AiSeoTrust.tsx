'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { ShieldCheck, X, Lock, Eye, FileCheck, Award } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AiSeoTrust() {
  const t = useTranslations('ai_seo.trust')
  const sectionRef = useRef<HTMLElement>(null)

  const guarantees = [
    {
      icon: ShieldCheck,
      title: t('guarantee1'),
      description: 'Tam uyumlu ve güvenli SEO stratejileri'
    },
    {
      icon: Lock,
      title: t('guarantee2'),
      description: 'Google ve AI platformları ile tam entegrasyon'
    },
    {
      icon: Eye,
      title: t('guarantee3'),
      description: 'Şeffaf raporlama ve sürekli izleme'
    },
    {
      icon: Award,
      title: t('guarantee4'),
      description: 'Kara kutu yok, her şey açık ve net'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        '.trust-left-content',
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
        '.trust-feature-item',
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

      // Right visual animation
      gsap.fromTo(
        '.trust-visual',
        { opacity: 0, x: 50, scale: 0.9 },
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

      // Shield nodes animation
      gsap.fromTo(
        '.shield-node',
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.trust-visual',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-[#030308] to-[#0a0a0c] py-32">
      {/* Hexagon pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div className="trust-left-content space-y-8">
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
                {guarantees.map((guarantee, index) => {
                  const IconComponent = guarantee.icon
                  return (
                    <div key={index} className="trust-feature-item flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{guarantee.title}</h3>
                        <p className="text-sm text-gray-400">{guarantee.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Closing Statement */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400" />
                  <p className="text-xl font-semibold text-white">
                    {t('lead')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="trust-visual relative flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* Trust Badge Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Top Row */}
                  <div className="col-start-2 shield-node">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/20 backdrop-blur-sm">
                      <Lock className="w-10 h-10 text-blue-400" />
                    </div>
                  </div>

                  {/* Middle Row */}
                  <div className="col-start-1 shield-node">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-slate-500/20 to-blue-500/20 border border-slate-500/30 flex items-center justify-center shadow-lg shadow-slate-500/20 backdrop-blur-sm">
                      <Eye className="w-10 h-10 text-slate-400" />
                    </div>
                  </div>

                  {/* Center - Large Shield */}
                  <div className="col-start-2 row-start-2 shield-node">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-2 border-blue-500/30 flex items-center justify-center shadow-2xl shadow-blue-500/20 backdrop-blur-sm">
                      <ShieldCheck className="w-16 h-16 text-blue-400" />
                    </div>
                  </div>

                  <div className="col-start-3 shield-node">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 flex items-center justify-center shadow-lg shadow-indigo-500/20 backdrop-blur-sm">
                      <FileCheck className="w-10 h-10 text-indigo-400" />
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="col-start-2 shield-node">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/20 backdrop-blur-sm">
                      <Award className="w-10 h-10 text-blue-400" />
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
