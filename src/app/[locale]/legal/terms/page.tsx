import React from 'react'
import { useTranslations } from 'next-intl'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const isTr = locale === 'tr'
  
  const content = isTr ? (
    <>
      <h1 className="text-3xl font-bold mb-8 text-white">Kullanım Koşulları</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="mb-4 leading-relaxed">Bu Kullanım Koşulları sözleşmesi ("Sözleşme"), ArvexaLabs ("Şirket") ile kullanıcısı ("Kullanıcı") arasında, ArvexaLabs dijital platformunun kullanım kurallarını düzenler. Sitemizi ziyaret ederek bu koşulları kabul etmiş sayılırsınız.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. Hizmet Kapsamı</h2>
        <p className="mb-4 leading-relaxed">ArvexaLabs; web mimarisi, bulut tabanlı yazılım (SaaS), SEO stratejisi, dijital pazarlama ve mobil uygulama alanında danışmanlık ve yazılım geliştirme hizmetleri sunar. Hizmetlerin fiyatlandırılması, teslim süreleri ve operasyonel detaylar her proje öncesinde karşılıklı olarak mutabık kalınan Teklif Belgesi (Proforma Fatura) ile sabitlenir.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. Kullanıcı Yükümlülükleri</h2>
        <p className="mb-4 leading-relaxed">Kullanıcı, web sitesini kullanırken yasalara, genel ahlak kurallarına ve burada yer alan şartlara uygun davranmayı kabul eder. Siteye ve sistemlere zarar verecek (virüs, siber saldırı, spam vb.) herhangi bir harekette bulunulması yasaktır. Geliştirilen yazılımların ve sunulan SEO tekniklerinin yasadışı süreçlerde kullanılması durumunda tüm hukuki sorumluluk Kullanıcıya aittir.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. Fikri ve Sınai Mülkiyet Hakları</h2>
        <p className="mb-4 leading-relaxed">ArvexaLabs web sitesindeki her türlü metin, tasarım, algoritma, grafik, logo, yazılım ve ticari marka aksi belirtilmedikçe ArvexaLabs’a aittir. Projeler bazında teslim edilen lisanslar sadece sözleşme koşullarında belirlenen oranda alıcıya geçer. Herhangi bir izinsiz kopyalama veya tersine mühendislik (reverse engineering) doğrudan tarafımızca ihlal sayılır.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. Hizmet Kesintileri</h2>
        <p className="mb-4 leading-relaxed">Şirket, altyapı güncellemeleri veya sunucu bakımları nedeniyle sitemizin veya sunulan SaaS hizmetlerinin kullanımında kısa süreli kesintiler yaşanabileceğini beyan eder ve bundan dolayı sorumlu tutulamaz.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">5. Uygulanacak Hukuk ve Yetki</h2>
        <p className="mb-4 leading-relaxed">Bu sözleşmeden doğabilecek her türlü ihtilaflarda Türkiye Cumhuriyeti kanunları uygulanacaktır. Sözleşmenin uygulanmasından ve yorumlanmasından doğan itilafların çözümünde İstanbul Çağlayan Mahkemeleri ve İcra Daireleri yetkilidir.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-500">
        <p>Son Güncelleme: 03.05.2026</p>
        <p>ArvexaLabs Dijital Çözümler</p>
      </div>
    </>
  ) : (
    <>
      <h1 className="text-3xl font-bold mb-8 text-white">Terms of Service</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="mb-4 leading-relaxed">This Terms of Service ("Agreement") governs the rules of use of the ArvexaLabs digital platform between ArvexaLabs ("Company") and its user ("User"). By visiting our site, you agree to these terms.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. Scope of Service</h2>
        <p className="mb-4 leading-relaxed">ArvexaLabs provides consultancy and software development services in web architecture, cloud-based software (SaaS), SEO strategy, digital marketing, and mobile applications. Pricing, delivery times, and operational details of the services are fixed with the Proposal Document (Proforma Invoice) mutually agreed upon before each project.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. User Obligations</h2>
        <p className="mb-4 leading-relaxed">The user agrees to comply with the laws, general moral rules, and the terms contained herein while using the website. Any action that may damage the site and systems (virus, cyber attack, spam, etc.) is strictly prohibited. All legal responsibility belongs to the User in case the developed software and SEO techniques are used in illegal processes.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. Intellectual and Industrial Property Rights</h2>
        <p className="mb-4 leading-relaxed">All texts, designs, algorithms, graphics, logos, software, and trademarks on the ArvexaLabs website belong to ArvexaLabs unless stated otherwise. Licenses delivered on a project basis pass to the buyer only at the rate specified in the contract conditions. Any unauthorized copying or reverse engineering is directly considered an infringement.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. Service Interruptions</h2>
        <p className="mb-4 leading-relaxed">The company declares that short-term interruptions may occur in the use of our site or the SaaS services offered due to infrastructure updates or server maintenance and cannot be held responsible for this.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">5. Governing Law and Jurisdiction</h2>
        <p className="mb-4 leading-relaxed">The laws of the Republic of Turkey will be applied in any dispute that may arise from this contract. Istanbul Caglayan Courts and Enforcement Offices are exclusively authorized to resolve any disputes arising from the implementation and interpretation of this contract.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-500">
        <p>Last Updated: 03.05.2026</p>
        <p>ArvexaLabs Digital Solutions</p>
      </div>
    </>
  )

  return (
    <div className="legal-content">
      {content}
    </div>
  )
}
