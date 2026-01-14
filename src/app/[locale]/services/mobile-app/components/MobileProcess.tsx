'use client'

import React, { useEffect, useRef } from 'react'
import { Search, Layout, Code2, Rocket, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MobileProcess() {
  const sectionRef = useRef<HTMLElement>(null)

  const steps = [
    {
      number: "01",
      title: "Ürün Stratejisi & Mimari",
      desc: "İş hedeflerinizi mobil öncelikli bir stratejiye dönüştürüyor, teknik altyapıyı ve kullanıcı akışını kurguluyoruz.",
      icon: Search,
      color: "cyan"
    },
    {
      number: "02",
      title: "UI/UX & Prototipleme",
      desc: "Markanızı yansıtan, modern ve akıcı arayüzler tasarlıyor; etkileşimli prototiplerle deneyimi test ediyoruz.",
      icon: Layout,
      color: "blue"
    },
    {
      number: "03",
      title: "Geliştirme & Entegrasyon",
      desc: "Performans odaklı kod yapısı, offline-first yaklaşımlar ve güçlü backend entegrasyonu ile ürünü inşa ediyoruz.",
      icon: Code2,
      color: "purple"
    },
    {
      number: "04",
      title: "Yayın, İzleme & Büyüme",
      desc: "App Store & Play Store süreçlerini yönetiyor, yayın sonrası kullanıcı verileriyle ürünü sürekli optimize ediyoruz.",
      icon: Rocket,
      color: "emerald"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#030308] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-4xl mb-24 space-y-4">
          <span className="text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase border-l-2 border-cyan-500/50 pl-4 py-1">Sürecimiz</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
            Fikirden <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cepteki Değere</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.75rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, i) => (
            <div key={i} className="process-step group relative">
              <div className="relative mb-8">
                <div className={`w-12 h-12 rounded-xl bg-${step.color}-500/10 border border-${step.color}-500/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-${step.color}-500/20 group-hover:rotate-6 shadow-lg shadow-${step.color}-500/10 relative z-10`}>
                  <step.icon size={20} className={`text-${step.color}-400`} />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-cyan-500/50">{step.number}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{step.title}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                  {step.desc}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-4">
                  <ArrowRight size={16} className="text-white/10 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
