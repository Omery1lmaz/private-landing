'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Briefcase,
  Brain,
  TrendingUp,
  Settings,
  Smartphone,
  ArrowRight,
  ExternalLink,
  ShoppingCart,
  Zap,
  Users,
  BarChart3,
  Code2,
  Gauge,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

interface CaseStudy {
  id: number
  title: string
  client: string
  industry: string
  problem: string
  solution: string
  results: Array<{
    metric: string
    value: string
    icon: React.ReactNode
  }>
  technologies: string[]
  mainResult: string
  color: 'cyan' | 'teal'
  icon: React.ReactNode
}

export default function Portfolio() {
  const t = useTranslations('portfolio_section')
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "E-commerce Optimization",
      client: "Turkey's Leading Fashion Brand",
      industry: "Fashion & Textile",
      problem: "High cart abandonment rate (78%) was limiting revenue potential despite strong traffic.",
      solution: "Comprehensive UX/UI redesign, one-click checkout, personalized recommendations, mobile optimization, and payment gateway integration.",
      results: [
        { metric: "Conversion Rate", value: "+45%", icon: <TrendingUp className="w-5 h-5" /> },
        { metric: "Revenue Growth", value: "+220%", icon: <BarChart3 className="w-5 h-5" /> },
        { metric: "Cart Abandonment", value: "-45%", icon: <ShoppingCart className="w-5 h-5" /> },
        { metric: "Average Order Value", value: "+67%", icon: <Gauge className="w-5 h-5" /> },
      ],
      technologies: ["React", "Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
      mainResult: "+45% Conversion in 6 Months",
      color: "cyan",
      icon: <ShoppingCart className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Corporate Website Transformation",
      client: "B2B SaaS Enterprise",
      industry: "Software Development",
      problem: "Outdated website with poor performance (PageSpeed 32/100) impacted SEO rankings and user experience.",
      solution: "Complete redesign with modern Next.js stack, Core Web Vitals optimization, CDN integration, and advanced SEO implementation.",
      results: [
        { metric: "PageSpeed Score", value: "94/100", icon: <Zap className="w-5 h-5" /> },
        { metric: "Organic Traffic", value: "+120%", icon: <Users className="w-5 h-5" /> },
        { metric: "Load Time", value: "-78%", icon: <Gauge className="w-5 h-5" /> },
        { metric: "Bounce Rate", value: "-42%", icon: <BarChart3 className="w-5 h-5" /> },
      ],
      technologies: ["Next.js", "Tailwind CSS", "Vercel", "Headless CMS", "Analytics"],
      mainResult: "PageSpeed 94/100, +120% Organic Traffic",
      color: "teal",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "EdTech Mobile MVP Launch",
      client: "Education Technology Startup",
      industry: "Educational Technology",
      problem: "Web platform existed but required mobile presence to reach students on-the-go and increase engagement.",
      solution: "Cross-platform mobile app with React Native, real-time notifications, offline capabilities, Firebase backend integration.",
      results: [
        { metric: "Active Users", value: "5,000+", icon: <Users className="w-5 h-5" /> },
        { metric: "Daily Engagement", value: "+3.5 hours", icon: <BarChart3 className="w-5 h-5" /> },
        { metric: "App Rating", value: "4.8/5.0", icon: <Zap className="w-5 h-5" /> },
        { metric: "User Retention", value: "72%", icon: <TrendingUp className="w-5 h-5" /> },
      ],
      technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo"],
      mainResult: "5,000+ Active Users in 3 Months",
      color: "cyan",
      icon: <Smartphone className="w-6 h-6" />,
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      const cards = gsap.utils.toArray('.portfolio-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section id="portfolio" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#030308]">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Ambient glow effects */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20 md:mb-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-6">
                <Briefcase className="w-4 h-4" />
                <span>{t('badge')}</span>
              </div>
              <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                {t('title_part1')}{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  {t('title_part2')}
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {t('subtitle')}
              </p>
            </div>

            {/* Case Studies Grid */}
            <div ref={gridRef} className="grid md:grid-cols-3 gap-6 mb-16">
              {caseStudies.map((study, index) => {
                const isCyan = study.color === 'cyan'

                return (
                  <div
                    key={study.id}
                    className="portfolio-card group relative cursor-pointer"
                    onClick={() => {
                      setSelectedProject(study.id)
                      setShowModal(true)
                    }}
                  >
                    <div className="relative h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30 hover:from-white/[0.08] hover:to-white/[0.03] overflow-hidden group">
                      {/* Inner grid pattern */}
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: `
                            linear-gradient(${isCyan ? 'rgba(6,182,212,0.05)' : 'rgba(20,184,166,0.05)'} 1px, transparent 1px),
                            linear-gradient(90deg, ${isCyan ? 'rgba(6,182,212,0.05)' : 'rgba(20,184,166,0.05)'} 1px, transparent 1px)
                          `,
                          backgroundSize: '20px 20px',
                        }}
                      />

                      {/* Top accent line */}
                      <div
                        className={`absolute top-0 left-6 right-6 h-[2px] ${isCyan ? 'bg-gradient-to-r from-cyan-500 via-cyan-400 to-transparent' : 'bg-gradient-to-r from-teal-500 via-teal-400 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon & Number */}
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                              isCyan
                                ? 'bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20'
                                : 'bg-teal-500/10 border border-teal-500/20 group-hover:bg-teal-500/20'
                            }`}
                          >
                            {study.icon}
                          </div>
                          <div className={`text-3xl font-bold opacity-20 group-hover:opacity-40 transition-opacity ${
                            isCyan ? 'text-cyan-400' : 'text-teal-400'
                          }`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-50 transition-colors leading-tight">
                          {study.title}
                        </h3>

                        {/* Client */}
                        <p className={`text-sm font-medium mb-4 ${isCyan ? 'text-cyan-400/70' : 'text-teal-400/70'}`}>
                          {study.client}
                        </p>

                        {/* Main Result */}
                        <div className={`px-4 py-3 rounded-xl font-semibold text-sm mb-4 ${
                          isCyan
                            ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                            : 'bg-teal-500/10 border border-teal-500/20 text-teal-400'
                        }`}>
                          🎯 {study.mainResult}
                        </div>

                        {/* Problem & Solution Preview */}
                        <div className="flex-grow mb-4">
                          <p className="text-sm text-gray-400 line-clamp-2">
                            <span className="font-semibold text-gray-300">Problem:</span> {study.problem}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.technologies.slice(0, 2).map((tech, i) => (
                            <span
                              key={i}
                              className={`text-xs px-2 py-1 rounded-lg ${
                                isCyan
                                  ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300'
                                  : 'bg-teal-500/10 border border-teal-500/20 text-teal-300'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                          {study.technologies.length > 2 && (
                            <span className="text-xs px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-400">
                              +{study.technologies.length - 2}
                            </span>
                          )}
                        </div>

                        {/* Button */}
                        <div className={`flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 ${
                          isCyan ? 'text-cyan-400' : 'text-teal-400'
                        }`}>
                          <span className="text-sm font-medium">{t('project_details_button')}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <div className="inline-flex items-center gap-6 px-8 py-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm">
                <Briefcase className="w-6 h-6 text-cyan-400" />
                <span className="text-gray-300">{t('cta_text')}</span>
                <button
                  onClick={() => {
                    const contact = document.getElementById('contact')
                    contact?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-cyan-500/25"
                >
                  {t('cta_button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {showModal && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="p-8 md:p-12">
              {caseStudies.map((study) => {
                if (study.id !== selectedProject) return null

                const isCyan = study.color === 'cyan'

                return (
                  <div key={study.id}>
                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                            isCyan
                              ? 'bg-cyan-500/10 border border-cyan-500/20'
                              : 'bg-teal-500/10 border border-teal-500/20'
                          }`}
                        >
                          {study.icon}
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-1">{study.title}</h2>
                          <p className={`text-sm font-medium ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`}>
                            {study.client}
                          </p>
                        </div>
                      </div>
                      <p className={`text-sm font-medium px-3 py-1 rounded-full inline-block ${
                        isCyan
                          ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                          : 'bg-teal-500/10 border border-teal-500/20 text-teal-400'
                      }`}>
                        {study.industry}
                      </p>
                    </div>

                    {/* Problem & Solution */}
                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <span className={isCyan ? 'text-cyan-400' : 'text-teal-400'}>⚠️</span> Problem
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{study.problem}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <span className={isCyan ? 'text-cyan-400' : 'text-teal-400'}>✨</span> Solution
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span className={isCyan ? 'text-cyan-400' : 'text-teal-400'}>📊</span> Results
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, i) => (
                          <div
                            key={i}
                            className={`p-4 rounded-xl border ${
                              isCyan
                                ? 'bg-cyan-500/5 border-cyan-500/20'
                                : 'bg-teal-500/5 border-teal-500/20'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className={isCyan ? 'text-cyan-400' : 'text-teal-400'}>
                                {result.icon}
                              </div>
                              <p className="text-sm text-gray-400">{result.metric}</p>
                            </div>
                            <p className={`text-2xl font-bold ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`}>
                              {result.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span className={isCyan ? 'text-cyan-400' : 'text-teal-400'}>⚙️</span> Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {study.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-4 py-2 rounded-lg font-medium text-sm ${
                              isCyan
                                ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300'
                                : 'bg-teal-500/10 border border-teal-500/20 text-teal-300'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Case Study Availability Notice */}
                    <div className={`p-4 rounded-xl border ${
                      isCyan
                        ? 'bg-cyan-500/5 border-cyan-500/20'
                        : 'bg-teal-500/5 border-teal-500/20'
                    }`}>
                      <p className="text-gray-300 text-sm text-center">
                        📋 <span className="font-semibold">Detailed case study coming soon!</span> We're preparing comprehensive documentation with screenshots and deeper insights.
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex gap-4">
                      <button
                        onClick={() => {
                          setShowModal(false)
                          setTimeout(() => {
                            const contact = document.getElementById('contact')
                            contact?.scrollIntoView({ behavior: 'smooth' })
                          }, 300)
                        }}
                        className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                          isCyan
                            ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white shadow-cyan-500/25'
                            : 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white shadow-teal-500/25'
                        } shadow-lg`}
                      >
                        Get Similar Results
                      </button>
                      <button
                        onClick={() => setShowModal(false)}
                        className="flex-1 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
