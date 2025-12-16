'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import { useTranslations } from 'next-intl'

interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  features: string[]
  value: string
  gradient: string
  accentColor: string
}

const AIIcon = () => {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="30" stroke="url(#aiGrad)" strokeWidth="2" fill="none" opacity="0.3" />
      <circle cx="40" cy="40" r="20" stroke="url(#aiGrad)" strokeWidth="2" fill="none" opacity="0.5" />
      <circle cx="40" cy="40" r="10" fill="url(#aiGrad)" opacity="0.8" />
      <path d="M40 15 L40 25 M40 55 L40 65 M15 40 L25 40 M55 40 L65 40" stroke="url(#aiGrad)" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 22 L30 30 M50 50 L58 58 M22 58 L30 50 M50 30 L58 22" stroke="url(#aiGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <circle cx="40" cy="25" r="3" fill="#a855f7" />
      <circle cx="40" cy="55" r="3" fill="#a855f7" />
      <circle cx="25" cy="40" r="3" fill="#a855f7" />
      <circle cx="55" cy="40" r="3" fill="#a855f7" />
    </svg>
  )
}

function WebIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect x="12" y="18" width="56" height="44" rx="4" stroke="url(#webGrad)" strokeWidth="2" fill="none" />
      <line x1="12" y1="28" x2="68" y2="28" stroke="url(#webGrad)" strokeWidth="2" />
      <circle cx="18" cy="23" r="2" fill="#ef4444" />
      <circle cx="24" cy="23" r="2" fill="#fbbf24" />
      <circle cx="30" cy="23" r="2" fill="#22c55e" />
      <rect x="18" y="34" width="20" height="3" rx="1" fill="url(#webGrad)" opacity="0.6" />
      <rect x="18" y="40" width="44" height="2" rx="1" fill="url(#webGrad)" opacity="0.3" />
      <rect x="18" y="45" width="38" height="2" rx="1" fill="url(#webGrad)" opacity="0.3" />
      <rect x="18" y="50" width="30" height="2" rx="1" fill="url(#webGrad)" opacity="0.3" />
      <path d="M50 34 L62 34 L62 55 L50 55 Z" stroke="url(#webGrad)" strokeWidth="1.5" fill="url(#webGrad)" fillOpacity="0.2" rx="2" />
    </svg>
  )
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="mobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect x="24" y="10" width="32" height="60" rx="6" stroke="url(#mobileGrad)" strokeWidth="2" fill="none" />
      <rect x="36" y="14" width="8" height="3" rx="1.5" fill="url(#mobileGrad)" opacity="0.5" />
      <circle cx="40" cy="64" r="4" stroke="url(#mobileGrad)" strokeWidth="1.5" fill="none" />
      <rect x="28" y="22" width="24" height="36" rx="2" fill="url(#mobileGrad)" fillOpacity="0.1" />
      <path d="M32 30 L48 30" stroke="url(#mobileGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M32 36 L44 36" stroke="url(#mobileGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <rect x="32" y="42" width="16" height="12" rx="2" stroke="url(#mobileGrad)" strokeWidth="1.5" fill="url(#mobileGrad)" fillOpacity="0.2" />
    </svg>
  )
}

function AutomationIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="autoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="25" stroke="url(#autoGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
      <path d="M40 20 L40 40 L55 50" stroke="url(#autoGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="40" r="4" fill="url(#autoGrad)" />
      <circle cx="20" cy="25" r="6" stroke="url(#autoGrad)" strokeWidth="1.5" fill="none" />
      <circle cx="60" cy="25" r="6" stroke="url(#autoGrad)" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="55" r="6" stroke="url(#autoGrad)" strokeWidth="1.5" fill="none" />
      <circle cx="60" cy="55" r="6" stroke="url(#autoGrad)" strokeWidth="1.5" fill="none" />
      <line x1="25" y1="28" x2="35" y2="35" stroke="url(#autoGrad)" strokeWidth="1.5" opacity="0.5" />
      <line x1="55" y1="28" x2="45" y2="35" stroke="url(#autoGrad)" strokeWidth="1.5" opacity="0.5" />
      <line x1="25" y1="52" x2="35" y2="45" stroke="url(#autoGrad)" strokeWidth="1.5" opacity="0.5" />
      <line x1="55" y1="52" x2="45" y2="45" stroke="url(#autoGrad)" strokeWidth="1.5" opacity="0.5" />
    </svg>
  )
}

function FastDeliveryIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="fastDeliveryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <path d="M20 40 L30 30 L50 30 L60 40 L50 50 L30 50 Z" stroke="url(#fastDeliveryGrad)" strokeWidth="2" fill="url(#fastDeliveryGrad)" fillOpacity="0.1" />
      <path d="M30 30 L40 20 L50 30" stroke="url(#fastDeliveryGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 20 L40 60" stroke="url(#fastDeliveryGrad)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="60" r="5" fill="url(#fastDeliveryGrad)" />
      <path d="M40 50 L40 60" stroke="url(#fastDeliveryGrad)" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 40 L10 40 L10 50 L20 50" stroke="url(#fastDeliveryGrad)" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 40 L70 40 L70 50 L60 50" stroke="url(#fastDeliveryGrad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Services() {
  const t = useTranslations('services_section')
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])
  const progressRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section
      const totalScrollHeight = services.length * 100 // vh per service

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${totalScrollHeight}%`,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress
          setScrollProgress(progress)
          
          // Calculate which tab should be active based on scroll progress
          const newActiveTab = Math.min(
            Math.floor(progress * services.length),
            services.length - 1
          )
          
          if (newActiveTab !== activeTab) {
            setActiveTab(newActiveTab)
          }
        },
      })

      // Initial animations
      gsap.fromTo(
        '.services-title',
        { opacity: 0, y: 60 },
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

      gsap.fromTo(
        '.services-subtitle',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Track previous tab for animations
  const prevTabRef = useRef(activeTab)

  // Animate content when active tab changes
  useEffect(() => {
    const prevTab = prevTabRef.current
    const prevContent = contentRefs.current[prevTab]
    const currentContent = contentRefs.current[activeTab]

    // Hide previous content
    if (prevContent && prevTab !== activeTab) {
      gsap.to(prevContent, {
        opacity: 0,
        x: -30,
        duration: 0.3,
        ease: 'power2.in',
      })
    }

    // Show current content
    if (currentContent) {
      gsap.fromTo(
        currentContent,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5, delay: 0.2, ease: 'power3.out' }
      )
    }

    // Update previous tab reference
    prevTabRef.current = activeTab

    // Animate tab indicators
    gsap.to('.tab-indicator', {
      scaleX: 0,
      duration: 0.3,
    })
    gsap.to(`.tab-indicator-${activeTab}`, {
      scaleX: 1,
      duration: 0.5,
      ease: 'power2.out',
    })
  }, [activeTab])

  const services: Service[] = [
    {
      id: 'ai-seo',
      title: t('ai_seo_title'),
      subtitle: t('ai_seo_subtitle'),
      description: t('ai_seo_description'),
      icon: <AIIcon />,
      features: [
        t('ai_seo_feature1'),
        t('ai_seo_feature2'),
        t('ai_seo_feature3'),
        t('ai_seo_feature4'),
        t('ai_seo_feature5'),
      ],
      value: t('value_proposition_ai_seo'),
      gradient: 'from-violet-600 via-purple-500 to-fuchsia-500',
      accentColor: '#a855f7',
    },
    {
      id: 'web-dev',
      title: t('web_dev_title'),
      subtitle: t('web_dev_subtitle'),
      description: t('web_dev_description'),
      icon: <WebIcon />,
      features: [
        t('web_dev_feature1'),
        t('web_dev_feature2'),
        t('web_dev_feature3'),
        t('web_dev_feature4'),
        t('web_dev_feature5'),
      ],
      value: t('value_proposition_web_dev'),
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      accentColor: '#06b6d4',
    },
    {
      id: 'mobile',
      title: t('mobile_dev_title'),
      subtitle: t('mobile_dev_subtitle'),
      description: t('mobile_dev_description'),
      icon: <MobileIcon />,
      features: [
        t('mobile_dev_feature1'),
        t('mobile_dev_feature2'),
        t('mobile_dev_feature3'),
        t('mobile_dev_feature4'),
        t('mobile_dev_feature5'),
      ],
      value: t('value_proposition_mobile_dev'),
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      accentColor: '#14b8a6',
    },
    {
      id: 'automation',
      title: t('automation_title'),
      subtitle: t('automation_subtitle'),
      description: t('automation_description'),
      icon: <AutomationIcon />,
      features: [
        t('automation_feature1'),
        t('automation_feature2'),
        t('automation_feature3'),
        t('automation_feature4'),
        t('automation_feature5'),
      ],
      value: t('value_proposition_automation'),
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      accentColor: '#f59e0b',
    },
    {
      id: 'fast-delivery',
      title: t('fast_delivery_title'),
      subtitle: t('fast_delivery_subtitle'),
      description: t('fast_delivery_description'),
      icon: <FastDeliveryIcon />,
      features: [
        t('fast_delivery_feature1'),
        t('fast_delivery_feature2'),
        t('fast_delivery_feature3'),
        t('fast_delivery_feature4'),
        t('fast_delivery_feature5'),
      ],
      value: t('value_proposition_fast_delivery'),
      gradient: 'from-red-500 via-orange-500 to-yellow-500',
      accentColor: '#f97316',
    },
  ]

  return (
    <div ref={containerRef}>
      <section
        ref={sectionRef}
        className="relative min-h-screen bg-black overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="relative z-10 h-screen flex">
          {/* Left Sidebar - Vertical Navigation */}
          <div ref={tabsRef} className="hidden lg:flex flex-col justify-center w-24 xl:w-28 border-r border-white/5">
            {/* Progress Line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-64 bg-white/5 rounded-full overflow-hidden">
              <div
                ref={progressRef}
                className="absolute left-0 top-0 w-full bg-gradient-to-b from-primary-500 to-cyan-500 rounded-full transition-all duration-100"
                style={{ height: `${scrollProgress * 100}%` }}
              />
            </div>

            <div className="flex flex-col items-center gap-2 py-8">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative w-14 h-14 xl:w-16 xl:h-16 rounded-2xl transition-all duration-500 ${
                    activeTab === index
                      ? 'bg-white/10 border border-white/20 scale-110'
                      : 'bg-white/5 border border-transparent hover:bg-white/10'
                  }`}
        >
          <div 
                    className={`w-full h-full p-3 transition-all duration-500 ${
                      activeTab === index ? 'scale-100' : 'opacity-50 group-hover:opacity-80'
                    }`}
                  >
                    {service.icon}
                  </div>
                  
                  {/* Active Indicator */}
                  <div
                    className={`tab-indicator tab-indicator-${index} absolute -right-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b ${service.gradient} rounded-full origin-center transition-all duration-300`}
                    style={{
                      opacity: activeTab === index ? 1 : 0,
                      transform: `translateY(-50%) scaleY(${activeTab === index ? 1 : 0})`,
                    }}
                  />

                  {/* Tooltip */}
                  <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/90 border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    <span className="text-sm text-white font-medium">{service.subtitle}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Service Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <div className="text-2xl font-bold text-white">{String(activeTab + 1).padStart(2, '0')}</div>
              <div className="text-xs text-gray-500">/ {String(services.length).padStart(2, '0')}</div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 p-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl">
          {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white/15 scale-110'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className={`w-6 h-6 ${activeTab === index ? 'opacity-100' : 'opacity-50'}`}>
                  {service.icon}
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 flex items-center overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-12">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left: Content */}
                <div className="relative min-h-[480px]">
                  {services.map((service, index) => (
                    <div
                      key={service.id}
                      ref={(el) => { contentRefs.current[index] = el }}
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeTab === index
                          ? 'opacity-100 translate-x-0 z-10'
                          : 'opacity-0 translate-x-10 pointer-events-none z-0'
                      }`}
                    >
                      <div className="relative h-full flex flex-col justify-center">
                        {/* Service Number - Background */}
                        <div className="absolute -left-4 lg:-left-10 top-1/2 -translate-y-1/2 text-[12rem] lg:text-[16rem] font-black text-white/[0.02] select-none leading-none">
                          {String(index + 1).padStart(2, '0')}
                        </div>

                        <div className="relative z-10">
                          {/* Badge */}
                          <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 mb-8"
                            style={{ backgroundColor: `${service.accentColor}10` }}
                          >
                            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: service.accentColor }} />
                            <span className="text-sm font-semibold tracking-wide" style={{ color: service.accentColor }}>
                              {service.subtitle}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1]">
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
                            {service.description}
                          </p>

                          {/* Features - Horizontal Layout */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {service.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-3 group"
                              >
                                <div
                                  className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                                  style={{ backgroundColor: `${service.accentColor}20` }}
                                >
                                  <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke={service.accentColor}
                                    strokeWidth={3}
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Value Proposition - Inline Style */}
                          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                            <div 
                              className="w-1 h-full min-h-[3rem] rounded-full flex-shrink-0"
                              style={{ backgroundColor: service.accentColor }}
                            />
                            <div>
                              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">{t('value_proposition_title')}</p>
                              <p
                                className="text-base font-medium leading-relaxed"
                                style={{ color: service.accentColor }}
                              >
                                {service.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right: Visual */}
                <div className="relative hidden lg:flex items-center justify-center">
                  <div className="relative w-full max-w-lg aspect-square">
                    {/* Orbital Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="absolute w-full h-full rounded-full border border-white/5 animate-spin"
                        style={{ animationDuration: '30s' }}
                      />
                      <div
                        className="absolute w-4/5 h-4/5 rounded-full border border-white/10 animate-spin"
                        style={{ animationDuration: '20s', animationDirection: 'reverse' }}
                      />
                      <div
                        className="absolute w-3/5 h-3/5 rounded-full border border-white/15 animate-spin"
                        style={{ animationDuration: '15s' }}
                      />
                    </div>

                    {/* Central Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`relative w-40 h-40 md:w-48 md:h-48 rounded-3xl transition-all duration-700 bg-gradient-to-br ${services[activeTab].gradient} p-0.5`}
                      >
                        <div className="w-full h-full rounded-3xl bg-black/90 flex items-center justify-center p-6">
                          <div className="w-full h-full">
                            {services[activeTab].icon}
                          </div>
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div
                        className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full blur-3xl opacity-30 transition-all duration-700"
                        style={{ backgroundColor: services[activeTab].accentColor }}
                      />
                    </div>

                    {/* Floating Service Labels */}
                    {services.map((service, index) => {
                      const angle = (index / services.length) * 2 * Math.PI - Math.PI / 2
                      const radius = 180
                      const x = Math.cos(angle) * radius
                      const y = Math.sin(angle) * radius

                      return (
                        <div
                          key={service.id}
                          className={`absolute left-1/2 top-1/2 transition-all duration-500 cursor-pointer ${
                            activeTab === index ? 'scale-110 z-10' : 'opacity-50 hover:opacity-80'
                          }`}
                          style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          }}
                          onClick={() => setActiveTab(index)}
                        >
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                              activeTab === index
                                ? 'bg-white/10 border-white/30 shadow-lg'
                                : 'bg-black/50 border-white/10'
                            }`}
                            style={{
                              boxShadow: activeTab === index ? `0 0 20px ${service.accentColor}40` : 'none',
                            }}
                          >
                            <div className="w-6 h-6">{service.icon}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Desktop only */}
          <div className="hidden lg:flex absolute bottom-8 right-8 flex-col items-center gap-2 text-gray-600">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.2em] writing-mode-vertical">{t('scroll_indicator')}</span>
          </div>
        </div>
      </section>
    </div>
  )
}
