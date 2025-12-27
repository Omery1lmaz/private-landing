'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { ArrowRight, Sparkles, Star, Play } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MobileHero() {
  const t = useTranslations('mobile_app.hero')
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const floatingRefs = useRef<(HTMLDivElement | null)[]>([])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge entrance
      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          opacity: 0,
          scale: 0.8,
          y: -20,
          duration: 0.8,
          ease: 'back.out(1.7)',
        })
      }

      // Title word-by-word animation
      if (titleRef.current) {
        const text = titleRef.current.textContent || ''
        titleRef.current.innerHTML = ''
        const words = text.split(' ')
        
        words.forEach((word, i) => {
          const span = document.createElement('span')
          span.textContent = word + ' '
          span.style.display = 'inline-block'
          span.style.opacity = '0'
          span.style.transform = 'translateY(40px)'
          span.style.filter = 'blur(10px)'
          titleRef.current?.appendChild(span)
          
          gsap.to(span, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            delay: 0.1 * i,
            ease: 'power3.out',
          })
        })
      }

      // Subtitle fade
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.5,
          ease: 'power3.out',
        })
      }

      // CTA buttons
      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          opacity: 0,
          y: 30,
          scale: 0.9,
          duration: 0.7,
          stagger: 0.15,
          delay: 0.7,
          ease: 'back.out(1.4)',
        })
      }

      // Phone mockup 3D entrance
      if (phoneRef.current) {
        gsap.from(phoneRef.current, {
          opacity: 0,
          scale: 0.7,
          y: 80,
          rotateX: -30,
          rotateY: 20,
          duration: 1.5,
          delay: 0.4,
          ease: 'power3.out',
        })

        // Parallax scroll
        gsap.to(phoneRef.current, {
          y: -80,
          rotateY: 8,
          scale: 1.05,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      }

      // Floating elements
      floatingRefs.current.forEach((el, i) => {
        if (el) {
          gsap.from(el, {
            opacity: 0,
            scale: 0,
            duration: 0.8,
            delay: 1 + i * 0.1,
            ease: 'back.out(1.7)',
          })

          gsap.to(el, {
            y: -20,
            repeat: -1,
            yoyo: true,
            duration: 2 + i * 0.5,
            ease: 'sine.inOut',
          })
        }
      })

      // Background parallax
      const bgElements = containerRef.current?.querySelectorAll('.parallax-bg')
      bgElements?.forEach((el, i) => {
        gsap.to(el, {
          y: (i + 1) * 60,
          scale: 1 + (i + 1) * 0.08,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-bg absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/30 via-transparent to-transparent rounded-full blur-[150px]" />
        <div className="parallax-bg absolute -bottom-1/4 -right-1/4 w-[900px] h-[900px] bg-gradient-to-tl from-purple-500/25 via-transparent to-transparent rounded-full blur-[180px]" />
        <div className="parallax-bg absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-gradient-to-br from-teal-500/20 via-transparent to-transparent rounded-full blur-[120px]" />
        
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[90vh] py-20">
            {/* Left Content */}
            <div className="space-y-10 relative">
              {/* Badge */}
              <div 
                ref={badgeRef}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-cyan-500/20 border border-cyan-500/30 text-sm font-medium text-cyan-300 backdrop-blur-xl shadow-lg shadow-cyan-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t('badge')}</span>
              </div>

              {/* Title */}
              <h1
                ref={titleRef}
                className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-teal-100"
              >
                {t('title')}
              </h1>

              {/* Subtitle */}
              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl"
              >
                {t('subtitle')}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      ref={(el) => { if (el) floatingRefs.current[i] = el }}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{t('rating')}</div>
                  <div className="text-sm text-gray-400">{t('reviews')}</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={scrollToContact}
                  className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
                >
                  <span className="relative z-10 flex items-center gap-3 text-lg">
                    {t('cta_primary')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>
                
                <button className="group px-10 py-5 border-2 border-white/20 text-white font-semibold rounded-2xl backdrop-blur-sm hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center gap-3 text-lg">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    {t('cta_secondary')}
                  </span>
                </button>
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="relative flex items-center justify-center lg:min-h-[600px]">
              <div 
                ref={phoneRef}
                className="relative w-full max-w-sm"
                style={{ transformStyle: 'preserve-3d', perspective: '2000px' }}
              >
                {/* Phone Frame */}
                <div className="relative mx-auto w-[320px] h-[640px] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[3rem] p-4 shadow-[0_0_100px_rgba(6,182,212,0.4)] border-4 border-gray-700/50">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-10" />
                  
                  {/* Screen */}
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/30 via-teal-500/30 to-purple-500/30 rounded-[2.5rem] overflow-hidden relative">
                    {/* App UI Mockup */}
                    <div className="absolute inset-0 p-8 flex flex-col gap-5">
                      <div className="h-16 bg-white/20 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg" />
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="bg-white/15 rounded-xl backdrop-blur-sm border border-white/10 shadow-md" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Animated glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-transparent to-purple-500/40 rounded-[2.5rem] animate-pulse" />
                    
                    {/* Screen reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-[2.5rem] pointer-events-none" />
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-20 -right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
