'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Atom, Code2, Database, Globe, Layers, Cpu, Server, ShieldCheck, Box, Workflow, Terminal, Zap } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevTechStack() {
  const t = useTranslations('web_dev.tech_stack') // You might need to add this to your messages or just use generic text for now if key doesn't exist
  const sectionRef = useRef<HTMLElement>(null)

  // Tech "Stars"
  const techs = [
    { name: 'React', icon: Atom, x: -20, y: -15, size: 1.2, color: 'text-cyan-400', delay: 0 },
    { name: 'Next.js', icon: Zap, x: 25, y: -20, size: 1.5, color: 'text-white', delay: 0.2 },
    { name: 'TypeScript', icon: Code2, x: -35, y: 10, size: 1.1, color: 'text-blue-400', delay: 0.4 },
    { name: 'Node.js', icon: Server, x: 30, y: 25, size: 1.3, color: 'text-green-400', delay: 0.1 },
    { name: 'PostgreSQL', icon: Database, x: -10, y: 35, size: 1.0, color: 'text-indigo-400', delay: 0.5 },
    { name: 'Tailwind', icon: Layers, x: 15, y: -35, size: 1.2, color: 'text-teal-400', delay: 0.3 },
    { name: 'AWS', icon: Globe, x: 40, y: 5, size: 1.4, color: 'text-orange-400', delay: 0.6 },
    { name: 'Security', icon: ShieldCheck, x: -25, y: -30, size: 0.9, color: 'text-red-400', delay: 0.7 },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Float-in
      gsap.fromTo('.tech-star',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%'
          }
        }
      )

      // 2. Constant Floating Animation (Orbit-ish)
      techs.forEach((_, i) => {
        gsap.to(`.tech-star-${i}`, {
          y: '+=15',
          x: '+=10',
          duration: 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 2
        })
      })

      // 3. Parallax on Mouse Move
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        const xPos = (clientX / window.innerWidth - 0.5) * 50
        const yPos = (clientY / window.innerHeight - 0.5) * 50

        gsap.to('.tech-universe', {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: 'power2.out'
        })
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[800px] flex items-center justify-center overflow-hidden bg-[#030308]">
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-[#030308]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-0 relative">

          {/* Central Sun/Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
            <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute inset-20 bg-indigo-500/5 rounded-full blur-2xl animate-pulse delay-75" />
          </div>

          {/* Main Title - Centered in Universe */}
          <div className="relative z-20 pointer-events-none">
            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-blue-300 mb-4 tracking-widest uppercase">Technology Stack</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Constellation</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-lg mx-auto">
              Powered by a galaxy of modern tools.
            </p>
          </div>

          {/* The Universe of Icons */}
          <div className="tech-universe absolute top-1/2 left-1/2 w-[800px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {techs.map((tech, i) => (
              <div
                key={i}
                className={`tech-star tech-star-${i} absolute flex flex-col items-center justify-center gap-2`}
                style={{
                  left: `${50 + tech.x}%`,
                  top: `${50 + tech.y}%`,
                }}
              >
                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative group transition-transform duration-300 hover:scale-110 hover:border-${tech.color.split('-')[1]}-500/50`}>
                  <div className={`absolute inset-0 bg-${tech.color.split('-')[1]}-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <tech.icon className={`w-8 h-8 ${tech.color} relative z-10`} style={{ transform: `scale(${tech.size})` }} />
                </div>
                <span className="text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity absolute top-full mt-2 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}

            {/* Connecting Lines (Decor) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <path d="M400 300 L240 210" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5 5" />
              <path d="M400 300 L600 180" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5 5" />
              <path d="M400 300 L120 360" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5 5" />
              <path d="M400 300 L640 450" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5 5" />
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}
