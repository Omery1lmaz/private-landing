 'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Sparkles, Zap, Target, TrendingUp, Shield, Rocket, BarChart3, Globe } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AiSeoFeatures() {
  const t = useTranslations('ai_seo.features')
  const sectionRef = useRef<HTMLElement>(null)

  const features = [
    {
      icon: Sparkles,
      title: t('feature1_title') || 'AI-Powered Optimization',
      description: t('feature1_desc') || 'Advanced AI algorithms optimize your content for search engines and AI assistants',
      color: 'from-purple-500/20 to-violet-500/20',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
      shadowColor: 'shadow-purple-500/20'
    },
    {
      icon: Zap,
      title: t('feature2_title') || 'Lightning Fast Results',
      description: t('feature2_desc') || 'See measurable improvements in search rankings within weeks, not months',
      color: 'from-yellow-500/20 to-orange-500/20',
      borderColor: 'border-yellow-500/30',
      iconColor: 'text-yellow-400',
      shadowColor: 'shadow-yellow-500/20'
    },
    {
      icon: Target,
      title: t('feature3_title') || 'Precision Targeting',
      description: t('feature3_desc') || 'Target high-intent keywords that convert visitors into customers',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400',
      shadowColor: 'shadow-blue-500/20'
    },
    {
      icon: TrendingUp,
      title: t('feature4_title') || 'Continuous Growth',
      description: t('feature4_desc') || 'Sustained organic traffic growth with data-driven optimization strategies',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      iconColor: 'text-green-400',
      shadowColor: 'shadow-green-500/20'
    },
    {
      icon: Shield,
      title: t('feature5_title') || 'Enterprise Security',
      description: t('feature5_desc') || 'White-hat SEO practices that protect your brand reputation',
      color: 'from-indigo-500/20 to-blue-500/20',
      borderColor: 'border-indigo-500/30',
      iconColor: 'text-indigo-400',
      shadowColor: 'shadow-indigo-500/20'
    },
    {
      icon: Rocket,
      title: t('feature6_title') || 'Scalable Infrastructure',
      description: t('feature6_desc') || 'Built to scale with your business as you grow and expand',
      color: 'from-pink-500/20 to-rose-500/20',
      borderColor: 'border-pink-500/30',
      iconColor: 'text-pink-400',
      shadowColor: 'shadow-pink-500/20'
    }
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        '.features-left-content',
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

      // Feature cards stagger animation
      gsap.fromTo(
        '.feature-card',
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Right visual animation
      gsap.fromTo(
        '.features-visual',
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

      // Icon nodes animation
      gsap.fromTo(
        '.feature-icon-node',
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.features-visual',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#030308] py-36">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-radial-gradient from-purple-900/10 via-transparent to-transparent" style={{
        background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
      }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div className="features-left-content space-y-8">
              {/* Main Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                {t('title') || 'Powerful Features for Modern SEO'}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                {t('subtitle') || 'Everything you need to dominate search results and drive organic growth'}
              </p>

              {/* Features List */}
              <div className="space-y-4 mt-10">
                {features.slice(0, 3).map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={index} className="feature-card flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-white/[0.02] to-white/[0.01] border border-white/5 hover:border-white/10 transition-all">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} border ${feature.borderColor} flex items-center justify-center flex-shrink-0 shadow-lg ${feature.shadowColor}`}>
                        <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
        </div>
        <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                        <p className="text-sm text-gray-400">{feature.description}</p>
        </div>
      </div>
                  )
                })}
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="features-visual relative flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* Icon Grid Layout */}
                <div className="grid grid-cols-3 gap-6">
                  {/* Top Row */}
                  <div className="col-start-2 feature-icon-node">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 border-2 border-purple-500/30 flex items-center justify-center shadow-2xl shadow-purple-500/20 backdrop-blur-sm group hover:scale-110 transition-transform">
                      <Sparkles className="w-12 h-12 text-purple-400 group-hover:rotate-12 transition-transform" />
                    </div>
                  </div>

                  {/* Middle Row */}
                  <div className="col-start-1 feature-icon-node">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center shadow-xl shadow-yellow-500/20 backdrop-blur-sm group hover:scale-110 transition-transform">
                      <Zap className="w-10 h-10 text-yellow-400 group-hover:rotate-12 transition-transform" />
                    </div>
                  </div>

                  {/* Center - Large */}
                  <div className="col-start-2 row-start-2 feature-icon-node">
                    <div className="w-36 h-36 rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-blue-500/20 border-2 border-blue-500/30 flex items-center justify-center shadow-2xl shadow-blue-500/30 backdrop-blur-sm group hover:scale-110 transition-transform">
                      <Rocket className="w-16 h-16 text-blue-400 group-hover:rotate-12 transition-transform" />
                    </div>
                  </div>

                  <div className="col-start-3 feature-icon-node">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center shadow-xl shadow-green-500/20 backdrop-blur-sm group hover:scale-110 transition-transform">
                      <TrendingUp className="w-10 h-10 text-green-400 group-hover:rotate-12 transition-transform" />
                    </div>
              </div>

                  {/* Bottom Row */}
                  <div className="col-start-1 feature-icon-node">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 flex items-center justify-center shadow-xl shadow-indigo-500/20 backdrop-blur-sm group hover:scale-110 transition-transform">
                      <Shield className="w-10 h-10 text-indigo-400 group-hover:rotate-12 transition-transform" />
                    </div>
                  </div>

                  <div className="col-start-2 feature-icon-node">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 flex items-center justify-center shadow-xl shadow-pink-500/20 backdrop-blur-sm group hover:scale-110 transition-transform">
                      <Target className="w-10 h-10 text-pink-400 group-hover:rotate-12 transition-transform" />
                    </div>
                  </div>

                  <div className="col-start-3 feature-icon-node">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center shadow-xl shadow-cyan-500/20 backdrop-blur-sm group hover:scale-110 transition-transform">
                      <BarChart3 className="w-10 h-10 text-cyan-400 group-hover:rotate-12 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features Grid */}
          <div className="mt-32 grid md:grid-cols-3 gap-8">
            {features.slice(3).map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="feature-card group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden backdrop-blur-sm"
                >
                  {/* Animated gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon with animated background */}
                    <div className="mb-6">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} border-2 ${feature.borderColor} flex items-center justify-center shadow-2xl ${feature.shadowColor} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <IconComponent className={`w-8 h-8 ${feature.iconColor} relative z-10`} />
                        {/* Pulsing effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-50 group-hover:animate-ping`} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
                    <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>

                    {/* Decorative line */}
                    <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.color.replace('/20', '/60')} transition-all duration-500 rounded-full`} />
              </div>
            </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
