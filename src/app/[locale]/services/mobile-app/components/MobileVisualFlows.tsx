'use client'

import React from 'react'
import { Smartphone, Zap, Infinity as InfinityIcon, Palette, Layers, Shield, CheckCircle2, Cloud, WifiOff, Globe, Gauge } from 'lucide-react'

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
        @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0.5; }
            100% { transform: scale(1.2); opacity: 0; }
        }
    `}</style>
);

export const CrossPlatformFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="flex items-center gap-12">
            {/* iOS */}
            <div className="relative group animate-float-slow">
                <div className="w-20 h-36 bg-[#080b12] border border-white/10 rounded-[2rem] p-3 flex flex-col gap-2 shadow-2xl">
                    <div className="w-8 h-1 bg-white/20 mx-auto rounded-full mb-2" />
                    <div className="h-2 w-full bg-cyan-500/20 rounded-full" />
                    <div className="h-2 w-4/5 bg-white/5 rounded-full" />
                    <div className="mt-auto h-8 w-full bg-cyan-500/10 rounded-xl" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center">
                    <Globe size={14} className="text-cyan-400" />
                </div>
            </div>

            {/* Bridge */}
            <div className="relative w-20 flex flex-col items-center gap-2">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
                <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    <Layers className="text-black" size={16} />
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
            </div>

            {/* Android */}
            <div className="relative group animate-float-slow" style={{ animationDelay: '1s' }}>
                <div className="w-20 h-36 bg-[#080b12] border border-white/10 rounded-2xl p-3 flex flex-col gap-2 shadow-2xl">
                    <div className="flex justify-between px-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                    <div className="h-2 w-full bg-green-500/20 rounded-full" />
                    <div className="h-2 w-4/5 bg-white/5 rounded-full" />
                    <div className="mt-auto h-8 w-full bg-green-500/10 rounded-xl" />
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center">
                    <Globe size={14} className="text-green-400" />
                </div>
            </div>
        </div>
    </div>
)

export const SyncFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative w-48 h-48">
            {/* Cloud Node */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center animate-bounce">
                <Cloud className="text-blue-400" size={24} />
            </div>

            {/* Phone Nodes */}
            <div className="absolute bottom-4 left-0 w-12 h-20 bg-white/5 border border-white/10 rounded-xl p-2 flex flex-col gap-2">
                <div className="h-1 w-full bg-blue-400/20 rounded-full" />
                <div className="h-1 w-4/5 bg-white/5 rounded-full" />
            </div>
            <div className="absolute bottom-4 right-0 w-12 h-20 bg-white/5 border border-white/10 rounded-xl p-2 flex flex-col gap-2">
                <div className="h-1 w-full bg-blue-400/20 rounded-full" />
                <div className="h-1 w-4/5 bg-white/5 rounded-full" />
            </div>

            {/* Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
                <path d="M100,60 Q100,100 40,140" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500/30 dash-animate" />
                <path d="M100,60 Q100,100 160,140" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500/30 dash-animate" />
            </svg>
        </div>
        <style jsx>{`
            .dash-animate {
                stroke-dasharray: 5, 5;
                animation: dash 10s linear infinite;
            }
            @keyframes dash {
                to { stroke-dashoffset: -100; }
            }
        `}</style>
    </div>
)

export const PerformanceFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-3xl overflow-hidden relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="space-y-8 relative z-10">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">FPS Stability</span>
                        <span className="text-2xl font-bold font-mono text-cyan-400">60.0</span>
                    </div>
                    <Gauge size={32} className="text-cyan-500/40" />
                </div>

                {/* Animated Graph */}
                <div className="h-20 w-full flex items-end gap-1">
                    {[40, 60, 55, 75, 70, 85, 80, 95, 90, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-cyan-500/20 rounded-t-sm relative overflow-hidden group">
                            <div
                                className="absolute bottom-0 inset-x-0 bg-cyan-500 transition-all duration-1000 ease-out"
                                style={{ height: `${h}%`, transitionDelay: `${i * 100}ms` }}
                            />
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center">
                        <span className="text-[10px] text-gray-400 mb-1">Load Time</span>
                        <span className="text-sm font-bold text-white">0.4s</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center">
                        <span className="text-[10px] text-gray-400 mb-1">Interaction</span>
                        <span className="text-sm font-bold text-cyan-400">Instant</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export const OfflineFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="flex flex-col items-center gap-6">
            <div className="relative">
                <div className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center relative overflow-hidden">
                    <WifiOff size={40} className="text-red-500/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent" />
                </div>
                <div className="absolute inset-0 rounded-full border border-red-500/20 animate-ping" />
            </div>

            <div className="w-64 bg-white/5 border border-white/10 rounded-2xl p-4 overflow-hidden group">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Offline Queue: 12 Records</span>
                </div>
                <div className="space-y-2">
                    <div className="h-1.5 w-full bg-white/5 rounded-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-green-500/40 w-0 group-hover:w-full transition-all duration-[3000ms]" />
                    </div>
                    <div className="h-1.5 w-4/5 bg-white/5 rounded-full" />
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] text-gray-500">
                    <span>Local Cache Active</span>
                    <span className="text-red-500/60 uppercase">Wait for Sync</span>
                </div>
            </div>
        </div>
    </div>
)

export const TokensFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="grid grid-cols-2 gap-4 w-64">
            {[
                { label: 'Primary', color: 'bg-cyan-500' },
                { label: 'Surface', color: 'bg-[#0a0a0f]' },
                { label: 'Rounding', val: '24px' },
                { label: 'Spacing', val: '16pt' }
            ].map((token, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">{token.label}</span>
                    </div>
                    {token.color ? (
                        <div className={`w-full h-8 rounded-lg ${token.color} border border-white/10 shadow-lg`} />
                    ) : (
                        <div className="w-full h-8 flex items-center justify-center font-mono text-xs text-white bg-white/5 rounded-lg border border-white/10">
                            {token.val}
                        </div>
                    )}
                </div>
            ))}
            <div className="col-span-2 p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center gap-3">
                <Palette size={14} className="text-cyan-400" />
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">Universal Design Tokens</span>
            </div>
        </div>
    </div>
)
