'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Brain, Search, Bot, MessageSquare, Zap, Github, RefreshCw, Link2 } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AiSeoSolutionCombined() {
  const t = useTranslations('ai_seo.solution_combined')
  const sectionRef = useRef<HTMLElement>(null)

  const features = [
    {
      icon: Search,
      title: 'AI Search Coverage',
      description: t('ai_search1')
    },
    {
      icon: Bot,
      title: 'AI Integration',
      description: t('ai_search2')
    },
    {
      icon: MessageSquare,
      title: 'Multi-Platform',
      description: t('ai_search3')
    },
    {
      icon: Zap,
      title: 'Voice Search',
      description: t('ai_search4')
    }
  ]

  const technicalFeatures = [
    {
      icon: Github,
      title: 'Entity SEO',
      description: t('technical1')
    },
    {
      icon: RefreshCw,
      title: 'AI-Readable Content',
      description: t('technical2')
    },
    {
      icon: Link2,
      title: 'Trust Score',
      description: t('technical3')
    },
    {
      icon: Brain,
      title: 'Structured Data',
      description: t('technical4')
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        '.solution-left-content',
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
        '.solution-feature-item',
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
        '.solution-visual',
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

      // Network nodes animation
      gsap.fromTo(
        '.network-node',
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.solution-visual',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Network lines animation
      gsap.fromTo(
        '.network-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.solution-visual',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#030308] py-28">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div className="solution-left-content space-y-8">
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
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={index} className="solution-feature-item flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-purple-400" />
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
            <div className="solution-visual relative flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* Floating Icon Cards */}
                <div className="relative h-[500px]">
                  {/* Central Card */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-2 border-purple-500/30 flex items-center justify-center shadow-2xl shadow-purple-500/20 backdrop-blur-sm">
                      <Brain className="w-16 h-16 text-purple-400" />
            </div>
          </div>

                  {/* Top Icon */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 network-node">
                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center shadow-xl shadow-cyan-500/20 backdrop-blur-sm">
                      <Search className="w-12 h-12 text-cyan-400" />
                </div>
              </div>

                  {/* Bottom Left Icon */}
                  <div className="absolute bottom-0 left-0 network-node">
                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center shadow-xl shadow-purple-500/20 backdrop-blur-sm">
                      <Bot className="w-12 h-12 text-purple-400" />
                    </div>
                    </div>

                  {/* Bottom Right Icon */}
                  <div className="absolute bottom-0 right-0 network-node">
                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center shadow-xl shadow-violet-500/20 backdrop-blur-sm">
                      <MessageSquare className="w-12 h-12 text-violet-400" />
                    </div>
                  </div>

                  {/* Connection Lines (CSS) */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/2 w-0.5 h-1/4 bg-gradient-to-b from-cyan-500/30 to-purple-500/30" />
                    <div className="absolute bottom-1/4 left-1/4 w-1/4 h-0.5 bg-gradient-to-r from-purple-500/30 to-purple-500/30" />
                    <div className="absolute bottom-1/4 right-1/4 w-1/4 h-0.5 bg-gradient-to-l from-violet-500/30 to-purple-500/30" />
                  </div>
                </div>
              </div>
                    </div>
                    </div>

              {/* Technical Features Section */}
              <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Visual */}
            <div className="solution-visual relative flex items-center justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-lg">
                {/* Icon Grid Layout */}
                <div className="grid grid-cols-3 gap-6">
                  {/* Top Row */}
                  <div className="col-start-2 network-node">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/20 backdrop-blur-sm">
                      <RefreshCw className="w-10 h-10 text-cyan-400" />
                    </div>
                  </div>

                  {/* Middle Row */}
                  <div className="col-start-1 network-node">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center shadow-lg shadow-purple-500/20 backdrop-blur-sm">
                      <Link2 className="w-10 h-10 text-purple-400" />
                  </div>
                </div>

                  {/* Center - Large */}
                  <div className="col-start-2 row-start-2 network-node">
                    <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border-2 border-violet-500/30 flex items-center justify-center shadow-2xl shadow-violet-500/20 backdrop-blur-sm">
                      <Github className="w-14 h-14 text-violet-400" />
                    </div>
                  </div>

                  <div className="col-start-3 network-node">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/20 backdrop-blur-sm">
                      <Brain className="w-10 h-10 text-blue-400" />
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="col-start-2 network-node">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/30 flex items-center justify-center shadow-lg shadow-purple-500/20 backdrop-blur-sm">
                      <Zap className="w-10 h-10 text-purple-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="solution-left-content space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                {t('technical_title')}
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                {t('statement')}
              </p>

              <div className="space-y-6 mt-10">
                {technicalFeatures.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={index} className="solution-feature-item flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-cyan-400" />
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
          </div>
          </div>
        </div>
    </section>
  )
}
