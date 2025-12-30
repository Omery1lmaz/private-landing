'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Check, ArrowRight, LayoutTemplate, Crown, Server, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WebDevPricingTeaser() {
    const t = useTranslations('web_dev.pricing_teaser')
    const sectionRef = useRef<HTMLElement>(null)

    const packages = [
        {
            id: 'starter',
            name: t('package1_name'),
            price: '$749',
            icon: LayoutTemplate,
            accent: 'cyan',
            features: [t('package1_feature1'), t('package1_feature2'), 'SEO Optimization', 'Mobile Responsive'],
            pop: false
        },
        {
            id: 'pro',
            name: t('package2_name'),
            price: '$1,499',
            icon: Crown,
            accent: 'teal',
            pop: true,
            features: [t('package2_feature1'), t('package2_feature2'), 'Advanced Analytics', 'CMS Integration', 'Priority Support'],
        },
        {
            id: 'enterprise',
            name: t('package3_name'),
            price: 'Custom',
            icon: Server,
            accent: 'indigo',
            features: [t('package3_feature1'), t('package3_feature2'), 'Custom Infrastructure', 'SLA 99.9%', '24/7 Dedicated Team'],
            pop: false
        },
    ]

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        contactSection?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered entry
            gsap.fromTo('.pricing-pillar',
                { opacity: 0, y: 50, scaleY: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scaleY: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
                }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative py-32 bg-[#030308] text-white overflow-hidden">
            {/* Grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Ambient glow effects */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 backdrop-blur-sm">
                        <Sparkles size={14} className="text-cyan-400" />
                        <span className="text-sm text-slate-300 font-medium">Clear & Transparent</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {t('title')}
                    </h2>

                    {/* Explicit 'Starting From' Badge as Requested */}
                    <div className="mt-4 inline-flex items-center justify-center px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-900/40 to-teal-900/40 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                        <span className="text-gray-300 mr-2 font-mono text-sm uppercase tracking-wide">Web Development Packages starting from</span>
                        <span className="text-2xl font-bold text-white text-shadow-glow">$749</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`pricing-pillar group relative flex flex-col p-1 rounded-2xl transition-all duration-500
                 ${pkg.pop ? 'lg:-mt-8 lg:-mb-8 z-10' : 'bg-transparent'}
              `}
                        >
                            {/* Holographic Border Gradient */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${pkg.pop ? 'from-cyan-500/40 via-teal-500/10 to-transparent' : ''}`} />

                            {/* Card Content */}
                            <div className={`relative flex flex-col h-full bg-[#0a0a0f]/90 backdrop-blur-xl rounded-xl p-8 border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors
                   ${pkg.pop ? 'shadow-[0_0_50px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/30' : ''}
              `}>
                                {/* Top Glow */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${pkg.accent}-500 to-transparent opacity-50`} />

                                {pkg.pop && (
                                    <div className="absolute top-4 right-4 animate-pulse">
                                        <span className="bg-cyan-500 text-[#030308] text-[10px] font-bold px-2 py-0.5 rounded shadow-[0_0_10px_cyan]">POPULAR</span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-br from-white/5 to-transparent border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                                        <pkg.icon size={28} className={`text-${pkg.accent}-400 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`} />
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-300 mb-2">{pkg.name}</h3>
                                    <div className="text-4xl font-bold text-white tracking-tight">{pkg.price}</div>
                                </div>

                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                                <div className="flex-1 space-y-5 mb-8">
                                    {pkg.features.map((feat, i) => (
                                        <div key={i} className="flex items-start gap-4 group/item">
                                            <div className={`mt-0.5 w-5 h-5 rounded-full bg-${pkg.accent}-500/10 flex items-center justify-center border border-${pkg.accent}-500/20 group-hover/item:bg-${pkg.accent}-500/20 transition-colors`}>
                                                <Check size={12} className={`text-${pkg.accent}-400`} />
                                            </div>
                                            <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={scrollToContact}
                                    className={`w-full py-4 rounded-lg font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden group/btn
                          ${pkg.pop
                                            ? 'bg-cyan-500 text-[#030308] hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]'
                                            : 'bg-white/5 text-white hover:bg-white/10 border border-white/5 hover:border-white/20'
                                        }
                      `}
                                >
                                    <span className="relative z-10">{t('cta')}</span>
                                    <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <style jsx>{`
        .text-shadow-glow {
            text-shadow: 0 0 10px rgba(6,182,212,0.5);
        }
      `}</style>
        </section>
    )
}
