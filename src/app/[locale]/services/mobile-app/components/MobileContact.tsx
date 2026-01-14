'use client'

import React from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { ArrowUpRight, Sparkles, Rocket } from 'lucide-react'

export default function MobileContact() {
    const locale = useLocale()

    return (
        <section id="contact" className="relative py-32 md:py-48 bg-[#030308] overflow-hidden">

            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.1),transparent)]" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-drift-1" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-drift-2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm text-cyan-400 font-medium">Hadi Konusalim</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                            Ürününüzü
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300">
                                Cebimize Alalım
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed">
                            Fikrinizi dinlemek ve size ozel mobil cozumler uretmek icin sabirsizlaniyoruz. 24 saat icinde donus yapiyoruz.
                        </p>

                        <div className="flex flex-wrap gap-6 pt-4">
                            <div className="flex items-center gap-3 text-white/50">
                                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                <span className="text-sm">7/24 Teknik Destek</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/50">
                                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                <span className="text-sm">Ucretsiz Strateji Analizi</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl blur-2xl opacity-60" />

                        <div className="relative space-y-6">
                            <Link
                                href={`/${locale}/contact`}
                                className="group relative block p-8 md:p-10 rounded-3xl bg-gradient-to-br from-cyan-500/15 via-teal-500/10 to-cyan-500/15 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(6,182,212,0.25)]"
                            >
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                                            <Rocket className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Başvuru Yap</h3>
                                            <p className="text-base text-white/50">Maksimum 24 saatte dönüyoruz</p>
                                        </div>
                                    </div>
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-cyan-500/30">
                                        <ArrowUpRight className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </Link>

                            <div className="grid grid-cols-3 gap-4">
                                {['100%', '60 FPS', '24s'].map((stat, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center hover:border-cyan-500/20 transition-colors">
                                        <div className="text-2xl font-bold text-white mb-1">{stat}</div>
                                        <div className="text-xs text-white/40">
                                            {i === 0 ? 'Müşteri Memnuniyeti' : i === 1 ? 'Standart Performans' : 'Hızlı Dönüş'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <style jsx global>{`
                @keyframes drift-1 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(30px, -30px) rotate(5deg); }
                }
                @keyframes drift-2 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(-20px, 20px) rotate(-5deg); }
                }
                .animate-drift-1 { animation: drift-1 20s ease-in-out infinite; }
                .animate-drift-2 { animation: drift-2 25s ease-in-out infinite; }
            `}</style>
        </section>
    )
}
