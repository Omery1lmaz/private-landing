---
name: Service Pages Redesign
overview: 3 servis sayfasini (mobile-app, automation, fast-delivery) tamamen yeniden tasarlayacagiz. Her sayfa 7-8 benzersiz section ile modern, animasyonlu ve projeye uygun sekilde olusturulacak.
todos:
  - id: mobile-components
    content: Mobile App sayfasi icin 8 component olustur
    status: pending
  - id: mobile-page
    content: Mobile App page.tsx dosyasini guncelle
    status: pending
  - id: mobile-translations
    content: Mobile App cevirilerini ekle (en.json, tr.json)
    status: pending
  - id: automation-components
    content: Automation sayfasi icin 8 component olustur
    status: pending
    dependencies:
      - mobile-page
  - id: automation-page
    content: Automation page.tsx dosyasini guncelle
    status: completed
  - id: automation-translations
    content: Automation cevirilerini ekle
    status: pending
  - id: fast-components
    content: Fast Delivery sayfasi icin 7 component olustur
    status: pending
    dependencies:
      - automation-page
  - id: fast-page
    content: Fast Delivery page.tsx dosyasini guncelle
    status: pending
  - id: fast-translations
    content: Fast Delivery cevirilerini ekle
    status: pending
---

# Service Pages Full Redesign Plan

## Overview

3 servis sayfasi icin tamamen benzersiz, modern tasarimlar olusturulacak. Her sayfa 7-8 section icererek ai-seo ve web-dev sayfalari ile ayni kalitede olacak.---

## 1. Mobile App Page (`/services/mobile-app`)

**Tasarim Konsepti:** Floating phone mockups, app store aesthetics, gesture animations

### Sections (8 adet)

| Section | Component | Tasarim Ozelligi |

|---------|-----------|-----------------|

| Hero | `MobileHero.tsx` | 3D floating iPhone/Android mockup, app store rating stars, gradient orbs |

| Problem | `MobileProblem.tsx` | Broken app UI illustration, pain points with icons |

| Solution | `MobileSolution.tsx` | Before/After app screens, swipe gesture animation |

| Tech Stack | `MobileTechStack.tsx` | React Native, Flutter, Swift, Kotlin logolari, animated tech cards |

| Process | `MobileProcess.tsx` | 5-step timeline (Discovery > Design > Dev > Test > Launch) |

| Features | `MobileFeatures.tsx` | Push notifications, offline mode, payments, analytics - animated icons |

| Showcase | `MobileShowcase.tsx` | 3 app mockup galerisi, carousel |

| CTA | `MobileCTA.tsx` | "Download our work" style, app store buttons |

### Benzersiz Gorunum

- Floating phone devices with parallax
- App store style rating/review cards
- Gesture-based micro animations
- Dark glassmorphism cards

---

## 2. Automation Page (`/services/automation`)

**Tasarim Konsepti:** Workflow diagrams, connecting nodes, robot/AI aesthetics

### Sections (8 adet)

| Section | Component | Tasarim Ozelligi |

|---------|-----------|-----------------|

| Hero | `AutomationHero.tsx` | Animated workflow diagram, connecting nodes, "autopilot" badge |

| Problem | `AutomationProblem.tsx` | Manual tasks visualization, time wasted metrics |

| Solution | `AutomationSolution.tsx` | Before/After workflow comparison, automated vs manual |

| Integrations | `AutomationIntegrations.tsx` | Logo grid (Zapier, Make, n8n, custom APIs), connection lines |

| Capabilities | `AutomationCapabilities.tsx` | CRM sync, email flows, reporting, inventory - animated cards |

| Process | `AutomationProcess.tsx` | 4-step: Audit > Design > Implement > Monitor |

| ROI | `AutomationROI.tsx` | Savings calculator, time/cost metrics, animated counters |

| CTA | `AutomationCTA.tsx` | "Automate your first workflow" interactive demo button |

### Benzersiz Gorunum

- Animated connecting lines between nodes
- Workflow diagram with glowing paths
- Bot/robot subtle illustrations
- Neon accent colors (cyan/purple)

---

## 3. Fast Delivery (MVP) Page (`/services/fast-delivery`)

**Tasarim Konsepti:** Sprint boards, timeline racing, speed metrics, rocket aesthetics

### Sections (7 adet)

| Section | Component | Tasarim Ozelligi |

|---------|-----------|-----------------|

| Hero | `FastHero.tsx` | Countdown timer aesthetic, racing stripes, "14 days" huge typography |

| Problem | `FastProblem.tsx` | Slow timeline visualization, competitor comparison |

| Solution | `FastSolution.tsx` | Compressed timeline, agile sprints visual |

| Timeline | `FastTimeline.tsx` | Interactive 14-day breakdown, milestones with progress bars |

| Methodology | `FastMethodology.tsx` | Agile/Scrum cards, sprint planning visuals |

| Case Studies | `FastCases.tsx` | 3 mini case studies with delivery times, before/after |

| Guarantee | `FastGuarantee.tsx` | Money-back badge, delivery promise, trust signals |

| CTA | `FastCTA.tsx` | "Start your 14-day sprint" with urgency elements |

### Benzersiz Gorunum

- Racing/speed visual metaphors
- Animated progress bars
- Countdown-style typography
- Sprint board kanban visuals

---

## Dosya Yapisi

```javascript
src/app/[locale]/services/
├── mobile-app/
│   ├── page.tsx
│   └── components/
│       ├── MobileHero.tsx
│       ├── MobileProblem.tsx
│       ├── MobileSolution.tsx
│       ├── MobileTechStack.tsx
│       ├── MobileProcess.tsx
│       ├── MobileFeatures.tsx
│       ├── MobileShowcase.tsx
│       └── MobileCTA.tsx
├── automation/
│   ├── page.tsx
│   └── components/
│       ├── AutomationHero.tsx
│       ├── AutomationProblem.tsx
│       ├── AutomationSolution.tsx
│       ├── AutomationIntegrations.tsx
│       ├── AutomationCapabilities.tsx
│       ├── AutomationProcess.tsx
│       ├── AutomationROI.tsx
│       └── AutomationCTA.tsx
└── fast-delivery/
    ├── page.tsx
    └── components/
        ├── FastHero.tsx
        ├── FastProblem.tsx
        ├── FastSolution.tsx
        ├── FastTimeline.tsx
        ├── FastMethodology.tsx
        ├── FastCases.tsx
        ├── FastGuarantee.tsx
        └── FastCTA.tsx
```

---

## Teknik Detaylar

- **Animasyonlar:** GSAP ScrollTrigger (mevcut projede kullaniliyor)
- **Renkler:** Cyan/Teal gradient (projeyle tutarli)
- **Background:** `bg-[#030308]` + grid pattern + ambient glows
- **Ceviriler:** `messages/en.json` ve `messages/tr.json` dosyalarina yeni keyler eklenecek
- **Responsive:** Mobile-first yaklasim

---

## Uygulama Sirasi

1. Mobile App sayfasi (en gorunur, en cok kullanilan)
2. Automation sayfasi (is akisi gorselleri onemli)
3. Fast Delivery sayfasi (hiz vurgusu)