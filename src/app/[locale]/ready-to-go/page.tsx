'use client'

import React, { useState, useEffect } from 'react'
import { Check, ArrowRight, Layout, ShoppingCart, Search, Filter, Sparkles, Globe, Monitor, Smartphone, Zap } from 'lucide-react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import gsap from 'gsap'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const products = [
    {
        id: 1,
        name: "Modern Kurumsal V1",
        category: "Corporate",
        price: "5.900",
        desc: "Şık, hızlı ve güvenilir kurumsal kimlik çözümü.",
        features: ["Multi-page", "CMS Paneli", "SEO Uyumluluk"],
        color: "cyan"
    },
    {
        id: 2,
        name: "E-Ticaret Starter",
        category: "E-Commerce",
        price: "9.900",
        desc: "Ürünlerinizi satmaya hemen başlayın.",
        features: ["Ödeme Entegrasyonu", "Stok Takibi", "Üye Paneli"],
        color: "teal"
    },
    {
        id: 3,
        name: "Diş Hekimi Özel",
        category: "Health",
        price: "7.500",
        desc: "Randevu odaklı, steril ve profesyonel tasarım.",
        features: ["Online Randevu", "Hizmet Sayfaları", "Mobil Uyum"],
        color: "blue"
    },
    {
        id: 4,
        name: "Avukat & Hukuk",
        category: "Professional",
        price: "7.500",
        desc: "Prestijli ve ciddi bir dijital duruş.",
        features: ["Makale Modülü", "Danışmanlık Formu", "SSL Güvenlik"],
        color: "indigo"
    },
    {
        id: 5,
        name: "Diyetisyen & Blog",
        category: "Health",
        price: "6.900",
        desc: "Sağlıklı yaşam ve danışmanlık platformu.",
        features: ["VKI Hesaplayıcı", "Blog Sistemi", "Form Yönetimi"],
        color: "green"
    },
    {
        id: 6,
        name: "Güzellik Merkezi",
        category: "Beauty",
        price: "8.500",
        desc: "Estetik ve hizmet odaklı premium tasarım.",
        features: ["Galeri Modülü", "Hizmet Kartları", "Instagram Feed"],
        color: "pink"
    },
    {
        id: 7,
        name: "Emlak Portalı",
        category: "Real Estate",
        price: "12.900",
        desc: "İlanlarınızı kolayca yönetin ve sergileyin.",
        features: ["Gelişmiş Filtreleme", "Harita Entegrasyonu", "İlan Paneli"],
        color: "orange"
    },
    {
        id: 8,
        name: "Restoran & QR Menü",
        category: "Food",
        price: "6.500",
        desc: "Lezzetinizi dijital dünyaya taşıyın.",
        features: ["Online Menü", "Rezervasyon", "Lokasyon Bazlı"],
        color: "red"
    },
    {
        id: 9,
        name: "Oto Galeri",
        category: "Auto",
        price: "9.500",
        desc: "Araç ilanları için optimize edilmiş altyapı.",
        features: ["Araç Karşılaştırma", "Teknik Detaylar", "WhatsApp Teklif"],
        color: "zinc"
    },
    {
        id: 10,
        name: "Mimarlık Portfolyo",
        category: "Creative",
        price: "10.500",
        desc: "Projelerinizi yüksek kalitede sergileyin.",
        features: ["Full-width Galeri", "Proje Detay", "Minimal Tasarım"],
        color: "emerald"
    },
    {
        id: 11,
        name: "Eğitim & Kurs",
        category: "Education",
        price: "11.900",
        desc: "Bilginizi online dünyaya aktarın.",
        features: ["Eğitmen Paneli", "Ders Yönetimi", "Sertifika Modülü"],
        color: "violet"
    },
    {
        id: 12,
        name: "Spor Salonu & Gym",
        category: "Fitness",
        price: "7.900",
        desc: "Üyelerinize modern bir deneyim sunun.",
        features: ["Program Kartları", "Eğitmen Tanıtım", "Üyelik Formları"],
        color: "yellow"
    },
    {
        id: 13,
        name: "Dernek & Vakıf",
        category: "NGO",
        price: "5.500",
        desc: "Topluluğunuzla bağınızı güçlendirin.",
        features: ["Bağış Entegrasyonu", "Etkinlik Takvimi", "Duyurular"],
        color: "sky"
    },
    {
        id: 14,
        name: "Haber & Portal",
        category: "Media",
        price: "6.900",
        desc: "Hızlı ve dinamik içerik paylaşımı.",
        features: ["Kategori Yönetimi", "Reklam Alanları", "Anlık Bildirim"],
        color: "rose"
    },
    {
        id: 15,
        name: "Kişisel CV & Portfolio",
        category: "Personal",
        price: "5.000",
        desc: "Kariyerinizde fark yaratacak dijital kartvizit.",
        features: ["Deneyim Zaman Çizelgesi", "Beceri Barları", "PDF İndirme"],
        color: "fuchsia"
    },
    {
        id: 16,
        name: "Lojistik & Nakliye",
        category: "Logistics",
        price: "8.900",
        desc: "Global taşıma çözümleri için profesyonel yapı.",
        features: ["Teklif Al Formu", "Takip Sistemi", "Hizmet Haritası"],
        color: "slate"
    },
    {
        id: 17,
        name: "Temizlik Hizmetleri",
        category: "Services",
        price: "5.900",
        desc: "Hizmetlerinizi ve paketlerinizi net bir şekilde sunun.",
        features: ["Hizmet Paketleri", "Bölge Seçimi", "Hızlı Rezervasyon"],
        color: "lime"
    },
    {
        id: 18,
        name: "Düğün & Etkinlik",
        category: "Events",
        price: "7.500",
        desc: "En özel günleriniz için dijital davetiye ve anılar.",
        features: ["Geri Sayım Sayacı", "Lale/Lcv Formu", "Fotoğraf Galerisi"],
        color: "amber"
    },
    {
        id: 19,
        name: "Pet Shop & Veteriner",
        category: "Animals",
        price: "7.900",
        desc: "Sevimli dostlarımız için dijital çözümler.",
        features: ["Ürün Katalog", "Randevu Sistemi", "Blog Yazıları"],
        color: "orange"
    },
    {
        id: 20,
        name: "Teknik Servis",
        category: "Repair",
        price: "8.500",
        desc: "Arıza kaydı ve servis takibi için ideal altyapı.",
        features: ["Arıza Formu", "Marka/Model Seçimi", "Süreç Takibi"],
        color: "cyan"
    }
]

export default function ReadyMadePage() {
    const locale = useLocale()
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')

    const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]

    const filteredProducts = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             p.category.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    useEffect(() => {
        gsap.fromTo(".product-card", 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power3.out" }
        )
    }, [filteredProducts])

    return (
        <main className="min-h-screen bg-[#030406] text-white selection:bg-cyan-500/30 relative">
            <Navbar />
            
            {/* Global Scroll Progress */}
            <div
                id="scroll-progress"
                className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 origin-left scale-x-0 animate-[scrollProgress_1s_linear_initial] [animation-timeline:scroll()]"
            />

            {/* Ambient Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
                        <Sparkles className="w-4 h-4" />
                        Hazır Web Çözümleri
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                        İşinizi <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Bugün</span> Dijitalleştirin
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                        Sektörünüze özel hazırlanmış, 24 saat içinde teslim alabileceğiniz profesyonel web sistemleri. 
                        Kodlama derdi yok, beklemek yok.
                    </p>
                </div>

                {/* Search & Filter */}
                <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative flex-1 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                        <input 
                            type="text"
                            placeholder="Sektör veya paket ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.08] transition-all"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar max-w-full">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === cat ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                            >
                                {cat === 'All' ? 'Tümü' : cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
                    {filteredProducts.map((product) => (
                        <div 
                            key={product.id}
                            className="product-card group relative flex flex-col bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/5"
                        >
                            {/* Icon & Category */}
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${product.color}-500/10 border border-${product.color}-500/20 text-${product.color}-400`}>
                                    <Layout className="w-6 h-6" />
                                </div>
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                    {product.category}
                                </span>
                            </div>

                            {/* Info */}
                            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{product.name}</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                                {product.desc}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {product.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                                        <Check className={`w-4 h-4 text-${product.color}-400`} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            {/* Bottom */}
                            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Başlangıç</span>
                                    <span className="text-2xl font-bold">₺{product.price}</span>
                                </div>
                                <Link 
                                    href={`/${locale}/checkout?plan=${encodeURIComponent(product.name)}&price=${product.price.replace(/[^0-9]/g, '')}&currency=₺`}
                                    className={`p-3 rounded-xl bg-${product.color}-500 text-black hover:scale-110 transition-all shadow-lg shadow-${product.color}-500/20`}
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-6">
                            <Search className="w-10 h-10 text-gray-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Sonuç bulunamadı</h3>
                        <p className="text-gray-500">Arama kriterlerinize uygun paket bulamadık. Farklı bir terim deneyebilirsiniz.</p>
                    </div>
                )}

                {/* Footer Info */}
                <div className="mt-32 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-white/5 pt-20">
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-6">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold">Anında Kurulum</h4>
                        <p className="text-gray-400 text-sm">Ödemeniz onaylandığı an sisteminiz hazırlanmaya başlar ve 24 saat içinde teslim edilir.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-6">
                            <Globe className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold">Bulut Altyapı</h4>
                        <p className="text-gray-400 text-sm">Siteniz dünyanın en hızlı sunucularında, SSL sertifikası dahil güvenle barındırılır.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-6">
                            <Monitor className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold">Tam Destek</h4>
                        <p className="text-gray-400 text-sm">Teknik konularda 7/24 yanınızdayız. Yönetim paneli eğitimimiz ile siteniz kontrolünüzde.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
