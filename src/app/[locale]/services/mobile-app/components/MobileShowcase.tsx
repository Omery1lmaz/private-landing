'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MobileShowcase() {
  const t = useTranslations('mobile_app.showcase')
  const sectionRef = useRef<HTMLElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.showcase-header', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Carousel animation
  useEffect(() => {
    const phones = document.querySelectorAll('.phone-item')
    phones.forEach((phone, idx) => {
      if (idx === currentIndex) {
        gsap.to(phone, {
          opacity: 1,
          scale: 1,
          x: 0,
          rotateY: 0,
          z: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
      } else {
        gsap.to(phone, {
          opacity: 0.3,
          scale: 0.85,
          x: idx < currentIndex ? -150 : 150,
          rotateY: idx < currentIndex ? -25 : 25,
          z: -100,
          duration: 0.8,
          ease: 'power3.out',
        })
      }
    })
  }, [currentIndex])

  const apps = [
    { key: 'app1' },
    { key: 'app2' },
    { key: 'app3' },
  ]

  const nextApp = () => setCurrentIndex((prev) => (prev + 1) % apps.length)
  const prevApp = () => setCurrentIndex((prev) => (prev - 1 + apps.length) % apps.length)

  return (
    <section ref={sectionRef} className="py-32 relative bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-500/15 via-teal-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="showcase-header text-center mb-24">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-cyan-500/20 border border-cyan-500/30 text-sm font-medium text-cyan-300 mb-8 backdrop-blur-xl shadow-lg shadow-cyan-500/20">
              <Sparkles className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-teal-100 mb-8">
              {t('title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Phone Carousel */}
          <div className="relative h-[700px] flex items-center justify-center mb-16" style={{ perspective: '2000px' }}>
            {apps.map((app, idx) => (
              <div
                key={idx}
                className="phone-item absolute inset-0 flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative w-[320px] h-[640px] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[3rem] p-4 shadow-[0_0_80px_rgba(6,182,212,0.5)] border-4 border-gray-700/50">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-10" />
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/30 via-teal-500/30 to-purple-500/30 rounded-[2.5rem] overflow-hidden relative">
                    <div className="absolute inset-0 p-8 flex flex-col gap-5">
                      <div className="h-16 bg-white/20 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg" />
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="bg-white/15 rounded-xl backdrop-blur-sm border border-white/10 shadow-md" />
                        ))}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-transparent to-purple-500/40 rounded-[2.5rem]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <button
              onClick={prevApp}
              className="group w-14 h-14 rounded-full bg-white/5 border-2 border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
            </button>
            
            <div className="flex gap-3">
              {apps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-12 bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/50'
                      : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextApp}
              className="group w-14 h-14 rounded-full bg-white/5 border-2 border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
            </button>
          </div>

          {/* App Info */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              {t(`${apps[currentIndex].key}_title`)}
            </h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              {t(`${apps[currentIndex].key}_desc`)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
