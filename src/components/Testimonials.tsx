'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Star,
  Quote,
  Twitter,
  Building2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

import { useTranslations } from 'next-intl'

export default function Testimonials() {
  const t = useTranslations('testimonials_section')

  // Mock testimonial data as fallback
  const mockTestimonials = {
    testimonial1_quote: "EliteCode Studio with AI solutions increased our conversion rate by 45%",
    testimonial1_author: "Ayşe Kaya",
    testimonial1_handle: "@ayse_kaya",
    testimonial2_company: "Tech Innovations Inc",
    testimonial2_quote: "Best web development company we've worked with. Highly recommended!",
    testimonial2_author: "John Smith",
    testimonial2_position: "CEO",
    testimonial3_quote: "Their SEO strategies brought us to first page of Google in 3 months",
    testimonial3_author: "Mehmet Özdemir",
    testimonial3_handle: "@mehmet_dev",
    testimonial4_quote: "Amazing customer support and technical excellence",
    testimonial4_author: "Zeynep Yılmaz",
    testimonial4_handle: "@zeynep_digital",
    testimonial5_company: "StartUp Pro",
    testimonial5_quote: "Mobile app exceeded all our expectations",
    testimonial5_author: "Can Demir",
    testimonial5_position: "Founder",
    testimonial5_additionalQuote: "Perfect execution and timeline",
    testimonial5_additionalAuthor: "Şule Turan",
    testimonial5_additionalHandle: "@sule_startup",
    testimonial6_company: "E-Commerce Solutions",
    testimonial6_quote: "Sales increased 3x after their SEO optimization",
    testimonial6_author: "Levent Arca",
    testimonial6_position: "Marketing Director",
    testimonial6_additionalQuote: "Highly professional team",
    testimonial6_additionalAuthor: "Elif Kılıç",
    testimonial6_additionalHandle: "@elif_commerce",
    description: "Real stories from brands that trust us",
    rating_text: "Trusted by 50+ brands",
    cta_text: "Start your success story today",
  }

  const getTranslation = (key: string): string => {
    try {
      return t(key)
    } catch (_e) {
      return (mockTestimonials[key as keyof typeof mockTestimonials] as string) || key
    }
  }

  const testimonials = [
    {
      type: 'twitter',
      quote: getTranslation('testimonial1_quote'),
      author: getTranslation('testimonial1_author'),
      handle: getTranslation('testimonial1_handle'),
      avatar: 'A',
      color: 'cyan',
    },
    {
      type: 'company',
      company: getTranslation('testimonial2_company'),
      quote: getTranslation('testimonial2_quote'),
      author: getTranslation('testimonial2_author'),
      position: getTranslation('testimonial2_position'),
      avatar: 'A',
      color: 'teal',
    },
    {
      type: 'twitter',
      quote: getTranslation('testimonial3_quote'),
      author: getTranslation('testimonial3_author'),
      handle: getTranslation('testimonial3_handle'),
      avatar: 'M',
      color: 'cyan',
    },
    {
      type: 'twitter',
      quote: getTranslation('testimonial4_quote'),
      author: getTranslation('testimonial4_author'),
      handle: getTranslation('testimonial4_handle'),
      avatar: 'Z',
      color: 'teal',
    },
    {
      type: 'company',
      company: getTranslation('testimonial5_company'),
      quote: getTranslation('testimonial5_quote'),
      author: getTranslation('testimonial5_author'),
      position: getTranslation('testimonial5_position'),
      avatar: 'C',
      color: 'cyan',
      additionalQuote: getTranslation('testimonial5_additionalQuote'),
      additionalAuthor: getTranslation('testimonial5_additionalAuthor'),
      additionalHandle: getTranslation('testimonial5_additionalHandle'),
    },
    {
      type: 'company',
      company: getTranslation('testimonial6_company'),
      quote: getTranslation('testimonial6_quote'),
      author: getTranslation('testimonial6_author'),
      position: getTranslation('testimonial6_position'),
      avatar: 'B',
      color: 'teal',
      additionalQuote: getTranslation('testimonial6_additionalQuote'),
      additionalAuthor: getTranslation('testimonial6_additionalAuthor'),
      additionalHandle: getTranslation('testimonial6_additionalHandle'),
    },
  ]
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)


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

      const cards = gsap.utils.toArray('.testimonial-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-[#030308]">
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
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm text-cyan-400 mb-6">
              <Star className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {t('title')}{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {t('subtitle')}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
              {getTranslation('description')}
            </p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-cyan-400 fill-cyan-400" />
              ))}
              <span className="ml-2 text-gray-400 text-sm">{getTranslation('rating_text')}</span>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => {
              const isCyan = testimonial.color === 'cyan'
              const isTwitter = testimonial.type === 'twitter'

              return (
                <div
                  key={index}
                  className="testimonial-card group relative"
                >
                  <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30 hover:from-white/[0.08] hover:to-white/[0.03] overflow-hidden">
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

                    {/* Animated border glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${isCyan ? 'rgba(6,182,212,0.1)' : 'rgba(20,184,166,0.1)'} 0%, transparent 50%)`,
                      }}
                    />

                    {/* Top accent line */}
                    <div
                      className={`absolute top-0 left-6 right-6 h-[2px] ${isCyan ? 'bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500' : 'bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{
                        animation: 'shimmer 2s infinite',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header with avatar and type */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 group-hover:scale-110 ${
                              isCyan
                                ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-400'
                                : 'bg-teal-500/20 border border-teal-500/30 text-teal-400'
                            }`}
                          >
                            {testimonial.avatar}
                          </div>
                          {/* Type indicator */}
                          {isTwitter ? (
                            <Twitter className={`w-5 h-5 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`} />
                          ) : (
                            <Building2 className={`w-5 h-5 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`} />
                          )}
                        </div>
                        {/* Quote icon */}
                        <Quote className={`w-6 h-6 opacity-20 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`} />
                      </div>

                      {/* Main Quote */}
                      <blockquote className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-white transition-colors">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="mb-4">
                        <div className="font-semibold text-white text-sm group-hover:text-cyan-50 transition-colors">
                          {testimonial.author}
                        </div>
                        {testimonial.handle && (
                          <div className={`text-xs mt-1 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`}>
                            {testimonial.handle}
                          </div>
                        )}
                        {testimonial.position && (
                          <div className="text-gray-500 text-xs mt-1">
                            {testimonial.position}
                          </div>
                        )}
                        {testimonial.company && (
                          <div className={`text-xs mt-1 font-medium ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`}>
                            {testimonial.company}
                          </div>
                        )}
                      </div>

                      {/* Additional Quote (if exists) */}
                      {testimonial.additionalQuote && (
                        <div className="pt-4 border-t border-white/10">
                          <div className="flex items-center gap-2 mb-2">
                            <MessageCircle className={`w-4 h-4 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`} />
                            <span className={`text-xs ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`}>
                              Ek Yorum
                            </span>
                          </div>
                          <blockquote className="text-gray-400 text-xs leading-relaxed mb-2">
                            "{testimonial.additionalQuote}"
                          </blockquote>
                          <div className="text-white text-xs font-medium">
                            {testimonial.additionalAuthor}
                          </div>
                          {testimonial.additionalHandle && (
                            <div className={`text-xs mt-1 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`}>
                              {testimonial.additionalHandle}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Bottom link */}
                      <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <span className={`text-sm font-medium ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`}>
                          Daha Fazla
                        </span>
                        <ArrowRight className={`w-4 h-4 ${isCyan ? 'text-cyan-400' : 'text-teal-400'} group-hover:translate-x-1 transition-transform`} />
                      </div>
                    </div>

                    {/* Corner number */}
                    <div
                      className={`absolute top-4 right-4 text-3xl font-bold opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none ${
                        isCyan ? 'text-cyan-400' : 'text-teal-400'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-6 px-8 py-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <MessageCircle className="w-6 h-6 text-cyan-400" />
              <span className="text-gray-300">{getTranslation('cta_text')}</span>
              <button
                onClick={() => {
                  const portfolio = document.getElementById('portfolio')
                  portfolio?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-cyan-500/25"
              >
                {t('cta_button')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  )
}