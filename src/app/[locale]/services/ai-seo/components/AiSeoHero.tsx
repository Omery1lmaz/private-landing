'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useLocale } from 'next-intl'
import { ArrowRight, Sparkles, Search, BarChart3, Link2, Zap } from 'lucide-react'
import gsap from 'gsap'

const ServiceCard = ({ card, index, hoveredIndex, setHoveredIndex }: any) => {
  const Icon = card.icon
  const isFocused = hoveredIndex === index
  const isDimmed = hoveredIndex !== null && !isFocused

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`
                animate-target group relative w-full h-full transition-all duration-700 ease-out
                ${isDimmed ? 'opacity-30 blur-[2px] scale-[0.96]' : 'opacity-100 scale-100'}
                ${isFocused ? 'z-30' : 'z-10'}
            `}
    >
      {/* --- Animated Flowing Border --- */}
      <div className={`
                absolute -inset-[1px] rounded-[24px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700
                bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent
            `}>
        <div className="absolute inset-0 animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full" />
      </div>

      {/* --- Main Card Body --- */}
      <div className={`
                relative flex flex-col bg-[#080b12]/60 backdrop-blur-3xl rounded-[23px] p-6 border border-white/[0.05] shadow-2xl 
                transition-all duration-700 group-hover:-translate-y-2 group-hover:bg-[#0c121d]/90 group-hover:border-white/[0.15]
                group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(6,182,212,0.1)]
                h-full min-h-[180px] justify-between
            `}>
        {/* Internal Inner Glow */}
        <div className="absolute inset-0 rounded-[23px] bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

        <div>
          {/* Card Top Row: Icon */}
          <div className="relative flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-[10deg] group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 shadow-inner">
              <Icon size={20} className={`transition-colors duration-700 ${isFocused ? 'text-cyan-400' : 'text-gray-400'}`} strokeWidth={1.5} />
            </div>
          </div>

          {/* Card Content */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-50 transition-colors">
              {card.title}
            </h3>
            <div className="h-[1px] w-8 bg-white/[0.1] group-hover:w-full transition-all duration-700 bg-gradient-to-r from-cyan-500/50 to-transparent" />

            <p className="text-sm font-medium text-gray-400 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
              {card.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AiSeoHero() {
  const locale = useLocale()
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const content = {
    tr: {
      badge: "Yapay Zeka Destekli SEO Sistemleri",
      titlePart1: "Görünürlüğünüzü Artıran",
      titleHighlight: "AI & SEO Stratejileri",
      subtitle: "Sadece anahtar kelimelere değil, anlama ve kullanıcı niyetine odaklanan, AI destekli içerik ve teknik SEO sistemleriyle organik büyümenizi otomatiğe bağlayın.",
      support: "Veri odaklı, ölçülebilir ve sürdürülebilir arama motoru hakimiyeti.",
      ctaButton: "Analizinizi Başlatın",
      ctaMicro: "Ücretsiz AI-SEO strateji raporu için ilk adımı atın.",
      cards: [
        {
          title: "AI İçerik Stratejisi",
          text: "Semantik analiz ve AI desteğiyle otorite kuran içerikler.",
          icon: Sparkles
        },
        {
          title: "Teknik SEO Mimarisi",
          text: "Hız, yapısal veri ve tarama bütçesi optimizasyonu.",
          icon: Search
        },
        {
          title: "Veri Odaklı Analiz",
          text: "Rakipleri izleyen ve fırsatları yakalayan dashboardlar.",
          icon: BarChart3
        },
        {
          title: "Otomatize Backlink",
          text: "Doğal ve kaliteli bağlantı inşası süreçleri.",
          icon: Link2
        }
      ]
    },
    en: {
      badge: "AI-Powered SEO Systems",
      titlePart1: "Business-Driving",
      titleHighlight: "AI & SEO Strategies",
      subtitle: "Beyond keywords, focused on meaning and intent. Automate your organic growth with AI-powered content and technical SEO infrastructures.",
      support: "Data-driven, measurable, and sustainable search engine dominance.",
      ctaButton: "Start Your Analysis",
      ctaMicro: "Take the first step for a free AI-SEO strategy report.",
      cards: [
        {
          title: "AI Content Strategy",
          text: "Authority-building content with semantic analysis.",
          icon: Sparkles
        },
        {
          title: "Technical SEO Architecture",
          text: "Optimization for speed, structured data, and crawl budget.",
          icon: Search
        },
        {
          title: "Data-Driven Analytics",
          text: "Dashboards tracking competitors and opportunities.",
          icon: BarChart3
        },
        {
          title: "Automated Backlinking",
          text: "Natural and high-quality link-building processes.",
          icon: Link2
        }
      ]
    }
  }

  const text = content[locale as keyof typeof content] || content.en

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(".aurora-beam", {
        opacity: 0,
        scaleY: 0
      }, {
        opacity: 0.6,
        scaleY: 1,
        duration: 2,
        stagger: 0.2,
        ease: "power3.out"
      }, 0)

      tl.from(".animate-target", {
        y: 40,
        opacity: 0,
        duration: 1.4,
        stagger: 0.1,
        ease: "power4.out",
        clearProps: "all"
      }, 0.5)

    }, containerRef)
    return () => ctx.revert()
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header ref={containerRef} className="relative bg-transparent min-h-screen flex items-center justify-center overflow-hidden">

      {/* --- LUXURY BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 1. Perspective Grid Floor */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                        `,
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(200px) scale(2.5)',
            transformOrigin: 'center bottom',
            maskImage: 'linear-gradient(to top, black 20%, transparent 80%)'
          }}
        />

        {/* 2. Aurora Light Beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="aurora-beam absolute top-0 -left-20 w-[300px] h-[120vh] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-3xl rotate-[15deg] origin-top" />
          <div className="aurora-beam absolute top-0 left-1/3 w-[400px] h-[120vh] bg-gradient-to-r from-transparent via-blue-600/10 to-transparent blur-3xl rotate-[25deg] origin-top" />
          <div className="aurora-beam absolute top-0 right-1/4 w-[350px] h-[120vh] bg-gradient-to-r from-transparent via-teal-500/10 to-transparent blur-3xl -rotate-[10deg] origin-top" />
        </div>

        {/* 3. Orbs */}
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] opacity-30 mix-blend-screen transition-transform duration-[2000ms] ease-out"
          style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[130px] opacity-30 mix-blend-screen transition-transform duration-[2000ms] ease-out"
          style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-24 lg:py-0">
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="grid lg:grid-cols-[1.2fr_1fr] items-center gap-12 xl:gap-20">

            {/* LEFT COLUMN: Text Content */}
            <div className="flex flex-col items-start text-left max-w-2xl">
              <div className="animate-target inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-8 hover:border-cyan-500/30 transition-all cursor-default">
                <Sparkles size={14} className="text-cyan-400" />
                <span className="text-[10px] font-black text-white/80 tracking-[0.2em] uppercase">{text.badge}</span>
              </div>

              <h1 className="animate-target text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-white tracking-[-0.02em] leading-[1.1] mb-8 drop-shadow-2xl">
                <span className="block mb-3 opacity-90">{text.titlePart1}</span>
                <span className="relative inline-block">
                  <span className="absolute -inset-2 blur-2xl bg-cyan-500/20 rounded-full" />
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-400 animate-[gradient_6s_linear_infinite] bg-[length:300%_auto]">
                    {text.titleHighlight}
                  </span>
                </span>
              </h1>

              <p className="animate-target text-base lg:text-lg text-gray-400/90 leading-relaxed mb-6 font-medium max-w-xl">
                {text.subtitle}
              </p>

              <p className="animate-target text-sm text-cyan-300/80 font-medium tracking-wide mb-8 border-l-2 border-cyan-500/30 pl-4 py-1">
                {text.support}
              </p>

              <div className="animate-target flex flex-col sm:flex-row items-center gap-6">
                <button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto group relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-3"
                >
                  {text.ctaButton}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <span className="text-[13px] text-gray-400 font-medium opacity-70">
                  {text.ctaMicro}
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: Service Matrix Grid */}
            <div
              className="animate-target grid grid-cols-1 sm:grid-cols-2 gap-4 perspective-[2000px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {text.cards.map((card, i) => (
                <ServiceCard
                  key={i}
                  card={card}
                  index={i}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Tech Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020408] to-transparent pointer-events-none" />

      <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
    </header>
  )
}
