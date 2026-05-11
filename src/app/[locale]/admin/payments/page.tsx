'use client'

import React, { useEffect, useState } from 'react'
import { 
    CheckCircle2, 
    Calendar, 
    User, 
    Mail, 
    Phone, 
    Package, 
    CreditCard, 
    ArrowLeft,
    Loader2,
    Search,
    TrendingUp,
    TrendingDown,
    DollarSign,
    ShoppingCart,
    Clock
} from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

interface Payment {
    _id: string
    merchant_oid: string
    user_name: string
    user_email: string
    user_phone: string
    plan_name: string
    amount: number
    status: string
    createdAt: string
}

export default function AdminPaymentsPage() {
    const locale = useLocale()
    const [payments, setPayments] = useState<Payment[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch('/api/admin/payments')
                const data = await response.json()
                setPayments(data)
            } catch (error) {
                console.error('Failed to fetch payments:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchPayments()
    }, [])

    const filteredPayments = payments.filter(p => 
        p.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.user_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.merchant_oid.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Stats calculations
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)

    const totalCiro = payments.reduce((acc, curr) => acc + curr.amount, 0)
    
    const todayCiro = payments
        .filter(p => new Date(p.createdAt) >= today)
        .reduce((acc, curr) => acc + curr.amount, 0)

    const monthlyCiro = payments
        .filter(p => new Date(p.createdAt) >= thisMonth)
        .reduce((acc, curr) => acc + curr.amount, 0)

    if (loading) {
        return (
            <div className="min-h-screen bg-[#020406] flex items-center justify-center">
                <Loader2 className="text-cyan-500 animate-spin" size={48} />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#020406] text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                    <div>
                        <Link href={`/${locale}`} className="text-gray-400 hover:text-white flex items-center gap-2 mb-4 transition-colors">
                            <ArrowLeft size={16} /> Geri Dön
                        </Link>
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            Yönetim Paneli
                        </h1>
                        <p className="text-gray-400 mt-2">Satışlarınızı ve müşteri kayıtlarınızı buradan takip edin.</p>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input 
                            type="text" 
                            placeholder="Müşteri veya Sipariş No..."
                            className="bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 w-full md:w-80 focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-gray-600"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {/* Toplam Satış */}
                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 relative overflow-hidden group hover:border-white/20 transition-all">
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                                    <ShoppingCart size={24} />
                                </div>
                                <span className="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-lg uppercase tracking-wider">Aktif</span>
                            </div>
                            <div className="text-gray-400 text-sm font-medium mb-1">Toplam Satış</div>
                            <div className="text-4xl font-bold">{payments.length}</div>
                        </div>
                    </div>

                    {/* Günlük Ciro */}
                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 relative overflow-hidden group hover:border-white/20 transition-all">
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400">
                                    <Clock size={24} />
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 bg-white/5 px-2 py-1 rounded-lg uppercase tracking-wider">Bugün</span>
                            </div>
                            <div className="text-gray-400 text-sm font-medium mb-1">Günlük Ciro</div>
                            <div className="text-3xl font-bold">{todayCiro.toLocaleString('tr-TR')} TL</div>
                        </div>
                    </div>

                    {/* Aylık Ciro */}
                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 relative overflow-hidden group hover:border-white/20 transition-all">
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400">
                                    <TrendingUp size={24} />
                                </div>
                                <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded-lg uppercase tracking-wider">Aylık</span>
                            </div>
                            <div className="text-gray-400 text-sm font-medium mb-1">Bu Ayki Ciro</div>
                            <div className="text-3xl font-bold">{monthlyCiro.toLocaleString('tr-TR')} TL</div>
                        </div>
                    </div>

                    {/* Toplam Ciro */}
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-[2rem] p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-all">
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 rounded-2xl bg-cyan-500 text-black">
                                    <DollarSign size={24} />
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/20" />
                                </div>
                            </div>
                            <div className="text-cyan-400 text-sm font-medium mb-1">Toplam Ciro</div>
                            <div className="text-3xl font-bold text-white">{totalCiro.toLocaleString('tr-TR')} TL</div>
                        </div>
                        {/* Decorative Gradient Overlay */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-700" />
                    </div>
                </div>

                {/* Table Section */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <CreditCard size={20} className="text-cyan-500" />
                            Son İşlemler
                        </h2>
                        <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">{filteredPayments.length} kayıt listeleniyor</span>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/5 bg-white/[0.02]">
                                        <th className="p-8 text-xs font-bold text-gray-500 uppercase tracking-widest">Müşteri Detayı</th>
                                        <th className="p-8 text-xs font-bold text-gray-500 uppercase tracking-widest">Satın Alınan Paket</th>
                                        <th className="p-8 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Tutar</th>
                                        <th className="p-8 text-xs font-bold text-gray-500 uppercase tracking-widest">Tarih</th>
                                        <th className="p-8 text-xs font-bold text-gray-500 uppercase tracking-widest">Durum</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {filteredPayments.map((payment) => (
                                        <tr key={payment._id} className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="p-8">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 font-black text-xl border border-cyan-500/10 group-hover:scale-110 transition-transform">
                                                        {payment.user_name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-lg leading-none mb-1.5">{payment.user_name}</div>
                                                        <div className="text-sm text-gray-500 flex items-center gap-2 font-light tracking-wide">
                                                            <Mail size={12} className="opacity-50" /> {payment.user_email}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-8">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-xl bg-white/5 text-gray-400 group-hover:text-cyan-400 transition-colors">
                                                        <Package size={18} />
                                                    </div>
                                                    <span className="font-medium text-gray-200">{payment.plan_name}</span>
                                                </div>
                                            </td>
                                            <td className="p-8 text-right font-mono text-xl font-bold text-white">
                                                {payment.amount.toLocaleString('tr-TR')} TL
                                            </td>
                                            <td className="p-8">
                                                <div className="text-sm text-gray-400 flex flex-col gap-1">
                                                    <span className="font-medium text-gray-200">
                                                        {new Date(payment.createdAt).toLocaleDateString('tr-TR', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                            year: 'numeric'
                                                        })}
                                                    </span>
                                                    <span className="text-[10px] text-gray-600 font-mono uppercase tracking-tighter">
                                                        {new Date(payment.createdAt).toLocaleTimeString('tr-TR', {
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-8">
                                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-[0.2em] border border-green-500/10">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                                    Tamamlandı
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredPayments.length === 0 && (
                                        <tr>
                                            <td colSpan={5} className="p-32 text-center">
                                                <div className="flex flex-col items-center gap-4 opacity-20">
                                                    <Loader2 size={48} className="animate-pulse" />
                                                    <p className="text-xl font-light">Henüz bir ödeme kaydı bulunamadı.</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
