import React from 'react'
import { useTranslations } from 'next-intl'

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  const isTr = locale === 'tr'
  
  const content = isTr ? (
    <>
      <h1 className="text-3xl font-bold mb-8 text-white">İptal ve İade Politikası</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="mb-4 leading-relaxed">ArvexaLabs olarak sunduğumuz dijital yazılım, strateji ve kurulum hizmetlerinde Müşteri memnuniyetini en üst düzeyde tutmayı hedefleriz. Ancak elektronik ortamda teslim edilen ve iadesi teknik olarak mümkün olmayan hizmetler söz konusu olduğundan, aşağıdaki İptal ve İade Politikası uygulanmaktadır.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. İadenin Mümkün Olduğu Durumlar</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-300">Proje veya hizmet için ön ödeme yapıldıysa, ancak ArvexaLabs tarafından iş planlanmasına (Geliştirme/Kodlama süreci vb.) <strong className="text-white">henüz başlanmadıysa</strong> müşteri tamamen koşulsuz olarak siparişi iptal edebilir ve ödemenin %100’ünün iadesini talep edebilir.</li>
        <li className="text-gray-300">Şirketimizin yazılı olarak beyan ettiği somut bir teslimatı mazeretsiz olarak zamanında gerçekleştirememesi durumunda yapılan çalışmalara kadar olan tutar faturalandırılır, kalan kullanılmamış bakiye iade edilebilir.</li>
        </ul>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. İadenin Mümkün Olmadığı Durumlar</h2>
        <p className="mb-4 leading-relaxed">Dijital nitelikte olup şifresi iletilen, kurulumu yapılan ve kaynak kodu olarak hazırlıklarına başlanan ürünlerde şu durumlarda iade söz konusu değildir:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-300">Yayına alınmış internet siteleri ve yazılım projeleri.</li>
        <li className="text-gray-300">Bitiş tarihi veya teslimi gerçekleşen SEO analiz raporları ve optimizasyon stratejileri.</li>
        <li className="text-gray-300">Geliştirilmiş, tasarımı onaylanmış SaaS ve mobil uygulamalar.</li>
        </ul>
        <p className="mb-4 leading-relaxed">Müşteri onayı alındıktan sonra işleme alınmış ve harcanan mesaisi bulunan projelerde iptal bedeli "Harcanan Adam-Saat (Efor)" miktarı düşülerek hesaplanmaktadır.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. Üçüncü Taraf Giderleri</h2>
        <p className="mb-4 leading-relaxed">Yazılım projeleri için müşteri adına satın alınan Domain (Alan Adı), Hosting (Sunucu), SSL sertifikası, üçüncü parti API lisansları tamamen satıcı firmalar dışına ödenmiş maliyetler olduğundan, bu kalemlerin kesinlikle iadesi yapılamaz.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. İade İşlem Süresi</h2>
        <p className="mb-4 leading-relaxed">Onaylanmış iade talepleriniz, fatura ve kesinti işlemleri tamamlandıktan sonra muhasebe departmanımız tarafından en geç 14 iş günü içinde hizmeti satın aldığınız banka (kredi kartı veya EFT) hesabınıza aktarılır.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-500">
        <p>Son Güncelleme: 03.05.2026</p>
        <p>ArvexaLabs Dijital Çözümler</p>
      </div>
    </>
  ) : (
    <>
      <h1 className="text-3xl font-bold mb-8 text-white">Refund and Cancellation Policy</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="mb-4 leading-relaxed">At ArvexaLabs, we aim to keep Customer satisfaction at the highest level in our digital software, strategy, and installation services. However, since the services delivered in electronic environments are technically impossible to return in physical scope, the following Cancellation and Refund Policy applies.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. Situations where Refund is Possible</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-300">If an advance payment has been made for the project or service, but the workflow (Development/Coding process, etc.) <strong className="text-white">has not yet started</strong> by ArvexaLabs, the customer can definitively cancel the order unconditionally and request a 100% refund of the payment.</li>
        <li className="text-gray-300">In the event that our company fails to deliver a tangible product stated in writing on time without an excuse, the amount up to the work performed will be invoiced, and the remaining unused balance can be refunded.</li>
        </ul>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. Situations where Refund is Not Possible</h2>
        <p className="mb-4 leading-relaxed">There is no refund for digital products whose passwords have been transmitted, installed, and preparations initiated via source code in the following cases:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-300">Launched websites and software projects.</li>
        <li className="text-gray-300">Completed SEO analysis reports and optimization strategies.</li>
        <li className="text-gray-300">Developed, design-approved SaaS and mobile apps.</li>
        </ul>
        <p className="mb-4 leading-relaxed">In projects that have been processed and have spent effort hours after customer approval, the cancellation fee is calculated by deducting the amount of "Spent Man-Hours/Effort".</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. Third Party Expenses</h2>
        <p className="mb-4 leading-relaxed">Since costs such as Domain, Server/Hosting, SSL certificate, third-party API licenses purchased on behalf of the customer for software projects are entirely paid outside to vendor companies, these items are strictly non-refundable.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. Refund Processing Time</h2>
        <p className="mb-4 leading-relaxed">Your approved refund requests will be transferred by our accounting department to the bank (credit card or wire transfer) account from which you purchased the service within 14 business days at the latest after billing and deduction transactions are completed.</p>
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
