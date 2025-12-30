'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Search, PenTool, Code, Rocket, CheckCircle2 } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevProcess() {
  const t = useTranslations('web_dev.process')
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  const steps = [
    { icon: Search, title: 'Discovery', desc: 'We analyze your goals, audience, and market to build a strategy.' },
    { icon: PenTool, title: 'UI/UX Design', desc: 'Creating high-fidelity wireframes and modern design systems.' },
    { icon: Code, title: 'Development', desc: 'Writing clean, scalable code using Next.js and robust APIs.' },
    { icon: Rocket, title: 'Launch', desc: 'Deploying to edge networks with full testing and optimization.' }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepsEls = gsap.utils.toArray('.process-step')

      // Animate the central line fill
      gsap.fromTo(lineRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 0.5
          }
        }
      )

      // Light up steps as we scroll past them
      stepsEls.forEach((step: any, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: 'top 60%',
          onEnter: () => {
            gsap.to(step.querySelector('.step-icon-box'), {
              backgroundColor: '#06b6d4',
              borderColor: '#22d3ee',
              boxShadow: '0 0 30px rgba(6,182,212,0.4)',
              scale: 1.1,
              duration: 0.4
            })
            gsap.to(step.querySelector('.step-icon'), { color: '#fff', duration: 0.4 })
            gsap.to(step.querySelector('.step-content'), { opacity: 1, x: 0, duration: 0.5 })
          },
          onLeaveBack: () => {
            gsap.to(step.querySelector('.step-icon-box'), {
              backgroundColor: '#0a0a12',
              borderColor: 'rgba(255,255,255,0.1)',
              boxShadow: 'none',
              scale: 1,
              duration: 0.4
            })
            gsap.to(step.querySelector('.step-icon'), { color: '#6b7280', duration: 0.4 })
            // Keep content visible but maybe dim it? 
            // Let's keep it visible for better UX, or slightly dim
            gsap.to(step.querySelector('.step-content'), { opacity: 0.5, duration: 0.5 })
          }
        })
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#030308] overflow-hidden">
      {/* Background Noise/Grid */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The <span className="text-cyan-400">Pipeline</span></h2>
          <p className="text-gray-400">From concept to deployment in 4 stages.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">

          {/* Central Line Track */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
            {/* Fill Line */}
            <div ref={lineRef} className="w-full bg-cyan-500 shadow-[0_0_20px_#06b6d4]" />
          </div>

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`process-step flex items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}>

                {/* Icon Node (Center) */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-10">
                  <div className="step-icon-box w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0a0a12] border border-white/10 flex items-center justify-center transition-all duration-300">
                    <step.icon className="step-icon w-5 h-5 md:w-6 md:h-6 text-gray-500 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`step-content opacity-50 transition-opacity duration-500 w-[calc(100%-60px)] md:w-[calc(50%-40px)] ml-[60px] md:ml-0 ${i % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>

                {/* Empty side for layout balance in desktop */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />

              </div>
            ))}
          </div>

          {/* End Checkmark */}
          <div className="absolute left-[20px] md:left-1/2 bottom-[-60px] -translate-x-1/2 text-cyan-500 opacity-50 animate-bounce">
            <CheckCircle2 size={32} />
          </div>
        </div>
      </div>
    </section>
  )
}
