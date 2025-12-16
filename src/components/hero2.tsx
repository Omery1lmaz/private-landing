'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )

      // Animate diagram groups with stagger
      const diagramGroups = cardsRef.current ? [
        cardsRef.current.querySelector('.cloud-platform'),
        cardsRef.current.querySelector('.web-dev'),
        cardsRef.current.querySelector('.mobile-app'),
        cardsRef.current.querySelector('.api-services'),
        cardsRef.current.querySelector('.cloud-services'),
        cardsRef.current.querySelector('.frontend-box'),
        cardsRef.current.querySelector('.backend-box'),
        cardsRef.current.querySelector('.database-box-top'),
        cardsRef.current.querySelector('.framework-group')
      ].filter(Boolean) : []

      if (diagramGroups.length > 0) {
        // Initial animation - only animate opacity to preserve SVG transform attributes
        // No scale or y transform to avoid conflicts with SVG transform attributes
        gsap.fromTo(diagramGroups,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.1,
            delay: 0.3
          }
        )
      }

      // Animate all connection lines with pulsing effect
      const allConnectionLines = cardsRef.current?.querySelectorAll('line[class*="connection-line"]')
      if (allConnectionLines) {
        allConnectionLines.forEach((line: any, index: number) => {
          gsap.to(line, {
            opacity: 0.8,
            duration: 2,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
            delay: index * 0.2
          })
        })
      }

      gsap.to(heroRef.current, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255, 255, 255, 0.03) 30px, rgba(255, 255, 255, 0.03) 31px),
          repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255, 255, 255, 0.03) 30px, rgba(255, 255, 255, 0.03) 31px)
        `
      }}
    >

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h1
                ref={titleRef}
                className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-white"
              >
                Dijital performansınızı{' '}
                <span className="text-cyan-400">görebilen, duyabilen ve konuşabilen</span>{' '}
                çözümler geliştiriyoruz
              </h1>
            </div>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8"
            >
              İşletmenizin görünürlüğünü artıran, satışlarını güçlendiren ve operasyonel süreçlerini optimize eden modern web, mobil ve yapay zeka destekli çözümler geliştiriyoruz.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 items-start mb-8"
            >
              <button
                onClick={scrollToContact}
                className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-lg text-base transition-colors duration-200"
              >
                Ücretsiz Danışmanlık Alın
              </button>
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services')
                  servicesSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/30 font-semibold px-6 py-3 rounded-lg text-base transition-all duration-200 flex items-center gap-2"
              >
                <span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-xs font-bold">T</span>
                Hizmet Kataloğunu İnceleyin
              </button>
            </div>

            {/* Features List */}
            <div className="space-y-1">
              <div className="text-gray-400 text-base">
                Açık kaynak yapay zeka çerçevesi
              </div>
              <div className="text-gray-400 text-base">
                Ultra düşük gecikme süresi altyapısı
              </div>
              <div className="text-gray-400 text-base">
                SOTA Ses AI araçları ve araştırma
              </div>
            </div>
          </div>

          {/* Right Column - Animated Isometric Architecture Diagram */}
          <div ref={cardsRef} className="relative">
            <div className="relative w-full aspect-[4/5]">
              <svg viewBox="0 0 600 750" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <pattern id="hero-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
                  </pattern>
                  {/* Glow filter for animated elements */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  {/* Gradient for connections */}
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />
                
                {/* Top Section - Cloud Platform with isometric effect */}
                <g className="diagram-group" transform="translate(50, 40)">
                  {/* Cloud Platform - Isometric */}
                  <g className="cloud-platform">
                    {/* Top face */}
                    <path d="M 0,0 L 180,0 L 200,20 L 20,20 Z" fill="rgba(139, 92, 246, 0.2)" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="2" filter="url(#glow)"/>
                    {/* Front face */}
                    <path d="M 0,0 L 20,20 L 20,120 L 0,100 Z" fill="rgba(139, 92, 246, 0.15)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2"/>
                    {/* Right face */}
                    <path d="M 180,0 L 200,20 L 200,120 L 180,100 Z" fill="rgba(139, 92, 246, 0.1)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2"/>
                    <text x="90" y="50" textAnchor="middle" fill="#a855f7" fontSize="16" fontWeight="bold">EliteCode Platform</text>
                    <text x="90" y="70" textAnchor="middle" fill="#a855f7" fontSize="12">EC</text>
                  </g>

                  {/* Web Development - Isometric */}
                  <g className="web-dev" transform="translate(220, 0)">
                    <path d="M 0,0 L 140,0 L 155,15 L 15,15 Z" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" filter="url(#glow)"/>
                    <path d="M 0,0 L 15,15 L 15,95 L 0,80 Z" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="2"/>
                    <path d="M 140,0 L 155,15 L 155,95 L 140,80 Z" fill="rgba(6, 182, 212, 0.1)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="2"/>
                    <text x="70" y="35" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="600">Web</text>
                    <text x="70" y="50" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="600">Geliştirme</text>
                  </g>

                  {/* Mobile App - Isometric */}
                  <g className="mobile-app" transform="translate(220, 100)">
                    <path d="M 0,0 L 140,0 L 155,15 L 15,15 Z" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" filter="url(#glow)"/>
                    <path d="M 0,0 L 15,15 L 15,95 L 0,80 Z" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="2"/>
                    <path d="M 140,0 L 155,15 L 155,95 L 140,80 Z" fill="rgba(6, 182, 212, 0.1)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="2"/>
                    <text x="70" y="35" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="600">Mobil</text>
                    <text x="70" y="50" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="600">Uygulama</text>
                  </g>

                  {/* API Services - Isometric (right side) */}
                  <g className="api-services" transform="translate(380, 0)">
                    <path d="M 0,0 L 100,0 L 108,8 L 8,8 Z" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1.5"/>
                    <path d="M 0,0 L 8,8 L 8,58 L 0,50 Z" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5"/>
                    <path d="M 100,0 L 108,8 L 108,58 L 100,50 Z" fill="rgba(6, 182, 212, 0.1)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5"/>
                    <text x="50" y="25" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="600">API</text>
                    <text x="50" y="38" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="600">Servisleri</text>
                  </g>

                  {/* Cloud Services - Isometric (right side, below API) */}
                  <g className="cloud-services" transform="translate(380, 70)">
                    <path d="M 0,0 L 90,0 L 96,6 L 6,6 Z" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1.5"/>
                    <path d="M 0,0 L 6,6 L 6,56 L 0,50 Z" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5"/>
                    <path d="M 90,0 L 96,6 L 96,56 L 90,50 Z" fill="rgba(6, 182, 212, 0.1)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5"/>
                    <text x="45" y="25" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="600">Bulut</text>
                    <text x="45" y="38" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="600">Servisleri</text>
                  </g>
                </g>

                {/* Connection Lines from Platform to Services */}
                <g className="connections-top">
                  <line className="connection-line-platform-web" x1="200" y1="60" x2="220" y2="40" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 4" opacity="0.5"/>
                  <line className="connection-line-platform-mobile" x1="200" y1="100" x2="220" y2="140" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 4" opacity="0.5"/>
                  <line className="connection-line-platform-api" x1="200" y1="60" x2="380" y2="30" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 4" opacity="0.5"/>
                  <line className="connection-line-platform-frontend" x1="100" y1="120" x2="100" y2="200" stroke="#06b6d4" strokeWidth="2" opacity="0.6"/>
                </g>

                {/* Middle Section - Frontend, Backend, Database with isometric */}
                <g className="middle-group" transform="translate(50, 200)">
                  <g className="frontend-box" transform="translate(0, 0)">
                    <path d="M 0,0 L 110,0 L 120,10 L 10,10 Z" fill="rgba(255, 255, 255, 0.12)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
                    <path d="M 0,0 L 10,10 L 10,80 L 0,70 Z" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5"/>
                    <path d="M 110,0 L 120,10 L 120,80 L 110,70 Z" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5"/>
                    <text x="55" y="35" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">Frontend</text>
                    <text x="55" y="50" textAnchor="middle" fill="#fff" fontSize="11">React/Next.js</text>
                  </g>

                  <g className="backend-box" transform="translate(130, 0)">
                    <path d="M 0,0 L 110,0 L 120,10 L 10,10 Z" fill="rgba(255, 255, 255, 0.12)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
                    <path d="M 0,0 L 10,10 L 10,80 L 0,70 Z" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5"/>
                    <path d="M 110,0 L 120,10 L 120,80 L 110,70 Z" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5"/>
                    <text x="55" y="35" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">Backend</text>
                    <text x="55" y="50" textAnchor="middle" fill="#fff" fontSize="11">Node.js/Python</text>
                  </g>

                  <g className="database-box-top" transform="translate(260, 0)">
                    <path d="M 0,0 L 110,0 L 120,10 L 10,10 Z" fill="rgba(255, 255, 255, 0.12)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5"/>
                    <path d="M 0,0 L 10,10 L 10,80 L 0,70 Z" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5"/>
                    <path d="M 110,0 L 120,10 L 120,80 L 110,70 Z" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5"/>
                    <text x="55" y="35" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">Veritabanı</text>
                    <text x="55" y="50" textAnchor="middle" fill="#fff" fontSize="11">PostgreSQL/MongoDB</text>
                  </g>
                </g>

                {/* Connection lines from Frontend/Backend to Database */}
                <g className="connections-middle">
                  <line className="connection-line-frontend-backend" x1="120" y1="240" x2="130" y2="240" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6"/>
                  <line className="connection-line-backend-db" x1="250" y1="240" x2="260" y2="240" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6"/>
                  <line className="connection-line-web-frontend" x1="295" y1="240" x2="55" y2="240" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4"/>
                  <line className="connection-line-mobile-frontend" x1="295" y1="340" x2="55" y2="240" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4"/>
                  <line className="connection-line-api-backend" x1="380" y1="30" x2="185" y2="240" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4"/>
                </g>

                {/* Bottom Section - Solutions Framework with isometric */}
                <g className="framework-group" transform="translate(50, 330)">
                  {/* Framework container - isometric */}
                  <path d="M 0,0 L 500,0 L 520,20 L 20,20 Z" fill="rgba(139, 92, 246, 0.12)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" strokeDasharray="5 5" opacity="0.8"/>
                  <path d="M 0,0 L 20,20 L 20,400 L 0,380 Z" fill="rgba(139, 92, 246, 0.08)" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" strokeDasharray="5 5" opacity="0.8"/>
                  <path d="M 500,0 L 520,20 L 520,400 L 500,380 Z" fill="rgba(139, 92, 246, 0.05)" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" strokeDasharray="5 5" opacity="0.8"/>
                  <text x="250" y="30" textAnchor="middle" fill="#a855f7" fontSize="16" fontWeight="bold">ÇÖZÜM ÇERÇEVESİ</text>
                  
                  {/* Components with isometric effect */}
                  <g className="framework-components" transform="translate(30, 60)">
                    <g className="custom-solutions-box" transform="translate(0, 0)">
                      <path d="M 0,0 L 140,0 L 152,12 L 12,12 Z" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1.5"/>
                      <path d="M 0,0 L 12,12 L 12,72 L 0,60 Z" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5"/>
                      <path d="M 140,0 L 152,12 L 152,72 L 140,60 Z" fill="rgba(6, 182, 212, 0.1)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5"/>
                      <text x="70" y="30" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="600">Özel Çözümler</text>
                      <text x="70" y="45" textAnchor="middle" fill="#06b6d4" fontSize="10">Custom Solutions</text>
                    </g>
                    
                    <g className="analytics-box" transform="translate(170, 0)">
                      <path d="M 0,0 L 120,0 L 130,10 L 10,10 Z" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1.5"/>
                      <path d="M 0,0 L 10,10 L 10,70 L 0,60 Z" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5"/>
                      <path d="M 120,0 L 130,10 L 130,70 L 120,60 Z" fill="rgba(6, 182, 212, 0.1)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5"/>
                      <text x="60" y="30" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="600">Analitik &amp; SEO</text>
                      <text x="60" y="45" textAnchor="middle" fill="#06b6d4" fontSize="10">Analytics</text>
                    </g>
                    
                    <g className="ecommerce-box" transform="translate(310, 0)">
                      <path d="M 0,0 L 120,0 L 130,10 L 10,10 Z" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1.5"/>
                      <path d="M 0,0 L 10,10 L 10,70 L 0,60 Z" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5"/>
                      <path d="M 120,0 L 130,10 L 130,70 L 120,60 Z" fill="rgba(6, 182, 212, 0.1)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.5"/>
                      <text x="60" y="30" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="600">E-Ticaret</text>
                      <text x="60" y="45" textAnchor="middle" fill="#06b6d4" fontSize="10">E-commerce</text>
                    </g>
                    
                    {/* Integration Layer - Isometric */}
                    <g className="integration-box" transform="translate(30, 90)">
                      <path d="M 0,0 L 440,0 L 456,16 L 16,16 Z" fill="rgba(139, 92, 246, 0.25)" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="2"/>
                      <path d="M 0,0 L 16,16 L 16,156 L 0,140 Z" fill="rgba(139, 92, 246, 0.2)" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="2"/>
                      <path d="M 440,0 L 456,16 L 456,156 L 440,140 Z" fill="rgba(139, 92, 246, 0.15)" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="2"/>
                      <text x="220" y="40" textAnchor="middle" fill="#a855f7" fontSize="14" fontWeight="bold">Entegrasyon Katmanı</text>
                      <text x="220" y="60" textAnchor="middle" fill="#a855f7" fontSize="12">API &amp; WebSocket Bağlantıları</text>
                    </g>

                    {/* Connection lines from Solutions to Integration Layer */}
                    <g className="connections-framework">
                      <line className="connection-line-custom-integration" x1="70" y1="72" x2="70" y2="90" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6"/>
                      <line className="connection-line-analytics-integration" x1="230" y1="70" x2="230" y2="90" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6"/>
                      <line className="connection-line-ecommerce-integration" x1="370" y1="70" x2="370" y2="90" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6"/>
                    </g>

                    {/* Database below Integration Layer */}
                    <g className="database-box-bottom" transform="translate(200, 260)">
                      <path d="M 0,0 L 100,0 L 108,8 L 8,8 Z" fill="rgba(139, 92, 246, 0.2)" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="1.5"/>
                      <path d="M 0,0 L 8,8 L 8,58 L 0,50 Z" fill="rgba(139, 92, 246, 0.15)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="1.5"/>
                      <path d="M 100,0 L 108,8 L 108,58 L 100,50 Z" fill="rgba(139, 92, 246, 0.1)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="1.5"/>
                      <text x="50" y="30" textAnchor="middle" fill="#a855f7" fontSize="11" fontWeight="600">Veritabanı</text>
                      <text x="50" y="42" textAnchor="middle" fill="#a855f7" fontSize="9">Database</text>
                    </g>

                    {/* Connection line from Integration Layer to Database */}
                    <line className="connection-line-integration-db" x1="250" y1="246" x2="250" y2="260" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6"/>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
