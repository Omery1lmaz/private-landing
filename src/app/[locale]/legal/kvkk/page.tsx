import React from 'react'
import { useTranslations } from 'next-intl'

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  const isTr = locale === 'tr'
  
  const content = isTr ? (
    <>
      <h1 className="text-3xl font-bold mb-8 text-white">KVKK Aydınlatma Metni</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="mb-4 leading-relaxed">ArvexaLabs olarak kişisel verilerinizin gizliliğini ve güvenliğini önemsemekte, elde edilen kişisel verilerinizi 6698 Sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca Veri Sorumlusu sıfatıyla büyük bir hassasiyet ile saklamaktayız. Bu metin, verilerinizin ne şekilde işlendiğini ve yasal haklarınızı ortaya koyar.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. Kişisel Verilerin Toplanması ve İşlenmesi</h2>
        <p className="mb-4 leading-relaxed">Toplanan kişisel verileriniz (Ad, Soyad, Kurumsal E-Posta, Telefon numarası ve site üzerindeki navigasyon hareketleriniz vb.) hizmetlerimizi ifa edebilmemiz, sizinle iletişime geçebilmemiz ve iş ilişkilerimizi yürütebilmemiz için doğrudan tarafınızca doldurulan formlardan, tarayıcınızdan iletilen çerezlerden (Cookies) otomatik olarak toplanır.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. Kişisel Veri İşlemenin Hukuki Sebepleri</h2>
        <p className="mb-4 leading-relaxed">Toplanan verileriniz KVKK 5/2 (c) maddesi gereği "Sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olmak", (f) maddesi gereği "İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri" uyarınca rıza aranmaksızın yasal bir hakka dayanarak işlenmektedir. Tarafımıza iletilen ekstra ve gereksiz sağlık vb. özel nitelikli kişisel veriler ise derhal sistemden silinmektedir.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. Verilerin Kimler ile Paylaşılabileceği</h2>
        <p className="mb-4 leading-relaxed">Kişisel verileriniz siber güvenliğin sağlanması, sunucuların yedeklenmesi maksadıyla yurtiçi/yurtdışında konumlanmış güvendiğimiz teknoloji sağlayıcılarımızla (Google, Cloudflare, Amazon AWS) ve kanuni zorunluluklar gereği düzenleyici/denetleyici resmi makamlarla paylaşılabilir. Bunun dışında verileriniz kiralama, satma gibi işlemlere tabi tutulmaz.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. Veri Sahibinin Hakları</h2>
        <p className="mb-4 leading-relaxed">KVKK md.11 kapsamındaki her veri sahibi;</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-300">Kişisel verisinin işlenip işlenmediğini öğrenme,</li>
        <li className="text-gray-300">Bilgi talep etme,</li>
        <li className="text-gray-300">Hatalı veya eksik kişisel verilerin düzeltilmesini isteme,</li>
        <li className="text-gray-300">Kişisel verilerin KVKK çerçevesinde silinmesine veya anonim edilmesine ilişkin taleplerde bulunma haklarına sahiptir.</li>
        </ul>
        <p className="mb-4 leading-relaxed">Bu haklarınızla ilgili başvuruyu <strong className="text-white">hello@arvexalabs.com</strong> aracılığıyla yapabilirsiniz.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-500">
        <p>Son Güncelleme: 03.05.2026</p>
        <p>ArvexaLabs Dijital Çözümler</p>
      </div>
    </>
  ) : (
    <>
      <h1 className="text-3xl font-bold mb-8 text-white">PDPL (KVKK) Privacy Notice</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="mb-4 leading-relaxed">As ArvexaLabs, we care about the privacy and security of your personal data, and we store your personal data obtained with great sensitivity in the capacity of Data Controller in accordance with the Law on the Protection of Personal Data No. 6698 (“KVKK” / GDPR). This text outlines how your data is processed and your legal rights.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. Collection and Processing of Personal Data</h2>
        <p className="mb-4 leading-relaxed">Your collected personal data (Name, Surname, Corporate E-Mail, Phone number and navigation actions on the site, etc.) are automatically collected from the forms filled out directly by you, and cookies transmitted from your browser so that we can perform our services, contact you, and carry out our business relations.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. Legal Reasons for Processing Personal Data</h2>
        <p className="mb-4 leading-relaxed">Your collected data is processed on the basis of a legal right without the need for consent, pursuant to Article 5/2 (c) of the KVKK "Being directly related to the establishment or performance of the contract" and Article (f) "The legitimate interests of the data controller, provided that it does not harm the fundamental rights and freedoms of the data subject". Extra and unnecessary special categories of personal data (like health) transmitted to us are immediately deleted from the system.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. Who Data Can Be Shared With</h2>
        <p className="mb-4 leading-relaxed">Your personal data may be shared with our trusted technology providers located domestically/abroad (like Google, Cloudflare, Amazon AWS) for ensuring cyber security and backing up servers, and with regulatory/supervisory official authorities due to legal obligations. Apart from this, your data is not subject to lending, selling, etc.</p>
        <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. Rights of the Data Subject</h2>
        <p className="mb-4 leading-relaxed">Every data subject within the scope of GDPR and KVKK art.11 has the rights to;</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
        <li className="text-gray-300">Learn whether their personal data is processed,</li>
        <li className="text-gray-300">Request information,</li>
        <li className="text-gray-300">Request correction of incorrect or incomplete personal data,</li>
        <li className="text-gray-300">Make requests regarding the deletion or anonymization of personal data.</li>
        </ul>
        <p className="mb-4 leading-relaxed">You can apply via <strong className="text-white">hello@arvexalabs.com</strong> regarding these rights.</p>
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
