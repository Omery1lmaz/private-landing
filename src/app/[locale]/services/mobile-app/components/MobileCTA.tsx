'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { ArrowRight, Smartphone, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MobileCTA() {
  const t = useTranslations('mobile_app.cta')
  const sectionRef = useRef<HTMLElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (iconRef.current) {
        gsap.from(iconRef.current, {
          opacity: 0,
          scale: 0,
          rotation: -180,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        })

        gsap.to(iconRef.current, {
          rotation: 360,
          repeat: -1,
          duration: 20,
          ease: 'none',
        })
      }

      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 relative bg-[#0a0a0f] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-cyan-500/15 via-teal-500/10 to-purple-500/15 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={contentRef}
            className="relative p-16 rounded-[3rem] bg-gradient-to-br from-white/5 via-white/3 to-transparent border-2 border-cyan-500/30 backdrop-blur-2xl shadow-2xl overflow-hidden"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-teal-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-3xl" />
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center">
              {/* Icon */}
              <div 
                ref={iconRef}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-500 mb-10 shadow-2xl shadow-cyan-500/50"
              >
                <Smartphone className="w-12 h-12 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-teal-100 mb-8">
                {t('title')}
              </h2>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                {t('subtitle')}
              </p>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 text-lg"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {t('button')}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-30px) translateX(20px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
