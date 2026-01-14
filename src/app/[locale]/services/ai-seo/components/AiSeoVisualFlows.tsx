'use client'

import React from 'react'
import { Search, Bot, Database, Sparkles, BarChart3, TrendingUp, Globe, Mail, MessageSquare, Zap, Shield, CheckCircle2, ChevronRight, Share2, Link as LinkIcon } from 'lucide-react'

type VisualProps = {
    results?: string[]
}

export const GlobalStyles = () => (
    <style jsx global>{`
        @keyframes scan {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes width-flow {
            0% { width: 0%; opacity: 0; }
            50% { width: 100%; opacity: 1; }
            100% { width: 100%; opacity: 0; }
        }
        @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(0); }
            50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-float-slow { 
            animation: float-slow 6s ease-in-out infinite; 
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `}</style>
);

export const AiSearchFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="flex flex-col gap-4 w-full max-w-md">
            {/* Input / Query */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md animate-float-slow">
                <div className="flex items-center gap-3 text-cyan-400 mb-2">
                    <Search size={16} />
                    <div className="h-2 w-32 bg-cyan-400/20 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-400 animate-[width-flow_3s_infinite]" />
                    </div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full" />
            </div>

            {/* AI Processor */}
            <div className="relative h-20 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-px h-full bg-gradient-to-b from-cyan-500/50 via-cyan-500 to-cyan-500/50 animate-pulse" />
                </div>
                <div className="z-10 w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                    <Bot className="text-black" size={24} />
                </div>
            </div>

            {/* AI Results / SGE */}
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-4 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">AI Overview Result</span>
                </div>
                <div className="space-y-2">
                    <div className="h-2 w-full bg-cyan-500/20 rounded-full" />
                    <div className="h-2 w-4/5 bg-cyan-500/10 rounded-full" />
                    <div className="flex gap-2 pt-2">
                        <div className="h-6 w-20 bg-cyan-500/30 rounded-lg border border-cyan-500/30" />
                        <div className="h-6 w-20 bg-white/5 rounded-lg border border-white/10" />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export const SemanticContentFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="grid grid-cols-2 gap-3 w-full max-w-md">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`p-4 rounded-2xl border backdrop-blur-md transition-all duration-700 ${i === 1 ? 'col-span-2 bg-indigo-500/10 border-indigo-500/30' : 'bg-white/5 border-white/10'}`}>
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 1 ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/5 text-gray-400'}`}>
                            {i === 1 ? <Sparkles size={16} /> : <Database size={16} />}
                        </div>
                        <div className="flex-1">
                            <div className={`h-2 w-16 mb-1 rounded-full ${i === 1 ? 'bg-indigo-400/40' : 'bg-white/10'}`} />
                            <div className={`h-1.5 w-10 rounded-full ${i === 1 ? 'bg-indigo-400/20' : 'bg-white/5'}`} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-1.5 w-full bg-white/5 rounded-full" />
                        <div className="h-1.5 w-4/5 bg-white/5 rounded-full" />
                    </div>
                    {i === 1 && (
                        <div className="mt-4 flex items-center gap-2 text-[8px] text-indigo-400 font-bold uppercase tracking-widest">
                            <TrendingUp size={10} /> Otorite Skoru: 98%
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
)

export const TechnicalSeoFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#080b12] rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold">
                    Web Vitals: Optimized
                </div>
            </div>
            <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { label: 'LCP', val: '0.8s', color: 'text-green-400' },
                        { label: 'FID', val: '12ms', color: 'text-green-400' },
                        { label: 'CLS', val: '0.01', color: 'text-green-400' }
                    ].map((item, i) => (
                        <div key={i} className="text-center p-3 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-[10px] text-gray-400 mb-1">{item.label}</div>
                            <div className={`text-sm font-bold ${item.color}`}>{item.val}</div>
                        </div>
                    ))}
                </div>
                <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px]">
                        <span className="text-gray-400">Schema.org Integration</span>
                        <span className="text-cyan-400">Active</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 w-[95%] animate-[width-flow_4s_infinite]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export const MetricsFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-md grid gap-3">
            {[
                { label: 'Organik Pipeline', val: '$124.5k', change: '+24%', color: 'indigo' },
                { label: 'Dönüşüm Oranı', val: '4.8%', change: '+12%', color: 'cyan' }
            ].map((item, i) => (
                <div key={i} className={`p-5 rounded-2xl bg-${item.color}-500/5 border border-${item.color}-500/20 backdrop-blur-xl relative overflow-hidden group`}>
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <BarChart3 size={40} className={`text-${item.color}-400`} />
                    </div>
                    <div className="relative z-10">
                        <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                        <div className="flex items-end gap-3">
                            <div className="text-2xl font-bold text-white">{item.val}</div>
                            <div className={`text-xs font-bold text-${item.color}-400 mb-1`}>{item.change}</div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full opacity-30" />
                </div>
            ))}
            <div className="p-4 rounded-xl border border-white/5 flex items-center gap-3 bg-white/[0.02]">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Live ROI Tracking Active</span>
            </div>
        </div>
    </div>
)

export const LinkFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative w-40 h-40">
            {/* Center Node */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center z-10 animate-pulse">
                    <Globe className="text-purple-400" size={24} />
                </div>
            </div>

            {/* Connecting Lines & Nodes */}
            {[0, 72, 144, 216, 288].map((angle, i) => {
                const r = 70;
                const x = Math.cos((angle * Math.PI) / 180) * r;
                const y = Math.sin((angle * Math.PI) / 180) * r;
                return (
                    <React.Fragment key={i}>
                        <div
                            className="absolute left-1/2 top-1/2 w-px bg-gradient-to-t from-purple-500/50 to-transparent origin-bottom"
                            style={{
                                height: `${r}px`,
                                transform: `translate(-50%, -100%) rotate(${angle + 90}deg)`
                            }}
                        />
                        <div
                            className="absolute left-1/2 top-1/2 w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center animate-float-slow"
                            style={{
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                animationDelay: `${i * 0.5}s`
                            }}
                        >
                            <LinkIcon size={10} className="text-purple-400/50" />
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    </div>
)
