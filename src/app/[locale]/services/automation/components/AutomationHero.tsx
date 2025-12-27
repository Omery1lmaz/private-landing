'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Workflow, ArrowRight, Zap, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AutomationHero() {
  const t = useTranslations('automation.hero')
  const rootRef = useRef<HTMLDivElement | null>(null)
  const workflowRef = useRef<HTMLDivElement | null>(null)
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
            delay: 0.1 * i,
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
          delay: 0.4
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
          delay: 0.6
        }
      )

      // Workflow diagram with enhanced 3D animation
      if (workflowRef.current) {
        gsap.fromTo(
          workflowRef.current,
          { opacity: 0, scale: 0.7, rotateY: -30 },
          { 
            opacity: 1, 
            scale: 1, 
            rotateY: 0,
            duration: 1.5, 
            ease: 'power3.out', 
            delay: 0.3
          }
        )

        // Animate connecting lines with draw effect
        gsap.fromTo(
          '.workflow-line',
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1.2,
            stagger: 0.25,
            ease: 'power2.out',
            delay: 0.8,
          }
        )

        // Animate nodes with 3D rotation
        gsap.fromTo(
          '.workflow-node',
          { opacity: 0, scale: 0, rotation: -180, z: -200 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            z: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: 'back.out(2)',
            delay: 1,
          }
        )

        // Continuous node pulse
        gsap.to('.workflow-node', {
          scale: 1.05,
          repeat: -1,
          yoyo: true,
          duration: 2,
          stagger: 0.3,
          ease: 'sine.inOut',
        })

        // Parallax on scroll
        gsap.to(workflowRef.current, {
          y: -30,
          rotateY: 5,
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      }

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
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 border border-cyan-500/30 text-sm text-cyan-400 font-medium backdrop-blur-md shadow-xl shadow-cyan-500/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Sparkles className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{t('badge')}</span>
              </div>

              {/* Main Title */}
              <h1
                ref={titleRef}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 text-white"
                style={{ perspective: '1000px' }}
              >
                <span className="bg-gradient-to-r from-white via-cyan-100 via-purple-100 to-white bg-clip-text text-transparent">
                  {t('title')}
                </span>
              </h1>

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
                  className="magnetic-button group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 hover:from-cyan-400 hover:via-purple-400 hover:to-cyan-400 text-white font-bold px-12 py-6 rounded-2xl text-lg md:text-xl transition-all duration-300 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {t('cta_primary')}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>
              </div>
            </div>

            {/* Right: Enhanced 3D Workflow Diagram */}
            <div className="relative w-full flex items-center justify-center py-12" style={{ perspective: '2000px' }}>
              <div 
                ref={workflowRef}
                className="relative w-full max-w-lg"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Workflow Nodes with 3D effect */}
                <div className="relative h-[550px]">
                  {/* Node 1 - Top */}
                  <div className="workflow-node absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 rounded-3xl bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700 flex items-center justify-center shadow-2xl shadow-cyan-500/50 relative">
                    <Workflow className="w-12 h-12 text-white drop-shadow-lg relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-50 blur-xl rounded-3xl" />
                  </div>

                  {/* Line 1 */}
                  <div className="workflow-line absolute top-28 left-1/2 -translate-x-1/2 w-1.5 h-36 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 origin-top shadow-lg shadow-cyan-500/30" />

                  {/* Node 2 - Left */}
                  <div className="workflow-node absolute top-36 left-1/4 -translate-x-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 flex items-center justify-center shadow-2xl shadow-purple-500/50 relative">
                    <Zap className="w-10 h-10 text-white drop-shadow-lg relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 opacity-50 blur-xl rounded-2xl" />
                  </div>

                  {/* Node 3 - Right */}
                  <div className="workflow-node absolute top-36 right-1/4 translate-x-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50 relative">
                    <Workflow className="w-10 h-10 text-white drop-shadow-lg relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-500 opacity-50 blur-xl rounded-2xl" />
                  </div>

                  {/* Lines 2 */}
                  <div className="workflow-line absolute top-60 left-1/4 -translate-x-1/2 w-1.5 h-40 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 origin-top shadow-lg shadow-purple-500/30" />
                  <div className="workflow-line absolute top-60 right-1/4 translate-x-1/2 w-1.5 h-40 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 origin-top shadow-lg shadow-cyan-500/30" />

                  {/* Node 4 - Bottom */}
                  <div className="workflow-node absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-500 via-cyan-500 via-teal-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-purple-500/50 relative">
                    <Zap className="w-14 h-14 text-white drop-shadow-lg relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-cyan-400 to-teal-400 opacity-50 blur-2xl rounded-3xl" />
                  </div>
                </div>

                {/* Enhanced Glow Effects */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/30 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 -right-20 w-40 h-40 bg-cyan-500/25 rounded-full blur-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
