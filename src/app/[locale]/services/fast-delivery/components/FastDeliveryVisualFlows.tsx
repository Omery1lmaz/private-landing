'use client'

import React from 'react'

export const SprintFlow = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-64 h-64">
            <div className="absolute inset-0 border-2 border-dashed border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border-2 border-cyan-500/40 rounded-full animate-[spin_6s_linear_infinite_reverse]" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-cyan-500/20 rounded-2xl backdrop-blur-xl border border-cyan-500/30 flex items-center justify-center">
                    <div className="w-16 h-1 bg-cyan-500 rounded-full animate-pulse" />
                </div>
            </div>
            {/* Moving particles */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-[1px] animate-[orbit_4s_linear_infinite]"
                    style={{
                        animationDelay: `${i * 0.6}s`,
                        top: '50%',
                        left: '50%',
                        transformOrigin: `${100 + i * 10}px center`
                    }}
                />
            ))}
        </div>
        <style jsx>{`
            @keyframes orbit {
                from { transform: rotate(0deg) translateX(100px); }
                to { transform: rotate(360deg) translateX(100px); }
            }
        `}</style>
    </div>
)

export const PrototypeVisual = () => (
    <div className="relative w-64 h-80 bg-[#080b12] rounded-[32px] border border-white/10 overflow-hidden shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
        <div className="p-6 pt-16 space-y-4">
            <div className="h-8 bg-cyan-500/20 rounded-lg w-3/4 animate-pulse" />
            <div className="grid grid-cols-2 gap-3">
                <div className="h-20 bg-white/5 rounded-xl border border-white/5 animate-pulse" />
                <div className="h-20 bg-white/5 rounded-xl border border-white/5 animate-pulse" style={{ animationDelay: '0.2s' }} />
            </div>
            <div className="space-y-2">
                <div className="h-2 bg-white/10 rounded-full w-full" />
                <div className="h-2 bg-white/10 rounded-full w-5/6" />
                <div className="h-2 bg-white/10 rounded-full w-4/6" />
            </div>
            <div className="h-10 bg-cyan-500/40 rounded-xl mt-4 animate-bounce" />
        </div>
        {/* Scanning line */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-500/20 to-transparent -translate-y-full animate-[scan_3s_linear_infinite]" />
        <style jsx>{`
            @keyframes scan {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(400%); }
            }
        `}</style>
    </div>
)

export const TechStackVisual = () => (
    <div className="relative grid grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
            <div
                key={i}
                className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center animate-[float_4s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 0.2}s` }}
            >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20" />
            </div>
        ))}
        <style jsx>{`
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        `}</style>
    </div>
)

export const GlobalStyles = () => (
    <style jsx global>{`
        @keyframes width-flow {
            0% { stroke-dashoffset: 200; stroke-dasharray: 0 200; opacity: 0; }
            50% { stroke-dashoffset: 100; stroke-dasharray: 100 100; opacity: 1; }
            100% { stroke-dashoffset: 0; stroke-dasharray: 200 200; opacity: 0; }
        }
    `}</style>
)
