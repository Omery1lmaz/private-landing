# Web Development Page Component Breakdown

This document provides a detailed breakdown of all components used in the `/services/web-dev` page, including their text content, design choices, and technical implementations.

---

## 1. WebDevHero
**File:** `src/app/[locale]/services/web-dev/components/WebDevHero.tsx`

### Text Content (TR)
- **Badge:** "Yeni Nesil Web Sistemleri"
- **Heading:** "İşinizi Taşıyan Modern Web Sistemleri"
- **Subtitle:** "Kurumsal web sitelerinden ürün ve SaaS platformlarına kadar, kullanıcı, operasyon ve büyüme odaklı web altyapıları tasarlıyor ve geliştiriyoruz."
- **Support Label:** "Tasarımıyla etkileyen, altyapısıyla işi taşıyan sistemler."
- **CTA Button:** "Projenizi Konuşalım"
- **Micro-copy:** "Nereden başlayacağınızı birlikte netleştirelim."

### Service Cards
1. **Kurumsal Web Sistemleri:** "Güven veren, yönetilebilir ve uzun vadeli yapılar."
2. **Ürün & SaaS Platformları:** "Kullanıcı kazandıran, büyümeye hazır sistemler."
3. **Satış & E-Ticaret Altyapıları:** "Satışı destekleyen, süreci sadeleştiren platformlar."
4. **Özel Dijital Çözümler:** "Standartların yetmediği işler için özel kurgular."

### Design & Tech
- **Theme:** High-end tech aesthetic with dark backgrounds and cyan/blue accents.
- **Animations:**
  - **GSAP:** Entrance animations for text and cards (`y: 40`, `opacity: 0`).
  - **Aurora Beams:** Large glowing background gradients that rotate and scale.
  - **3D Effect:** Perspective grid floor and mouse-tracking parallax on background orbs.
  - **Cards:** Shimmering borders and hover-up effects.

---

## 2. WebDevProblemSolution
**File:** `src/app/[locale]/services/web-dev/components/WebDevProblemSolution.tsx`

### Text Content
- **Header Badge:** "Stratejik Dönüşüm"
- **Heading:** "Web Sitesi Değil, İşinizi Taşıyan Bir Sistem Kurun"
- **Subline:** "Birçok proje yayına alınır. Azı gerçekten işin bir parçası haline gelir."

#### Bugünü Kurtaran Yapılar (Problem)
- **Subtitle:** "(Kısa Vadeli, Şablon Çözümler)"
- **Items:**
  - "Her sektör için aynı kalıpta hazırlanmış sayfalar"
  - "İlk ay sorunsuz, büyüdükçe yavaşlayan altyapı"
  - "Basit bir değişiklik için bile dışa bağımlılık"
  - "Operasyonu zorlaştıran, kimsenin sevmediği paneller"
  - "Uzun vadede zaman ve maliyet kaybı"
- **Status:** "Sınırları Olan"

#### Yarın İçin Tasarlanan Altyapı (Solution)
- **Subtitle:** "(Uzun Vadeli, Stratejik Sistemler)"
- **Status:** "Ölçeklenebilir & Kontrol Edilebilir"
- **Items:**
  - **Müşteriye Özel:** "İş modelinize göre kurgulanan mimari ve akışlar"
  - **Gelecek Odaklı:** "Kullanıcı, trafik ve özellik artışına hazır yapı"
  - **Yüksek Verim:** "Ekiplerin gerçekten kullanmak istediği paneller"
  - **Entegre Yapı:** "AI, otomasyon ve entegrasyonlara açık sistem"
  - **Sürdürülebilir:** "Kontrolü sizde olan, sürdürülebilir platform"

#### Bottom Message
- "İyi görünen bir site sizi temsil eder. Doğru kurgulanmış bir sistem işinizi büyütür."

### Design & Tech
- **Comparison Layout:** A "Holographic Overlay" where the legacy system looks like a glitched, red-tinted terminal, and the new system is a vibrant, blue-tinted modern glass interface.
- **Background:** Rolling grid with digital "rain" data streams.
- **Animations:** GSAP ScrollTrigger for entrance and parallax on cards.

---

## 3. WebDevWhatYouGet
**File:** `src/app/[locale]/services/web-dev/components/WebDevWhatYouGet.tsx`

### Text Content
- **Badge:** "Gerçek Kazanım"
- **Heading:** "Bu Sistem Size Ne Kazandırır?"
- **Subline:** "Teknik detaylar arka planda kalır. Siz işinizin daha düzenli, daha hızlı ve daha kontrol edilebilir hale geldiğini görürsünüz."

### Interactive Capabilities
1. **Akıllı Müşteri İletişimi**
   - **Tagline:** "Tüm talepler tek yerde, doğru kişiye otomatik."
   - **Desc:** "Web sitesi, formlar ve WhatsApp üzerinden gelen müşteri mesajları tek merkezde toplanır. Sistem, talebin konusunu algılar ve satış, destek veya ilgili birime otomatik yönlendirir."
   - **Results:** "Daha hızlı dönüş, Daha az kaçan müşteri, Daha az manuel iş"

2. **AI Destekli Yardımcılar**
   - **Tagline:** "Sorular cevaplanır, ekibiniz rahatlar."
   - **Desc:** "Tekrarlayan müşteri soruları 7/24 otomatik yanıtlanır. Ekibiniz gerçekten değer katan işlere odaklanır."
   - **Results:** "Operasyonel yük azalır, Müşteri memnuniyeti artar, İnsan hatası düşer"

3. **Yönetilebilir Paneller**
   - **Tagline:** "Veri dağınık değil, kontrol sizde."
   - **Desc:** "Karmaşık admin ekranları yerine, gerçekten kullanılan paneller tasarlarız. İçerik, talepler ve süreçler tek bir yerden izlenir."
   - **Results:** "Netlik, Daha hızlı karar alma, Operasyonel düzen"

4. **Entegre Çalışan Sistemler**
   - **Tagline:** "Araçlar ayrı ayrı değil, birlikte çalışır."
   - **Desc:** "CRM, ödeme sistemleri, e-posta servisleri ve kullandığınız diğer araçlar birbiriyle konuşur. Manuel kopyala–yapıştır süreçleri ortadan kalkar."
   - **Results:** "Zaman tasarrufu, Daha az hata, Daha akıcı operasyon"

5. **Size Özel Akışlar**
   - **Tagline:** "Standart işler standart değildir."
   - **Desc:** "“Bizim işimiz farklı” dediğiniz noktalar sorun yaratmaz. Tam tersine, sistemin nasıl kurgulanacağını belirler."
   - **Results:** "İş modelinize birebir uyum, Gelecekte büyümeye açık yapı, Kontrol tamamen sizde"

### Section Footer
- "Size bir web sitesi teslim etmiyoruz. İşinizi taşıyan, yöneten ve büyüten bir sistem kuruyoruz."

### Feature Visuals (Abstract UI Animations)
- **CommsFlow:** A message routing node (Bot icon) sorting user messages into "Support" and "Sales" department cards.
- **AIVisual:** Floating neural core orb (Cpu icon) with orbiting data nodes and inner pulsing glowing arcs.
- **DashboardVisual:** Stacked perspective cards with bar charts (Activity) and status indicators.
- **IntegrationVisual:** A central Link node sending "pings" to surrounding SaaS icons (Database, Smartphone, etc.).
- **FlowVisual:** A decision tree with branching paths (User to Zap icon) leading to different outcomes.

---

## 4. WebDevProcess
**File:** `src/app/[locale]/services/web-dev/components/WebDevProcess.tsx`

### Steps
1. **01 Anlama:** "İşinizi, hedefinizi ve mevcut sorunlarınızı netleştiririz."
2. **02 Kurgulama:** "Sadece görsel sayfa değil, çalışan bir sistem ve akış düşünürüz."
3. **03 Geliştirme:** "Parça parça, sık sık test ederek ve onay alarak ilerleriz."
4. **04 Teslim & Devam:** "Yayına alırız ama işimiz bitmez, sizi yalnız bırakmayız."

### Design
- **Layout:** Horizontal steps connected by a glowing line.
- **Icons:** Search, PenTool, Code2, Rocket.
- **Aesthetic:** Minimalist dark mode with cyan accents on hover.

---

## 5. WebDevProofOutcome
**File:** `src/app/[locale]/services/web-dev/components/WebDevProofOutcome.tsx`

### Outcomes
- **Operasyonel:** "Daha Az Manuel İş - Otomatik formlar ve veri işleme sayesinde insan hatası ve zaman kaybı azalır."
- **Netlik:** "Daha Net Müşteri Akışı - Ziyaretçinin nereye bakacağı, nereye tıklayacağı şansa bırakılmaz."
- **Düzen:** "Daha Düzenli Operasyon - Karmaşık Excel tabloları yerine, düzenli ve erişilebilir veri panelleri."
- **Stratejik:** "Daha Kontrollü Büyüme - Ani trafik artışlarında çökme değil, otomatik ölçeklenme gerçekleşir."

### Design
- **Bento Grid:** Cards with subtle grainy background noise.
- **Abstract Art:** Each card features a unique CSS-based visual (animated circles, grid patterns, or growing bars).

---

## 6. WebDevPricingTeaser
**File:** `src/app/[locale]/services/web-dev/components/WebDevPricingTeaser.tsx`

### Tiers
1. **Başlangıç Seviyesi:** Kurumsal Web Sitesi, Temel SEO, Yönetim Paneli, Mobil Uyum.
2. **Gelişmiş Sistemler:** (Highlighted) Gelişmiş Platform, API Entegrasyonları, Kullanıcı Yönetimi, Özel Tasarım.
3. **Özel Projeler:** SaaS Mimarisi, AI Modülleri, Yüksek Ölçeklenebilirlik, Tam Destek.

### CTA
- "Detayları Konuşalım"

---

## 7. WebDevContact
**File:** `src/app/[locale]/services/web-dev/components/WebDevContact.tsx`

### Text Content
- **Badge:** "Hadi Konusalim"
- **Title:** "Projenizi Hayata Gecirelim"
- **Subtitle:** "Fikrinizi dinlemek ve size ozel cozumler uretmek icin sabirsizlaniyoruz. 24 saat icinde donus yapiyoruz."
- **Highlights:** "7/24 Destek", "Ucretsiz Danismanlik".
- **CTA Card:** "Projeyi Baslat - Ucretsiz danismanlik ile baslayin"
- **Stats:**
  - 50+ Proje
  - 99% Memnuniyet
  - 24s Donus Suresi

### Design
- **Gradient Glows:** Cyan and teal animated bg blobs.
- **Glassmorphism:** Hover-responsive blurred cards.
- **Animations:** Floating background elements ("drift-1", "drift-2").
