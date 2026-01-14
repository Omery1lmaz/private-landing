'use client'

import React, { useEffect, useRef } from 'react'
import { Search, Compass, Cpu, Rocket, Timer, Zap, Layout, PlayCircle, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FastDeliveryProcess() {
    const sectionRef = useRef<HTMLElement>(null)

    const steps = [
        {
            num: "01",
            title: "Discovery (Day 1)",
            desc: "Hedeflerinizi netleştirir, kapsamı belirler ve rekor sürede yol haritamızı çıkarırız.",
            icon: Search,
            color: "cyan"
        },
        {
            num: "02",
            title: "Sprint 0 (Day 2-3)",
            desc: "Altyapıyı kurar, prototipleri onaylar ve yüksek tempo geliştirmeye başlarız.",
            icon: Layout,
            color: "blue"
        },
        {
            num: "03",
            title: "Hyper-Dev (Day 4-12)",
            desc: "Anlık geri bildirimlerle, ürünü her gün bir adım daha ileri taşır ve test ederiz.",
            icon: Zap,
            color: "teal"
        },
        {
            num: "04",
            title: "Launch (Day 14)",
            desc: "Tam fonksiyonel ürününüzü yayına alır, pazarla buluşmanızı sağlarız.",
            icon: PlayCircle,
            color: "indigo"
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
        <section ref={sectionRef} className="relative py-32 bg-[#030308] overflow-hidden">

            {/* Background decoration */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#06b6d4_0%,transparent_50%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-24 space-y-4">
                    <span className="text-cyan-500 font-mono text-xs tracking-[0.4em] uppercase mb-2 block animate-pulse">Hız Limitini Zorlayın</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">14 Günde <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Nasıl Teslim Ediyoruz?</span></h2>
                    <p className="text-white/40 max-w-2xl mx-auto text-lg">Zamanı değil, enerjiyi doğru yönetiyoruz. Odaklanmış, çevik ve hatasız.</p>
                </div>

                {/* Steps Container */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="process-line absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent hidden md:block" />

                    <div className="grid md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className="process-step group flex flex-col items-center text-center p-6">
                                {/* Icon/Number Bulb */}
                                <div className="w-24 h-24 rounded-[2rem] bg-[#080c14] border border-white/5 flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/20 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                                    <div className={`absolute inset-0 bg-${step.color}-500/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                                    <step.icon size={32} className="text-gray-500 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />

                                    {/* Step Number Badge */}
                                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-xl bg-[#0a0f18] border border-white/10 flex items-center justify-center text-[10px] font-black text-white transition-all duration-500 group-hover:border-${step.color}-500/50 group-hover:text-${step.color}-400 group-hover:scale-110`}>
                                        {step.num}
                                    </div>

                                    {/* Animation decoration */}
                                    <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-${step.color}-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100`} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-50 transition-colors">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors font-light">{step.desc}</p>

                                {/* Mobile line arrow */}
                                <div className="md:hidden mt-8 text-cyan-500/30 animate-bounce">
                                    <ArrowRight size={24} className="rotate-90" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
