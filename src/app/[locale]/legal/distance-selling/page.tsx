import React from 'react'
import { useTranslations } from 'next-intl'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const isTr = locale === 'tr'
  
  const content = isTr ? (
    <>
      <h1 className="text-3xl font-bold mb-8 text-white">Mesafeli Satış Sözleşmesi</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="mb-4 leading-relaxed">İşbu Mesafeli Satış Sözleşmesi (“Sözleşme”), alıcı (“Alıcı” veya “Müşteri”) ile satıcı (“Satıcı” veya “ArvexaLabs”) arasında elektronik ortamda kurulan ticari ilişkiyi düzenlemektedir. Bu Sözleşme, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümlerine uygun olarak düzenlenmiştir.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. Taraflar</h2>
        <p className="mb-4 leading-relaxed"><strong className="text-white">Satıcı:</strong> ArvexaLabs Dijital Yazılım Çözümleri</p>
        <p className="mb-4 leading-relaxed"><strong className="text-white">E-posta:</strong> hello@arvexalabs.com</p>
        <p className="mb-4 leading-relaxed"><strong className="text-white">Sözleşme Konusu:</strong> Web Geliştirme, Mobil Uygulama, SEO Danışmanlığı ve Kurumsal Yazılım Hizmetleri.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. Sözleşmenin Konusu</h2>
        <p className="mb-4 leading-relaxed">Bu Sözleşmenin konusu, Alıcı’nın Satıcı’ya ait web sitesinden veya kurumsal e-posta aracılığıyla elektronik ortamda siparişini yaptığı, fiyatı ve nitelikleri ayrı bir formda/faturada belirtilen dijital/yazılım hizmetlerinin satışı ve ifasıdır.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. Hizmet Bedeli ve Ödeme Koşulları</h2>
        <p className="mb-4 leading-relaxed">Dijital ürünlerin veya geliştirme projelerinin vergiler dahil toplam bedeli proforma faturada alıcıya bildirilir. Alıcı, sözleşmede kararlaştırılan ödeme planına (örn: projeye başlangıcında %50, teslimde %50 vb.) uymakla yükümlüdür. Kredi kartı, banka havalesi (EFT) aracılığıyla yapılan ödemelerin onaylanmasının ardından hizmetin ifa aşamasına/sprintlerine geçilir.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. İfa ve Teslimat Süreçleri</h2>
        <p className="mb-4 leading-relaxed">Sözleşmeye konu hizmetin teslim süreci, projenin büyüklüğüne bağlı olarak karşılıklı anlaşılan takvim çerçevesinde başlar. Satıcı, "Agile" vb. iteratif teslimat yöntemleri kullanabilir. Dijital teslimat e-posta, proje yönetim platformu (örn: GitHub, Asana) veya bulut ortamından yapılır.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">5. Cayma Hakkı</h2>
        <p className="mb-4 leading-relaxed"><strong className="text-white">DİKKAT:</strong> Elektronik ortamda anında ifa edilen hizmetler ve tüketiciye anında teslim edilen gayrimaddi mallar (Yazılım lisansları, kaynak kodlar, SEO araştırma analizleri vb.) mesafeli sözleşmeler çerçevesinde <strong className="text-white">cayma hakkının kullanılamayacağı istisnalar</strong> kategorisine girmektedir. Bu itibarla, yazılım ve tasarım kodlamaya/kuruluma başlandıktan sonra cayma hakkı bulunmamaktadır. İşleme başlanmamış olması şartıyla, ödemenin yapıldığı tarihten itibaren en geç 14 gün içinde sipariş iptal edilebilir.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">6. Uyuşmazlıkların Çözümü</h2>
        <p className="mb-4 leading-relaxed">Bu sözleşmeden doğan uyuşmazlıkların çözümünde, yasal sınırları dâhilinde Alıcı'nın veya Satıcı'nın ikametgâhındaki Tüketici Hakem Heyetleri veya Tüketici Mahkemeleri yetkilidir.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-500">
        <p>Son Güncelleme: 03.05.2026</p>
        <p>ArvexaLabs Dijital Çözümler</p>
      </div>
    </>
  ) : (
    <>
      <h1 className="text-3xl font-bold mb-8 text-white">Distance Selling Agreement</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="mb-4 leading-relaxed">This Distance Selling Agreement (“Agreement”) regulates the commercial relationship established electronically between the buyer (“Buyer” or “Customer”) and the seller (“Seller” or “ArvexaLabs”). This Agreement has been prepared in accordance with the provisions of Consumer Protection Laws regarding distance sales online.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. Parties</h2>
        <p className="mb-4 leading-relaxed"><strong className="text-white">Seller:</strong> ArvexaLabs Digital Software Solutions</p>
        <p className="mb-4 leading-relaxed"><strong className="text-white">E-mail:</strong> hello@arvexalabs.com</p>
        <p className="mb-4 leading-relaxed"><strong className="text-white">Subject:</strong> Web Development, Mobile Application, SEO Consultancy and Corporate Software Services.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. Subject of the Agreement</h2>
        <p className="mb-4 leading-relaxed">The subject of this Agreement is the sale and execution of digital/software services ordered by the Buyer electronically from the Seller's website or corporate e-mail, the price and qualities of which are specified in a separate form/invoice.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. Service Price and Payment Terms</h2>
        <p className="mb-4 leading-relaxed">The total price of digital products or development projects including taxes is notified to the buyer in the proforma invoice. The buyer is obliged to comply with the payment plan agreed in the contract (e.g. 50% at project start, 50% on delivery, etc.). Service execution/sprint phases begin following the confirmation of payments made via credit card, bank transfer (Wire/EFT).</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. Execution and Delivery Processes</h2>
        <p className="mb-4 leading-relaxed">The delivery process of the service subject to the contract begins within the framework of the mutually agreed calendar depending on the scale of the project. The seller can use iterative delivery methods like "Agile". Digital delivery is made via e-mail, project management platform, or cloud environments.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">5. Right of Withdrawal</h2>
        <p className="mb-4 leading-relaxed"><strong className="text-white">ATTENTION:</strong> Services performed instantly in an electronic environment and intangible goods delivered instantly to the consumer (Software licenses, source codes, SEO research analyses, etc.) fall into the category of <strong className="text-white">exceptions where the right of withdrawal cannot be exercised</strong> within the framework of distance contracts. Therefore, there is no right of withdrawal once software and design coding/installation has started. On the condition that the processing has not started, the order can be canceled within 14 days at the latest from the date of payment.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">6. Resolution of Disputes</h2>
        <p className="mb-4 leading-relaxed">Consumer Arbitration Committees or Consumer Courts in the legal jurisdictions of Turkey shall resolve conflicts.</p>
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
