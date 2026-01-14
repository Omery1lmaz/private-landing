'use client'

import React, { useEffect, useRef } from 'react'
import { Search, PenTool, Code2, Rocket } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AiSeoProcess() {
  const sectionRef = useRef<HTMLElement>(null)

  const steps = [
    {
      num: "01",
      title: "Analiz",
      desc: "Sektörünüzü, anahtar kelimelerinizi ve rakiplerinizin açıklarını analiz ederiz.",
      icon: Search
    },
    {
      num: "02",
      title: "Mimari",
      desc: "Sadece içerik değil, AI ve arama motorları için en iyi teknik yapıyı kurgularız.",
      icon: PenTool
    },
    {
      num: "03",
      title: "Uygulama",
      desc: "İçerik üretiminden teknik optimizasyona kadar her adımı titizlikle uygularız.",
      icon: Code2
    },
    {
      num: "04",
      title: "Büyüme",
      desc: "Verileri izler, stratejiyi sürekli optimize eder ve görünürlüğünüzü artırırız.",
      icon: Rocket
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      })

      gsap.from(".process-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#030308]">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-2 block">Süreç</span>
          <h2 className="text-4xl font-bold text-white">Nasıl Çalışıyoruz?</h2>
          <p className="text-white/40 mt-4">Güven. Kontrol. Şeffaflık.</p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="process-line absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent hidden md:block" />

          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="process-step flex flex-col items-center text-center">
                {/* Icon/Number Bulb */}
                <div className="w-24 h-24 rounded-full bg-[#080c14] border border-white/10 flex items-center justify-center mb-8 relative group hover:border-cyan-500/50 transition-colors shadow-2xl">
                  <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon size={28} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-xs font-bold text-cyan-400">
                    {step.num}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
