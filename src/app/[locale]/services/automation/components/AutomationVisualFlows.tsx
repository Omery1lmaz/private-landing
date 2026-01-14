'use client'

import React from 'react'
import { Cpu, Zap, Link as LinkIcon, Blocks, Infinity as InfinityIcon, Layers, Shield, CheckCircle2, Box, GitBranch, Share2, Activity, Brain } from 'lucide-react'

type VisualProps = {}

export const GlobalStyles = () => (
    <style jsx global>{`
        @keyframes orbit {
            0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        @keyframes pulse-intense {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes data-stream {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
        }
        .animate-orbit { animation: orbit 10s linear infinite; }
        .animate-pulse-intense { animation: pulse-intense 2s ease-in-out infinite; }
    `}</style>
);

export const AgenticSwarmFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative w-64 h-64">
            {/* Center Brain */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center z-20">
                <Brain className="text-cyan-400" size={28} />
                <div className="absolute inset-x-0 bottom-0 h-px bg-cyan-400 animate-pulse" />
            </div>

            {/* Orbiting Agents */}
            {[...Array(4)].map((_, i) => (
                <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `rotate(${i * 90}deg)` }}>
                    <div className="animate-orbit" style={{ animationDelay: `${i * -2.5}s` }}>
                        <div className="w-10 h-10 rounded-xl bg-[#080b12] border border-white/10 flex items-center justify-center shadow-lg">
                            <Cpu size={16} className="text-cyan-300" />
                        </div>
                    </div>
                </div>
            ))}

            {/* Connecting Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-500" strokeDasharray="4 4" />
                {[...Array(4)].map((_, i) => (
                    <line key={i} x1="100" y1="100" x2={100 + 40 * Math.cos(i * Math.PI / 2)} y2={100 + 40 * Math.sin(i * Math.PI / 2)} stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
                ))}
            </svg>
        </div>
    </div>
)

export const APIBridgeFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="flex items-center gap-8 lg:gap-16">
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative">
                <Box className="text-gray-400" size={24} />
                <span className="absolute -bottom-6 text-[8px] font-mono text-gray-500">Service A</span>
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    <LinkIcon className="text-cyan-400" size={18} />
                </div>
                <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/40 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
                </div>
            </div>

            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative">
                <Blocks className="text-gray-400" size={24} />
                <span className="absolute -bottom-6 text-[8px] font-mono text-gray-500">Service B</span>
            </div>
        </div>
    </div>
)

export const LogicChainFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="space-y-4 w-full max-w-xs">
            {[
                { label: 'IF Task == Completed', status: 'pass' },
                { label: 'THEN Trigger AI Agent', status: 'exec' },
                { label: 'Notify Stakeholders', status: 'wait' }
            ].map((node, i) => (
                <div key={i} className={`p-3 rounded-xl border flex items-center justify-between transition-all duration-500 ${node.status === 'pass' ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-white/5 border-white/10 opacity-60'}`}>
                    <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${node.status === 'pass' ? 'bg-cyan-500' : node.status === 'exec' ? 'bg-yellow-500' : 'bg-gray-500'}`} />
                        <span className="text-[11px] font-mono text-white/80">{node.label}</span>
                    </div>
                    {node.status === 'pass' && <CheckCircle2 size={12} className="text-cyan-400" />}
                </div>
            ))}
        </div>
    </div>
)

export const MappingFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative w-64 h-48">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150">
                <path d="M20,75 Q100,20 180,75" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-500/30" strokeDasharray="4 4" />
                <path d="M20,75 Q100,130 180,75" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-500/30" strokeDasharray="4 4" />
                <circle cx="20" cy="75" r="4" className="fill-cyan-500 animate-pulse" />
                <circle cx="180" cy="75" r="4" className="fill-indigo-500 animate-pulse" />
                <circle cx="100" cy="75" r="6" className="fill-cyan-500/20 stroke-cyan-500" strokeWidth="1" />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                <GitBranch size={16} className="text-cyan-400" />
                <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Logic Flow</span>
            </div>
        </div>
    </div>
)

export const ScalerFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 overflow-hidden relative">
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-500/10 to-transparent" />
            <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black">Performance Load</span>
                        <span className="text-3xl font-mono text-white font-bold">14,284<span className="text-cyan-500">/s</span></span>
                    </div>
                    <Activity size={32} className="text-cyan-500/40" />
                </div>
                <div className="h-12 w-full flex items-end gap-1">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="flex-1 bg-cyan-500/20 rounded-t-sm relative overflow-hidden">
                            <div className="absolute bottom-0 inset-x-0 bg-cyan-500 animate-pulse" style={{ height: `${20 + Math.random() * 80}%`, animationDelay: `${i * 0.1}s` }} />
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                        <span className="block text-[8px] text-gray-500 uppercase mb-1">Response Time</span>
                        <span className="text-lg font-mono text-white">12ms</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                        <span className="block text-[8px] text-gray-500 uppercase mb-1">Queue Size</span>
                        <span className="text-lg font-mono text-cyan-400">0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
