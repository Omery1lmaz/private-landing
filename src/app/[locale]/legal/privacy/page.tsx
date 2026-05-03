import React from 'react'
import { useTranslations } from 'next-intl'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const isTr = locale === 'tr'
  
  const content = isTr ? (
    <>
      <h1 className="text-3xl font-bold mb-8 text-white">Gizlilik Politikası</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="mb-4 leading-relaxed">Bu Gizlilik Politikası, ArvexaLabs kullanıcılarının ("Kullanıcı") kişisel verilerinin 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili diğer mevzuat uyarınca işlenmesi, korunması ve kullanılması ile ilgili usul ve esasları belirlemektedir.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. Veri Sorumlusu</h2>
        <p className="mb-4 leading-relaxed">Sitemiz ve hizmetlerimiz kapsamında paylaştığınız kişisel verileriniz açısından Veri Sorumlusu ArvexaLabs'tır. Verileriniz hukuka ve dürüstlük kurallarına uygun olarak işlenmektedir.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. Hangi Kişisel Verilerinizi İşliyoruz?</h2>
        <p className="mb-4 leading-relaxed">Aşağıdaki kişisel veri kategorileri sistemlerimiz tarafından toplanmakta ve işlenmektedir:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-300"><strong className="text-white">Kimlik ve İletişim Bilgileri:</strong> Ad, Soyad, Telefon Numarası, E-Posta Adresi, Şirket Unvanı vb.</li>
        <li className="text-gray-300"><strong className="text-white">Müşteri İşlem Bilgileri:</strong> Talep edilen hizmetler, sipariş geçmişi, proforma fatura detayları.</li>
        <li className="text-gray-300"><strong className="text-white">İşlem Güvenliği Verileri:</strong> IP adresiniz, erişim tarihi ve saati, cihaz ve tarayıcı bilgileri.</li>
        <li className="text-gray-300"><strong className="text-white">Pazarlama Verileri:</strong> Çerez kayıtları, kullanım alışkanlıkları ve kampanya kullanım verileri.</li>
        </ul>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
        <p className="mb-4 leading-relaxed">Toplanan verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-300">Sözleşmeye konu hizmetlerin (Web Geliştirme, SEO, Mobil Uygulama vb.) ifa edilebilmesi.</li>
        <li className="text-gray-300">Randevu, toplantı ve destek taleplerinizin yönetilmesi.</li>
        <li className="text-gray-300">İletişim kaynaklarının sağlanması ve sorularınıza yanıt verilmesi.</li>
        <li className="text-gray-300">Kullanıcı deneyiminin analiz edilip sitenin ve hizmetlerin kalitesinin artırılması.</li>
        <li className="text-gray-300">Hukuki ve yasal yükümlülüklerimizin yerine getirilmesi.</li>
        </ul>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. Kişisel Verilerin Aktarımı</h2>
        <p className="mb-4 leading-relaxed">Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi kapsamında; yurt içindeki/yurt dışındaki hizmet sağlayıcılarımıza (Cloudflare, AWS, Google, vb. bulut sunucu sistemleri), ödeme altyapısı sağlayıcılarına ve gerektiğinde adli/idari makamlara aktarılabilir.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">5. Çerezler (Cookies)</h2>
        <p className="mb-4 leading-relaxed">Web sitemiz daha iyi bir kullanıcı deneyimi sunabilmek için çerezler kullanmaktadır. Çerez kullanımını tarayıcınızın ayarlarından istediğiniz zaman devre dışı bırakabilirsiniz.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">6. Haklarınız</h2>
        <p className="mb-4 leading-relaxed">KVKK’nın 11. maddesi uyarınca, veri sahibi olarak kişisel verilerinizin işlenip işlenmediğini öğrenme, güncellenmesini, silinmesini veya anonimleştirilmesini talep etme hakkına sahipsiniz. Başvurularınızı hello@arvexalabs.com adresinden yapabilirsiniz.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-500">
        <p>Son Güncelleme: 03.05.2026</p>
        <p>ArvexaLabs Dijital Çözümler</p>
      </div>
    </>
  ) : (
    <>
      <h1 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="mb-4 leading-relaxed">This Privacy Policy determines the procedures and principles regarding the processing, protection, and use of personal data of ArvexaLabs users ("User") in accordance with the Personal Data Protection Law ("PDPL" or "KVKK") and GDPR where applicable.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. Data Controller</h2>
        <p className="mb-4 leading-relaxed">Regarding the personal data you share within the scope of our website and services, the Data Controller is ArvexaLabs. Your data is processed in accordance with the law and honesty rules.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. Which Personal Data Do We Process?</h2>
        <p className="mb-4 leading-relaxed">The following categories of personal data are collected and processed:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-300"><strong className="text-white">Identity and Contact Information:</strong> Name, Surname, Phone Number, E-Mail Address, Company Name, etc.</li>
        <li className="text-gray-300"><strong className="text-white">Customer Transaction Information:</strong> Requested services, order history, proforma invoice details.</li>
        <li className="text-gray-300"><strong className="text-white">Transaction Security Data:</strong> Your IP address, date and time of access, device and browser information.</li>
        <li className="text-gray-300"><strong className="text-white">Marketing Data:</strong> Cookie records, usage habits, and campaign usage data.</li>
        </ul>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. Purposes of Processing Personal Data</h2>
        <p className="mb-4 leading-relaxed">Your collected data is processed for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-300">Execution of services subject to the contract (Web Development, SEO, Mobile App, etc.).</li>
        <li className="text-gray-300">Management of your appointment, meeting, and support requests.</li>
        <li className="text-gray-300">Providing communication tracking and responding to your inquiries.</li>
        <li className="text-gray-300">Analyzing the user experience to increase the quality of the site and services.</li>
        <li className="text-gray-300">Fulfilling our legal and statutory obligations.</li>
        </ul>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. Transfer of Personal Data</h2>
        <p className="mb-4 leading-relaxed">Your personal data may be transferred to our domestic/overseas service providers (Cloudflare, AWS, Google, and other cloud server systems), payment infrastructure providers, and judicial/administrative authorities when necessary to fulfill the operational business actions.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">5. Cookies</h2>
        <p className="mb-4 leading-relaxed">Our website uses cookies to provide a better user experience. You can disable the use of cookies at any time from your browser's settings.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">6. Your Rights</h2>
        <p className="mb-4 leading-relaxed">In accordance with GDPR and KVKK Article 11, you have the right to learn whether your personal data is processed, request its update, deletion, or anonymization. You can make your requests via hello@arvexalabs.com.</p>
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
