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
    Search
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
                            Ödeme Kayıtları
                        </h1>
                        <p className="text-gray-400 mt-2">Başarıyla tamamlanan tüm müşteri ödemeleri.</p>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input 
                            type="text" 
                            placeholder="Müşteri veya Sipariş No ara..."
                            className="bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 w-full md:w-80 focus:outline-none focus:border-cyan-500/50 transition-colors"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <div className="text-gray-400 text-sm mb-1">Toplam Satış</div>
                        <div className="text-3xl font-bold">{payments.length}</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <div className="text-gray-400 text-sm mb-1">Toplam Ciro</div>
                        <div className="text-3xl font-bold text-cyan-400">
                            {(payments.reduce((acc, curr) => acc + curr.amount, 0) / 100).toLocaleString('tr-TR')} TL
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <div className="text-gray-400 text-sm mb-1">Aktiflik</div>
                        <div className="text-3xl font-bold text-green-400">Online</div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/5 bg-white/[0.02]">
                                    <th className="p-6 text-sm font-semibold text-gray-400">Müşteri</th>
                                    <th className="p-6 text-sm font-semibold text-gray-400">Paket</th>
                                    <th className="p-6 text-sm font-semibold text-gray-400">Tutar</th>
                                    <th className="p-6 text-sm font-semibold text-gray-400">Tarih</th>
                                    <th className="p-6 text-sm font-semibold text-gray-400">Durum</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {filteredPayments.map((payment) => (
                                    <tr key={payment._id} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 font-bold">
                                                    {payment.user_name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-semibold">{payment.user_name}</div>
                                                    <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                                        <Mail size={12} /> {payment.user_email}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex items-center gap-2 text-gray-300">
                                                <Package size={16} className="text-cyan-500/50" />
                                                {payment.plan_name}
                                            </div>
                                        </td>
                                        <td className="p-6 font-mono text-cyan-400">
                                            {(payment.amount / 100).toLocaleString('tr-TR')} TL
                                        </td>
                                        <td className="p-6">
                                            <div className="text-sm text-gray-400 flex items-center gap-2">
                                                <Calendar size={14} />
                                                {new Date(payment.createdAt).toLocaleDateString('tr-TR', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider">
                                                <CheckCircle2 size={12} />
                                                Tamamlandı
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filteredPayments.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="p-20 text-center text-gray-500">
                                            Henüz bir ödeme kaydı bulunamadı.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
