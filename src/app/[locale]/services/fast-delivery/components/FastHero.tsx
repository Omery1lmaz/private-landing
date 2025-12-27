'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Rocket, ArrowRight, Timer, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FastHero() {
  const t = useTranslations('fast_delivery.hero')
  const rootRef = useRef<HTMLDivElement | null>(null)
  const countdownRef = useRef<HTMLDivElement | null>(null)
  const rocketRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const badgeRef = useRef<HTMLDivElement | null>(null)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.8, y: -20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' }
        )
      }

      // Countdown animation with number counter effect
      if (countdownRef.current) {
        gsap.fromTo(
          countdownRef.current,
          { opacity: 0, scale: 0.3, rotation: -180 },
          { 
            opacity: 1, 
            scale: 1, 
            rotation: 0,
            duration: 1.2, 
            ease: 'back.out(2)', 
            delay: 0.2
          }
        )

        // Continuous pulse and rotation
        gsap.to(countdownRef.current, {
          scale: 1.1,
          rotation: 5,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: 'sine.inOut',
        })
      }

      // Title split text animation
      if (titleRef.current) {
        const titleText = titleRef.current.textContent || ''
        titleRef.current.innerHTML = ''
        const words = titleText.split(' ')
        
        words.forEach((word, i) => {
          const span = document.createElement('span')
          span.textContent = word + ' '
          span.style.display = 'inline-block'
          span.style.opacity = '0'
          span.style.transform = 'translateY(50px) rotateX(90deg)'
          titleRef.current?.appendChild(span)
          
          gsap.to(span, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            delay: 0.5 + 0.1 * i,
            ease: 'power3.out',
          })
        })
      }

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' },
        { 
          opacity: 1, 
          y: 0, 
          clipPath: 'inset(0 0 0% 0)',
          duration: 1,
          ease: 'power3.out',
          delay: 0.8
        }
      )

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8, 
          ease: 'back.out(1.2)',
          delay: 1
        }
      )

      // Rocket 3D animation
      if (rocketRef.current) {
        gsap.fromTo(
          rocketRef.current,
          { 
            opacity: 0, 
            y: 100, 
            rotateX: -45,
            rotateY: 15,
            scale: 0.6,
            z: -300
          },
          { 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            z: 0,
            duration: 1.5, 
            ease: 'power3.out', 
            delay: 0.4
          }
        )

        // Continuous 3D floating and rotation
        gsap.to(rocketRef.current, {
          y: -25,
          rotateY: 10,
          rotateX: 5,
          repeat: -1,
          yoyo: true,
          duration: 4,
          ease: 'sine.inOut',
        })

        // Parallax on scroll
        gsap.to(rocketRef.current, {
          y: -60,
          rotateY: 15,
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      }

      // Speed lines animation
      gsap.fromTo(
        '.speed-line',
        { opacity: 0, scaleX: 0, x: 0 },
        {
          opacity: 1,
          scaleX: 1,
          x: 100,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 1.2,
        }
      )

      // Continuous speed lines movement
      gsap.to('.speed-line', {
        x: 200,
        repeat: -1,
        duration: 2,
        ease: 'none',
        stagger: 0.1,
      })

      // Racing stripes animation
      gsap.fromTo(
        '.racing-stripe',
        { x: '-100%', opacity: 0 },
        {
          x: '100%',
          opacity: 1,
          duration: 3,
          repeat: -1,
          ease: 'none',
          stagger: 0.5,
        }
      )

      // Magnetic button effect
      const buttons = document.querySelectorAll('.magnetic-button')
      buttons.forEach((button) => {
        button.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = button.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2

          gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out',
          })
        })

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)',
          })
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <header ref={rootRef} className="bg-gradient-to-b min-h-screen from-[#030308] via-[#030308] to-[#030308] py-20 relative overflow-hidden">
      {/* Enhanced Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-500/25 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-teal-500/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Enhanced Racing Stripes Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="racing-stripe absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
        <div className="racing-stripe absolute top-1/4 left-0 w-full h-3 bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />
        <div className="racing-stripe absolute top-1/2 left-0 w-full h-3 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
        <div className="racing-stripe absolute top-3/4 left-0 w-full h-3 bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />
      </div>

      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
            {/* Left: Content */}
            <div className="space-y-10 pt-8 max-w-3xl">
              {/* Badge with sparkle */}
              <div 
                ref={badgeRef}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10 border border-cyan-500/30 text-sm text-cyan-400 font-medium backdrop-blur-md shadow-xl shadow-cyan-500/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Sparkles className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{t('badge')}</span>
              </div>

              {/* Main Title with Countdown */}
              <div>
                <div ref={countdownRef} className="inline-block mb-6">
                  <div className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 drop-shadow-2xl">
                    {t('countdown')}
                  </div>
                </div>
                <h1
                  ref={titleRef}
                  className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 text-white"
                  style={{ perspective: '1000px' }}
                >
                  <span className="bg-gradient-to-r from-white via-cyan-100 via-teal-100 to-white bg-clip-text text-transparent">
                    {t('title')}
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-12"
              >
                {t('subtitle')}
              </p>

              {/* CTAs with magnetic effect */}
              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="magnetic-button group relative bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 hover:from-cyan-400 hover:via-teal-400 hover:to-cyan-400 text-white font-bold px-12 py-6 rounded-2xl text-lg md:text-xl transition-all duration-300 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {t('cta_primary')}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>
              </div>
            </div>

            {/* Right: Enhanced 3D Rocket Visual */}
            <div className="relative w-full flex items-center justify-center py-12" style={{ perspective: '2000px' }}>
              <div 
                ref={rocketRef}
                className="relative w-full max-w-md"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Rocket with 3D effect */}
                <div className="relative">
                  <div className="w-80 h-[500px] mx-auto">
                    <Rocket className="w-full h-full text-cyan-400 drop-shadow-2xl" />
                  </div>
                  
                  {/* Enhanced Speed Lines with 3D effect */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="speed-line absolute w-2 h-32 bg-gradient-to-b from-cyan-500/70 via-teal-500/50 to-transparent rounded-full"
                        style={{
                          left: `${15 + i * 10}%`,
                          top: `${25 + i * 8}%`,
                          transform: `rotate(${-50 + i * 8}deg)`,
                          transformOrigin: 'bottom center',
                        }}
                      />
                    ))}
                  </div>

                  {/* Particle trail */}
                  <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animation: `sparkle ${2 + Math.random() * 2}s ease-in-out infinite`,
                          animationDelay: `${Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Enhanced Glow Effects */}
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-cyan-500/30 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 -right-20 w-48 h-48 bg-cyan-500/25 rounded-full blur-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) scale(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-30px) scale(1);
          }
        }
      `}</style>
    </header>
  )
}
