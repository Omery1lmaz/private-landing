'use client'

import React, { useState, useEffect } from 'react'
import { X, CreditCard, ShieldCheck, Sparkles, Loader2, Check, AlertCircle } from 'lucide-react'
import { useLocale } from 'next-intl'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  plan: {
    name: string
    price: number
    currency: string
  } | null
}

export default function PaymentModal({ isOpen, onClose, plan }: PaymentModalProps) {
  const locale = useLocale()
  const [loading, setLoading] = useState(false)
  const [iframeUrl, setIframeUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [step, setStep] = useState(1) // 1: Info, 2: Payment
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  useEffect(() => {
    if (!isOpen) {
      setStep(1)
      setIframeUrl(null)
      setError(null)
      setLoading(false)
    }
  }, [isOpen])

  if (!isOpen || !plan) return null

  const handleInitPayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Lütfen zorunlu alanları doldurun.')
      return
    }

    try {
      setLoading(true)
      const res = await fetch('/api/payment/init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: plan.price,
          planName: plan.name,
          userName: formData.name,
          userEmail: formData.email,
          userPhone: formData.phone,
          userAddress: formData.address,
          locale: locale
        })
      })

      const data = await res.json()

      if (data.success) {
        setIframeUrl(data.iframeUrl)
        setStep(2)
      } else {
        setError('Ödeme başlatılamadı: ' + (data.error || 'Bilinmeyen hata'))
      }
    } catch (err) {
      setError('Bir hata oluştu, lütfen tekrar deneyin.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#030308]/80 backdrop-blur-md transition-all duration-300">
      <div className={`relative w-full max-w-2xl overflow-hidden rounded-[32px] bg-[#0A0C10] border border-white/10 shadow-2xl transition-all duration-500 ${step === 2 ? 'max-w-4xl h-[90vh]' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 px-8 py-6 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <CreditCard size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Güvenli Ödeme</h2>
              <p className="text-sm text-gray-400">{plan.name} - {plan.currency}{plan.price}</p>
            </div>
          </div>
          <button onClick={onClose} className="rounded-2xl p-2 text-gray-500 hover:bg-white/5 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8 overflow-y-auto max-h-[calc(90vh-100px)]">
          {step === 1 ? (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Sparkles size={18} className="text-cyan-400" />
                    Müşteri Bilgileri
                  </h3>
                  <form className="space-y-4" id="payment-form" onSubmit={handleInitPayment}>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 ml-1">Ad Soyad *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:border-cyan-500/50 outline-none transition-all"
                        placeholder="Örn: Ahmet Yılmaz"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 ml-1">E-posta Adresi *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:border-cyan-500/50 outline-none transition-all"
                        placeholder="ahmet@sirket.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 ml-1">Telefon Numarası *</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:border-cyan-500/50 outline-none transition-all"
                        placeholder="05xx xxx xx xx"
                      />
                    </div>
                  </form>
                </div>

                <div className="space-y-6">
                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex gap-3 text-sm text-red-400 animate-in fade-in zoom-in duration-300">
                      <AlertCircle className="shrink-0" size={18} />
                      <p>{error}</p>
                    </div>
                  )}

                  <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/5">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 opacity-50">Sipariş Özeti</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-gray-300">
                        <span>{plan.name}</span>
                        <span className="font-bold text-white">{plan.currency}{plan.price}</span>
                      </div>
                      <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                        <span className="text-lg font-bold text-white">Toplam</span>
                        <span className="text-2xl font-black text-cyan-400">{plan.currency}{plan.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 flex gap-3 text-xs text-gray-400">
                    <ShieldCheck className="text-cyan-400 shrink-0" size={16} />
                    <p>Ödemeniz 256-bit SSL sertifikası ile korunmaktadır. Kart bilgileriniz asla sunucularımızda saklanmaz.</p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                form="payment-form"
                disabled={loading}
                className="w-full h-14 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    Ödemeye Geç <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="h-full min-h-[600px] w-full animate-in fade-in duration-700">
              <iframe 
                src={iframeUrl!} 
                className="w-full h-full min-h-[600px] border-none rounded-2xl"
                title="PayTR Payment"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ArrowRight({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
