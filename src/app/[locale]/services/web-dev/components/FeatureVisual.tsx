import React from 'react';
import { CommsFlow, AIVisual, DashboardVisual, IntegrationVisual, FlowVisual, GlobalStyles } from './VisualFlows';

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

export default function FeatureVisual({ feature }: FeatureVisualProps) {
    const Icon = feature.icon;
    const renderVisual = () => {
        const props = { results: feature.results };
        switch (feature.id) {
            case 'comms': return <CommsFlow {...props} />;
            case 'ai': return <AIVisual {...props} />;
            case 'panel': return <DashboardVisual {...props} />;
            case 'integration': return <IntegrationVisual {...props} />;
            case 'flow': return <FlowVisual {...props} />;
            default: return <Icon size={80} className={`text-${feature.color}-400`} />;
        }
    };

    const colorStyles: Record<string, { gradient: string, bg: string }> = {
        cyan: { gradient: 'from-cyan-500/10', bg: 'bg-cyan-400' },
        purple: { gradient: 'from-purple-500/10', bg: 'bg-purple-400' },
        blue: { gradient: 'from-blue-500/10', bg: 'bg-blue-400' },
        emerald: { gradient: 'from-emerald-500/10', bg: 'bg-emerald-400' },
        orange: { gradient: 'from-orange-500/10', bg: 'bg-orange-400' }
    };

    const styles = colorStyles[feature.color] || colorStyles.cyan;

    return (
        <div className="lg:col-span-7 h-[500px] lg:h-[600px] sticky top-24 flex items-center visual-panel">
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 lg:p-12 text-center">
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
