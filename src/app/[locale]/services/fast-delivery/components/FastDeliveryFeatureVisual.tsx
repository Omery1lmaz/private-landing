'use client'

import React from 'react';
import { SprintFlow, PrototypeVisual, TechStackVisual, GlobalStyles } from './FastDeliveryVisualFlows';

interface Feature {
    id: string;
    icon: React.ComponentType<any>;
    title: string;
    desc: string;
    color: string;
    tech?: string;
    results?: string[];
}

interface FeatureVisualProps {
    feature: Feature;
}

export default function FastDeliveryFeatureVisual({ feature }: FeatureVisualProps) {
    const Icon = feature.icon;
    const renderVisual = () => {
        switch (feature.id) {
            case 'sprint': return <SprintFlow />;
            case 'prototype': return <PrototypeVisual />;
            case 'stack': return <TechStackVisual />;
            default: return <Icon size={80} className={`text-${feature.color}-400 opacity-20`} />;
        }
    };

    const colorStyles: Record<string, { gradient: string, bg: string }> = {
        cyan: { gradient: 'from-cyan-500/10', bg: 'bg-cyan-400' },
        blue: { gradient: 'from-blue-500/10', bg: 'bg-blue-400' },
        teal: { gradient: 'from-teal-500/10', bg: 'bg-teal-400' },
        indigo: { gradient: 'from-indigo-500/10', bg: 'bg-indigo-400' }
    };

    const styles = colorStyles[feature.color] || colorStyles.cyan;

    return (
        <div className="lg:col-span-7 h-[500px] lg:h-[600px] sticky top-24 flex items-center visual-panel">
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 lg:p-12 text-center">

                {/* Background Glow */}
                <div className={`absolute inset-0 rounded-full blur-[100px] opacity-10 bg-${feature.color}-500 transition-colors duration-1000`} />

                <div className="w-full flex-1 flex items-center justify-center relative z-10 scale-90 lg:scale-100">
                    {renderVisual()}
                </div>

                {feature.tech && (
                    <div className="relative z-10 mt-auto inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <div className={`w-1.5 h-1.5 rounded-full ${styles.bg} animate-pulse`} />
                        <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">{feature.tech}</span>
                    </div>
                )}
            </div>
            <GlobalStyles />
        </div>
    );
}
