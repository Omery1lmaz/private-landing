'use client'

import React from 'react'
import {
    AgenticSwarmFlow,
    APIBridgeFlow,
    LogicChainFlow,
    MappingFlow,
    ScalerFlow,
    GlobalStyles
} from './AutomationVisualFlows'

interface Feature {
    id: string;
    color: string;
}

const AutomationFeatureVisual = ({ feature }: { feature: Feature }) => {
    return (
        <div className="lg:col-span-12 xl:col-span-7 flex items-center justify-center relative visual-panel min-h-[400px] lg:min-h-[600px]">
            <GlobalStyles />

            {/* Main Visual Container */}
            <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">

                {/* Background Decoration */}
                <div className={`absolute inset-0 rounded-full blur-[100px] opacity-10 bg-${feature.color}-500 transition-colors duration-1000`} />

                {/* Floating Elements (Purely stylistic) */}
                <div className="absolute top-0 left-0 w-32 h-32 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute bottom-0 right-0 w-48 h-48 border border-white/5 rounded-full animate-[spin_30s_linear_infinite] [animation-direction:reverse]" />

                {/* Dynamic Content */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {feature.id === 'agentic' && <AgenticSwarmFlow />}
                    {feature.id === 'integration' && <APIBridgeFlow />}
                    {feature.id === 'logic' && <LogicChainFlow />}
                    {feature.id === 'mapping' && <MappingFlow />}
                    {feature.id === 'scaling' && <ScalerFlow />}
                </div>

                {/* Bottom Status Info */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 rounded-2xl bg-[#080b12]/60 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest text-left">Active Module</span>
                        <span className="text-xs font-bold text-white tracking-wide">
                            {feature.id.charAt(0).toUpperCase() + feature.id.slice(1).replace('-', ' ')}
                        </span>
                    </div>
                    <div className="h-6 w-px bg-white/10" />
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-cyan-400">Optimizing...</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AutomationFeatureVisual
