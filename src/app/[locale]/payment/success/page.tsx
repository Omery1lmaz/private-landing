'use client'

import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-[#030308] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shadow-[0_0_50px_rgba(34,197,94,0.2)]">
            <CheckCircle2 size={48} />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white tracking-tight">Ödeme Başarılı!</h1>
          <p className="text-gray-400 leading-relaxed">
            İşleminiz başarıyla tamamlandı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
          </p>
        </div>

        <div className="pt-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all group"
          >
            Ana Sayfaya Dön <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
