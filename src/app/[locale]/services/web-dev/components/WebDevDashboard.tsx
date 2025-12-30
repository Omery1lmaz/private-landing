'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Activity, ArrowUpRight, Globe, Users, Clock, Shield } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevDashboard() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 3D Tilt Effect Entrance
            gsap.fromTo('.dashboard-container',
                { rotateX: 45, y: 100, opacity: 0, scale: 0.8 },
                {
                    rotateX: 20, // Keep slight tilt
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top center',
                        end: 'bottom bottom',
                        scrub: 1
                    }
                }
            )

            // Counter animation
            const numbers = gsap.utils.toArray('.dash-number')
            numbers.forEach((num: any) => {
                const val = parseInt(num.innerText)
                gsap.fromTo(num,
                    { innerText: 0 },
                    {
                        innerText: val,
                        duration: 2,
                        snap: { innerText: 1 },
                        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
                    }
                )
            })

        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative py-32 bg-[#030308] overflow-hidden perspective-1000">

            <div className="container mx-auto px-4 text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Mission <span className="text-cyan-400">Control</span></h2>
                <p className="text-gray-400">Real-time performance metrics at your fingertips.</p>
            </div>

            {/* 3D Dashboard Container */}
            <div className="dashboard-container max-w-6xl mx-auto transform-style-3d rotate-x-12 perspective-[2000px] mb-20 p-4">
                <div className="relative bg-[#0a0a12]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 md:p-10 overflow-hidden group">

                    {/* Screen Glare/Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

                    {/* Header UI */}
                    <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="text-xs font-mono text-cyan-500 animate-pulse">● LIVE CONNECTION</div>
                    </div>

                    {/* Grid of Widgets */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Widget 1: Map */}
                        <div className="md:col-span-2 bg-black/40 rounded-xl p-6 border border-white/5 relative overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-semibold text-gray-400 flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-blue-400" /> Global Traffic
                                </h4>
                                <span className="text-xs text-green-400 font-mono">+12.5%</span>
                            </div>
                            <div className="h-48 relative flex items-center justify-center">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
                                {/* Abstract Map Dots - Hydration Safe */}
                                <div className="w-full h-full relative">
                                    {[...Array(10)].map((_, i) => (
                                        <div key={i} className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"
                                            style={{
                                                // Use deterministic pseudo-random based on index for hydration match, or move to client side
                                                // Simple deterministic approach:
                                                top: `${(i * 17) % 80}%`,
                                                left: `${(i * 23) % 90}%`,
                                                animationDelay: `${i * 0.2}s`
                                            }} />
                                    ))}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                                </div>
                            </div>
                        </div>

                        {/* Widget 2: Users */}
                        <div className="bg-black/40 rounded-xl p-6 border border-white/5 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-gray-400 flex items-center gap-2">
                                    <Users className="w-4 h-4 text-purple-400" /> Active Users
                                </h4>
                            </div>
                            <div className="text-center py-4">
                                <div className="text-5xl font-bold text-white mb-2 dash-number">8420</div>
                                <div className="text-xs text-gray-500 font-mono">Real-time session count</div>
                            </div>
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-[80%]" />
                            </div>
                        </div>

                        {/* Widget 3: Uptime */}
                        <div className="bg-black/40 rounded-xl p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-sm font-semibold text-gray-400 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-green-400" /> Uptime
                                </h4>
                            </div>
                            <div className="text-4xl font-bold text-white mb-1"><span className="dash-number">99</span>.9%</div>
                            <div className="flex gap-1 mt-4">
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className={`h-8 flex-1 rounded-sm ${i === 15 ? 'bg-orange-500' : 'bg-green-500/80'}`} />
                                ))}
                            </div>
                            <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-mono">
                                <span>30 Days ago</span>
                                <span>Now</span>
                            </div>
                        </div>

                        {/* Widget 4: Health */}
                        <div className="md:col-span-2 bg-black/40 rounded-xl p-6 border border-white/5 flex items-center justify-around">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full border-4 border-cyan-500 flex items-center justify-center mb-2 mx-auto relative">
                                    <span className="text-xl font-bold text-white dash-number">98</span>
                                    <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full animate-ping" />
                                </div>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Performance</span>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center mb-2 mx-auto">
                                    <span className="text-xl font-bold text-white dash-number">100</span>
                                </div>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">SEO</span>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full border-4 border-indigo-500 flex items-center justify-center mb-2 mx-auto">
                                    <span className="text-xl font-bold text-white dash-number">100</span>
                                </div>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Practices</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}
