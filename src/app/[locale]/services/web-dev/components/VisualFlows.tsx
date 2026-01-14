import React from 'react';
import {
    MessageSquare, Bot, LayoutDashboard, Link2,
    Smartphone, Globe, Mail, Database, CreditCard, Calendar,
    User, Zap, CheckCircle2, Send, Bell, Clock, ArrowRight, Inbox
} from 'lucide-react';

interface VisualProps {
    results?: string[];
}

export const CommsFlow = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center py-4 px-2">
        <div className="flex items-center gap-4 w-full max-w-lg">
            <div className="flex flex-col gap-2 flex-1">
                {[
                    { Icon: Globe, channel: 'Web Formu', msg: 'Fiyat teklifi istiyorum...', time: '2dk', color: 'cyan', isNew: true },
                    { Icon: MessageSquare, channel: 'WhatsApp', msg: 'Merhaba, urun hakkinda...', time: '5dk', color: 'green', isNew: true },
                    { Icon: Mail, channel: 'E-posta', msg: 'Siparis takibi #4521', time: '12dk', color: 'blue', isNew: false }
                ].map((item, i) => (
                    <div 
                        key={i}
                        className={`
                            relative p-3 rounded-xl backdrop-blur-xl border transition-all duration-500
                            animate-[fadeInLeft_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]
                            ${item.isNew 
                                ? 'bg-white/10 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
                                : 'bg-white/5 border-white/10 opacity-60'
                            }
                        `}
                        style={{ animationDelay: `${i * 0.15}s` }}
                    >
                        {item.isNew && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                        )}
                        <div className="flex items-start gap-3">
                            <div className={`w-9 h-9 rounded-lg bg-${item.color}-500/20 border border-${item.color}-500/30 flex items-center justify-center shrink-0`}>
                                <item.Icon size={16} className={`text-${item.color}-400`} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2 mb-1">
                                    <span className="text-[11px] font-semibold text-white">{item.channel}</span>
                                    <span className="text-[9px] text-white/40">{item.time}</span>
                                </div>
                                <p className="text-[10px] text-white/60 truncate">{item.msg}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-1 px-2">
                <div className="flex flex-col items-center gap-0.5">
                    {[0, 1, 2].map((i) => (
                        <div 
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-[flowRight_1.5s_ease-in-out_infinite]"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        />
                    ))}
                </div>
                <ArrowRight size={16} className="text-cyan-400/60" />
            </div>

            <div 
                className="flex-1 p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/30 backdrop-blur-xl shadow-[0_15px_50px_rgba(6,182,212,0.15)] animate-[fadeInRight_0.8s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]"
            >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                        <Inbox size={20} className="text-cyan-400" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-white">Tek Kutu</div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-[10px] text-green-400">Aktif</span>
                        </div>
                    </div>
                    <div className="ml-auto px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                        <span className="text-[10px] font-bold text-cyan-300">3 Yeni</span>
                    </div>
                </div>

                <div className="space-y-2">
                    {['Satis', 'Destek', 'Bilgi'].map((label, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                            <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-orange-400' : i === 1 ? 'bg-purple-400' : 'bg-blue-400'}`} />
                            <span className="text-[11px] text-white/70 group-hover:text-white transition-colors">{label}</span>
                            <span className="ml-auto text-[9px] text-white/40">{3 - i}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export const AIVisual = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center py-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] animate-[glowPulse_4s_ease-in-out_infinite]" />
        </div>

        <div 
            className="relative w-[280px] rounded-[2.5rem] bg-gradient-to-b from-gray-800/90 to-gray-900/90 border border-white/10 p-2 shadow-[0_25px_80px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]"
            style={{ transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)' }}
        >
            <div className="w-full h-6 flex items-center justify-center">
                <div className="w-20 h-5 bg-black rounded-full flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                    <div className="w-6 h-1.5 rounded-full bg-gray-700" />
                </div>
            </div>

            <div className="bg-[#0c0c14] rounded-[2rem] p-4 min-h-[320px] flex flex-col">
                <div className="flex items-center gap-3 pb-3 border-b border-white/5 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/10 border border-purple-400/30 flex items-center justify-center">
                        <Bot size={18} className="text-purple-400" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-white">AI Asistan</div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-[10px] text-green-400">Cevrimici</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 space-y-4">
                    <div className="flex justify-start animate-[fadeInLeft_0.8s_ease-out]">
                        <div className="max-w-[85%] p-3 rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 backdrop-blur-sm">
                            <p className="text-xs text-white/80 leading-relaxed">Merhaba, siparis durumumu ogrenebilir miyim?</p>
                            <span className="text-[9px] text-white/30 mt-1 block">14:32</span>
                        </div>
                    </div>

                    <div className="flex justify-end animate-[fadeInRight_0.8s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]">
                        <div className="max-w-[85%] p-3 rounded-2xl rounded-tr-sm bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/20 backdrop-blur-sm">
                            <p className="text-xs text-white/80 leading-relaxed">Tabii! Siparisiz #4821 kargoya verildi. Yarin 14:00-18:00 arasi teslim edilecek.</p>
                            <span className="text-[9px] text-purple-300/50 mt-1 block">14:32</span>
                        </div>
                    </div>

                    <div className="flex justify-start animate-[fadeIn_0.5s_ease-out_1.2s] opacity-0 [animation-fill-mode:forwards]">
                        <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/5 border border-white/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-[bounce_0.6s_infinite]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-[bounce_0.6s_infinite_0.1s]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-[bounce_0.6s_infinite_0.2s]" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 mt-4 p-2 rounded-xl bg-white/5 border border-white/10">
                    <input type="text" placeholder="Mesaj yazin..." className="flex-1 bg-transparent text-xs text-white/50 outline-none" disabled />
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <Send size={14} className="text-purple-400" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const DashboardVisual = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 bg-blue-500/10 rounded-full blur-[80px]" />
        </div>

        <div className="w-full max-w-sm">
            <div className="rounded-2xl bg-gradient-to-br from-[#0f1019]/95 to-[#0a0a0f]/95 border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-5">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-600/10 border border-blue-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                            <LayoutDashboard size={20} className="text-blue-400" />
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-white">Kontrol Paneli</div>
                            <div className="text-[10px] text-white/40">Son 7 gun</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[10px] text-green-400 font-medium">Canli</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                        { value: '24.5k', label: 'Trafik', color: 'cyan', change: '+12%' },
                        { value: '8.2%', label: 'Donusum', color: 'green', change: '+3.1%' },
                        { value: '248', label: 'Talep', color: 'purple', change: '+18' }
                    ].map((item, i) => (
                        <div 
                            key={i} 
                            className="p-3 rounded-xl bg-white/5 border border-white/5 text-center group hover:bg-white/10 hover:border-white/10 transition-all animate-[fadeInUp_0.5s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className={`text-lg font-bold text-${item.color}-400`}>{item.value}</div>
                            <div className="text-[8px] text-white/40 uppercase tracking-wider">{item.label}</div>
                            <div className="text-[9px] text-green-400 mt-1">{item.change}</div>
                        </div>
                    ))}
                </div>

                <div className="relative h-24 mb-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] text-white/40">Performans</span>
                        <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse" />
                    </div>
                    <svg className="w-full h-14" viewBox="0 0 300 60" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
                                <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                            </linearGradient>
                        </defs>
                        <path 
                            d="M0,50 Q30,40 60,35 T120,25 T180,30 T240,15 T300,10" 
                            fill="none" 
                            stroke="#3b82f6" 
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="animate-[drawLine_2s_ease-out]"
                        />
                        <path 
                            d="M0,50 Q30,40 60,35 T120,25 T180,30 T240,15 T300,10 L300,60 L0,60 Z" 
                            fill="url(#chartGradient2)"
                            className="animate-[fadeIn_1s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]"
                        />
                    </svg>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10">
                            <svg className="w-10 h-10 -rotate-90">
                                <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                <circle 
                                    cx="20" cy="20" r="16" fill="none" stroke="#a855f7" strokeWidth="3" 
                                    strokeDasharray="100" strokeDashoffset="25"
                                    strokeLinecap="round"
                                    className="animate-[progressFill_2s_ease-out]"
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-purple-400">75%</span>
                        </div>
                        <div>
                            <div className="text-[10px] text-white/40">Aylik Hedef</div>
                            <div className="text-xs font-semibold text-white">Tamamlandi</div>
                        </div>
                    </div>
                    <CheckCircle2 size={18} className="text-green-400" />
                </div>
            </div>
        </div>
    </div>
);

export const IntegrationVisual = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center py-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-40 h-40 bg-emerald-500/15 rounded-full blur-[60px] animate-[glowPulse_3s_ease-in-out_infinite]" />
        </div>

        <div className="relative w-[320px] h-[240px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/40 to-emerald-600/20 border border-emerald-400/50 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.4)] backdrop-blur-xl">
                    <Link2 size={28} className="text-emerald-300" />
                </div>
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 240">
                <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(16,185,129,0.1)" />
                        <stop offset="50%" stopColor="rgba(16,185,129,0.5)" />
                        <stop offset="100%" stopColor="rgba(16,185,129,0.1)" />
                    </linearGradient>
                </defs>
                {[
                    { x: 50, y: 40 },
                    { x: 160, y: 25 },
                    { x: 270, y: 40 },
                    { x: 50, y: 200 },
                    { x: 160, y: 215 },
                    { x: 270, y: 200 }
                ].map((pos, i) => (
                    <g key={i}>
                        <line 
                            x1="160" y1="120" x2={pos.x} y2={pos.y}
                            stroke="rgba(16,185,129,0.2)" 
                            strokeWidth="1"
                        />
                        <circle r="3" fill="#10b981" opacity="0.8">
                            <animateMotion
                                dur={`${2 + i * 0.3}s`}
                                repeatCount="indefinite"
                                path={`M160,120 L${pos.x},${pos.y}`}
                            />
                            <animate
                                attributeName="opacity"
                                values="0;1;0"
                                dur={`${2 + i * 0.3}s`}
                                repeatCount="indefinite"
                            />
                        </circle>
                    </g>
                ))}
            </svg>

            {[
                { Icon: Database, x: 50, y: 40, label: 'CRM' },
                { Icon: CreditCard, x: 160, y: 25, label: 'Odeme' },
                { Icon: Mail, x: 270, y: 40, label: 'E-posta' },
                { Icon: Calendar, x: 50, y: 200, label: 'Takvim' },
                { Icon: Smartphone, x: 160, y: 215, label: 'Mobil' },
                { Icon: Globe, x: 270, y: 200, label: 'Web' }
            ].map((item, i) => (
                <div
                    key={i}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group animate-[fadeIn_0.5s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                    style={{ left: item.x, top: item.y, animationDelay: `${i * 0.1}s` }}
                >
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.3)] flex items-center justify-center transition-all duration-300 group-hover:border-emerald-400/50 group-hover:shadow-[0_8px_24px_rgba(16,185,129,0.3)] group-hover:scale-110">
                            <item.Icon size={16} className="text-gray-400 group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <span className="text-[8px] text-white/50 font-medium">{item.label}</span>
                    </div>
                </div>
            ))}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-400/30 backdrop-blur-xl">
                <span className="text-[11px] font-semibold text-emerald-300">Tum Sistemler Bagli</span>
            </div>
        </div>
    </div>
);

export const FlowVisual = ({ }: VisualProps) => (
    <div className="relative w-full h-full flex items-center justify-center py-4 px-2">
        <div className="w-full max-w-lg">
            <div className="flex items-start gap-3">
                {[
                    { 
                        title: 'Bekliyor', 
                        color: 'orange',
                        items: [{ icon: User, text: 'Yeni talep', time: 'Simdi' }]
                    },
                    { 
                        title: 'Isleniyor', 
                        color: 'cyan',
                        items: [{ icon: Zap, text: 'AI analiz', time: '2dk' }]
                    },
                    { 
                        title: 'Tamamlandi', 
                        color: 'green',
                        items: [{ icon: CheckCircle2, text: 'Yanit gonderildi', time: '5dk' }]
                    }
                ].map((column, i) => (
                    <div 
                        key={i} 
                        className="flex-1 animate-[fadeInUp_0.6s_ease-out] opacity-0 [animation-fill-mode:forwards]"
                        style={{ animationDelay: `${i * 0.2}s` }}
                    >
                        <div className={`
                            flex items-center gap-2 px-3 py-2 rounded-t-xl
                            bg-gradient-to-r from-${column.color}-500/20 to-${column.color}-500/5
                            border-t border-x border-${column.color}-500/30
                        `}>
                            <div className={`w-2 h-2 rounded-full bg-${column.color}-400 ${i === 1 ? 'animate-pulse' : ''}`} />
                            <span className={`text-[11px] font-semibold text-${column.color}-300`}>{column.title}</span>
                        </div>
                        
                        <div className="p-2 rounded-b-xl bg-white/[0.02] border border-white/10 border-t-0 min-h-[140px]">
                            {column.items.map((item, j) => (
                                <div 
                                    key={j}
                                    className={`
                                        p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 
                                        border border-white/20 backdrop-blur-xl
                                        shadow-[0_8px_24px_rgba(0,0,0,0.2)]
                                        transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]
                                        animate-[scaleIn_0.4s_ease-out] opacity-0 [animation-fill-mode:forwards]
                                        ${i === 1 ? `border-${column.color}-500/30 shadow-[0_8px_24px_rgba(6,182,212,0.2)]` : ''}
                                    `}
                                    style={{ animationDelay: `${0.4 + i * 0.2}s` }}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className={`w-7 h-7 rounded-lg bg-${column.color}-500/20 border border-${column.color}-500/30 flex items-center justify-center`}>
                                            <item.icon size={14} className={`text-${column.color}-400`} />
                                        </div>
                                        <span className="text-[11px] font-medium text-white">{item.text}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 pl-9">
                                        <Clock size={10} className="text-white/30" />
                                        <span className="text-[9px] text-white/40">{item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
                <div className="flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                        <div 
                            key={i}
                            className={`h-1 rounded-full transition-all duration-500 ${
                                i === 0 ? 'w-8 bg-gradient-to-r from-orange-400 to-cyan-400' :
                                i === 1 ? 'w-4 bg-cyan-400/50' :
                                'w-4 bg-white/10'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-3 text-center">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-green-500/10 border border-orange-500/20 backdrop-blur-xl">
                    <span className="text-[11px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
                        Sizin Isiniz, Sizin Kuralariniz
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export const GlobalStyles = () => (
    <style jsx global>{`
        @keyframes glowPulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes flowRight {
            0%, 100% { transform: translateX(0); opacity: 0.3; }
            50% { transform: translateX(8px); opacity: 1; }
        }
        @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
            0% { opacity: 0; transform: translateX(-20px); }
            100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
            0% { opacity: 0; transform: translateX(20px); }
            100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        @keyframes scaleIn {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
        }
        @keyframes drawLine {
            0% { stroke-dasharray: 0 1000; }
            100% { stroke-dasharray: 1000 0; }
        }
        @keyframes progressFill {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 25; }
        }
    `}</style>
);
