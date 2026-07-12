'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { 
  ArrowLeft, 
  ShieldCheck, 
  CreditCard, 
  CheckCircle2, 
  Lock, 
  Globe, 
  Zap,
  Loader2,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const locale = useLocale()
  
  const planName = searchParams.get('plan')
  const price = searchParams.get('price')
  const currency = searchParams.get('currency') || '₺'

  const [loading, setLoading] = useState(false)
  const [iframeUrl, setIframeUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [step, setStep] = useState(1) // 1: Form, 2: Payment
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  // Redirect if no plan info
  useEffect(() => {
    if (!planName || !price) {
      router.push('/')
    }
  }, [planName, price, router])

  // Dynamic load of PayTR installment table script
  useEffect(() => {
    if (!price) return

    const cleanUp = () => {
      const existingScript = document.getElementById('paytr-taksit-script')
      if (existingScript) {
        existingScript.remove()
      }
      const container = document.getElementById('paytr_taksit_tablosu')
      if (container) {
        container.innerHTML = ''
      }
    }

    cleanUp()

    const script = document.createElement('script')
    script.id = 'paytr-taksit-script'
    script.src = `https://www.paytr.com/odeme/taksit-tablosu/v2?token=2fef5a06c8a9fd868050ae64e34336ebaf35f2ae5ecf9760d29469aba1881bd6&merchant_id=701207&amount=${parseInt(price)}&taksit=0&tumu=0`
    script.async = true

    const timer = setTimeout(() => {
      const targetDiv = document.getElementById('paytr_taksit_tablosu')
      if (targetDiv) {
        document.body.appendChild(script)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      cleanUp()
    }
  }, [price])

  if (!planName || !price) return null

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
          amount: parseInt(price),
          planName: planName,
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
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setError(data.reason || 'Ödeme başlatılamadı.')
      }
    } catch (err) {
      setError('Bir bağlantı hatası oluştu.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#030308] text-white selection:bg-cyan-500/30">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Side: Order Summary (Visible on mobile top, desktop right-ish) */}
        <div className="lg:w-[40%] bg-[#08080C] lg:order-2 border-l border-white/5 p-8 lg:p-16 flex flex-col justify-between">
          <div>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 text-sm font-medium group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Siteden Ayrıl
            </Link>

            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]">Sipariş Özeti</span>
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">{planName}</h1>
                <p className="text-gray-400 font-light">Dijital dönüşümünüz için ilk adımı atın.</p>
              </div>

              <div className="py-8 border-y border-white/5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Paket Tutarı</span>
                  <span className="font-medium">{currency}{parseInt(price).toLocaleString('tr-TR')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Vergiler</span>
                  <span className="text-gray-500">Dahil</span>
                </div>
                <div className="flex justify-between items-center pt-4 text-xl">
                  <span className="font-bold">Toplam</span>
                  <span className="font-black text-cyan-400">{currency}{parseInt(price).toLocaleString('tr-TR')}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <ShieldCheck className="text-cyan-400 shrink-0" size={20} />
                  <div>
                    <h4 className="text-sm font-bold">Güvenli Ödeme</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Ödemeniz 256-bit SSL ile şifrelenir. Kart bilgileriniz asla kaydedilmez.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Zap className="text-cyan-400 shrink-0" size={20} />
                  <div>
                    <h4 className="text-sm font-bold">Anında Onay</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Ödemeniz onaylandığı anda hizmet sürecimiz başlar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-6 opacity-30 grayscale filter">
            <img src="https://www.paytr.com/img/paytr-logo.png" alt="PayTR" className="h-6" />
            <div className="flex gap-2">
              <div className="w-8 h-5 bg-white/20 rounded-sm" />
              <div className="w-8 h-5 bg-white/20 rounded-sm" />
              <div className="w-8 h-5 bg-white/20 rounded-sm" />
            </div>
          </div>
        </div>

        {/* Right Side: Checkout Form / iFrame */}
        <div className="lg:w-[60%] lg:order-1 p-8 lg:p-24 flex flex-col items-center">
          <div className="w-full max-w-xl">
            {step === 1 ? (
              <div className="space-y-10 animate-in fade-in slide-in-from-left-4 duration-700">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Ödeme Bilgileri</h2>
                  <p className="text-gray-400">Lütfen faturanız ve iletişim için bilgileri doldurun.</p>
                </div>

                <form onSubmit={handleInitPayment} className="space-y-6">
                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex gap-3 text-sm text-red-400">
                      <AlertCircle className="shrink-0" size={18} />
                      <p>{error}</p>
                    </div>
                  )}

                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">Ad Soyad / Firma Ünvanı *</label>
                      <input 
                        required
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:border-cyan-500/50 focus:bg-white/[0.08] outline-none transition-all placeholder:text-gray-600"
                        placeholder="Örn: Ahmet Yılmaz"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">E-posta Adresi *</label>
                      <input 
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:border-cyan-500/50 focus:bg-white/[0.08] outline-none transition-all placeholder:text-gray-600"
                        placeholder="ahmet@sirket.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">Telefon Numarası *</label>
                      <input 
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:border-cyan-500/50 focus:bg-white/[0.08] outline-none transition-all placeholder:text-gray-600"
                        placeholder="05xx xxx xx xx"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">Adres (Fatura için)</label>
                      <textarea 
                        rows={3}
                        value={formData.address}
                        onChange={e => setFormData({...formData, address: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-cyan-500/50 focus:bg-white/[0.08] outline-none transition-all placeholder:text-gray-600 resize-none"
                        placeholder="Fatura adresi..."
                      />
                    </div>
                  </div>

                  <button
                    disabled={loading}
                    className="w-full h-16 bg-white text-black font-bold rounded-2xl hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        <Lock size={18} />
                        Ödemeye Geç
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-xs text-gray-500">
                    Devam ederek <Link href="/legal/terms" className="underline">Kullanım Koşullarını</Link> kabul etmiş olursunuz.
                  </p>
                </form>
              </div>
            ) : (
              <div className="w-full h-full min-h-[700px] animate-in fade-in zoom-in duration-700">
                <div className="mb-8 flex items-center justify-between">
                   <button onClick={() => setStep(1)} className="text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                     <ArrowLeft size={14} /> Bilgileri Güncelle
                   </button>
                   <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
                     <Lock size={14} /> Güvenli Bağlantı
                   </div>
                </div>
                <iframe 
                  src={iframeUrl!} 
                  className="w-full h-[700px] border-none bg-transparent rounded-3xl shadow-2xl shadow-cyan-500/5"
                  title="PayTR Payment"
                />
              </div>
            )}

            {/* Taksit Tablosu */}
            <div className="mt-12 pt-12 border-t border-white/5 space-y-6">
              <div className="flex items-center gap-2">
                <CreditCard className="text-cyan-400" size={18} />
                <h3 className="text-sm font-bold tracking-wider uppercase text-gray-400">Taksit Seçenekleri</h3>
              </div>
              <div id="paytr_taksit_tablosu" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* PayTR Installment Table Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        #paytr_taksit_tablosu {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
          justify-content: center;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          width: 100%;
        }
        .taksit-tablosu-wrapper {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 16px;
          backdrop-filter: blur(12px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
        }
        .taksit-tablosu-wrapper:hover {
          border-color: rgba(6, 182, 212, 0.3);
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -15px rgba(6, 182, 212, 0.15);
        }
        .taksit-logo {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 36px;
          margin-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 8px;
        }
        .taksit-logo img {
          max-height: 24px;
          object-fit: contain;
          filter: brightness(0) invert(1) opacity(0.85);
          transition: filter 0.3s;
        }
        .taksit-tablosu-wrapper:hover .taksit-logo img {
          filter: brightness(0) invert(1) opacity(1);
        }
        .taksit-baslik {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          padding: 0 4px;
        }
        .taksit-tutari-text {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.4);
        }
        .taksit-tutar-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 8px;
          padding: 8px 12px;
          margin-bottom: 6px;
          transition: all 0.2s;
        }
        .taksit-tutar-wrapper:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .taksit-tutari {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
        }
        .taksit-tutar-wrapper.taksit-tutari-bold {
          background: rgba(6, 182, 212, 0.05);
          border-color: rgba(6, 182, 212, 0.15);
        }
        .taksit-tutar-wrapper.taksit-tutari-bold .taksit-tutari {
          font-weight: 700;
          color: #22d3ee;
        }
        @media all and (max-width: 600px) {
          .taksit-tablosu-wrapper {
            margin: 6px 0;
            max-width: 100%;
          }
        }
      `}} />
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#030308] flex items-center justify-center">
        <Loader2 className="animate-spin text-cyan-500" size={40} />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  )
}
