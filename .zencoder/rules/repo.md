---
description: Repository Information Overview
alwaysApply: true
---

# EliteCode Studio Landing Page

## Summary

A modern, professional landing page for EliteCode Studio, a digital transformation agency. Built with Next.js 16 and TypeScript, featuring GSAP animations, 3D globe visualization, and multi-language support (English and Turkish). Showcases AI-powered SEO solutions, web development services, and digital automation capabilities.

## Structure

**Main Directories:**
- **`src/components/`**: 26 React components including Hero, Services, Pricing, Portfolio, Testimonials, Globe3D, and Contact forms
- **`src/app/`**: Next.js app directory with layout, error handling, and page routing
- **`src/lib/`**: Utility functions and helpers
- **`src/styles/`**: Global styling and CSS modules
- **`i18n/`**: Internationalization configuration and routing (English, Turkish)
- **`messages/`**: Translation files (en.json, tr.json)
- **`public/`**: Static assets including hero.mp4, flag icons, and localization resources

## Language & Runtime

**Language**: TypeScript  
**Node.js Version**: Latest LTS (inferred from Next.js 16)  
**Build System**: Next.js 16  
**Package Manager**: npm (package-lock.json) / yarn (yarn.lock)

## Dependencies

**Main Dependencies**:
- `next: ^16.0.10` - React framework with server-side rendering and static generation
- `react: ^18` - UI library
- `react-dom: ^18` - DOM bindings
- `next-intl: ^4.6.1` - Internationalization for Next.js
- `gsap: ^3.13.0` - Animation library for scroll-triggered effects and parallax
- `three: ^0.181.2` - 3D graphics library
- `react-globe.gl: ^2.37.0` - 3D globe visualization component
- `lucide-react: ^0.556.0` - Icon library
- `nodemailer: ^7.0.11` - Email functionality
- `flag-icons: ^7.5.0` - Flag emoji icons for localization UI

**Development Dependencies**:
- `typescript: ^5` - TypeScript compiler
- `tailwindcss: ^3.3.0` - Utility-first CSS framework
- `autoprefixer: ^10.0.1` - PostCSS plugin for vendor prefixes
- `postcss: ^8` - CSS transformation
- `eslint: ^8` - JavaScript linter
- `eslint-config-next: 14.0.4` - Next.js ESLint configuration
- `@types/*: ^18-20` - TypeScript type definitions for React, Node, Three.js, DOM

## Build & Installation

```bash
# Install dependencies
npm install
# or
yarn install

# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Project Configuration

**TypeScript**:
- Strict mode enabled
- Path alias: `@/*` maps to `./src/*`
- Target: ES2017
- Module: ESNext

**Styling**:
- TailwindCSS with custom theme extending:
  - Primary purple color palette
  - Custom animations: `glow`, `bounce-slow`, `liquid-float`, `morph`
  - Glass-morphism effects with custom gradients and shadows
  - Custom backdrop blur and box shadows
- PostCSS for automated vendor prefixing

**Internationalization**:
- Supported locales: English (`en`), Turkish (`tr`)
- Default locale: English
- Locale prefix strategy: Always prepended to URLs
- Main routing configuration in `i18n/routing.ts`

## Main Entry Points

- **App Router**: `[locale]/layout.tsx` - Root layout with locale support
- **Homepage**: `[locale]/page.tsx` - Main landing page
- **Error Handling**: `[locale]/error.tsx`, `[locale]/not-found.tsx`, `[locale]/loading.tsx`
- **Core Components**: 26 components in `src/components/` covering Hero, Services, Globe, Pricing, Portfolio, Testimonials, Contact forms

## Key Features

- **Animations**: GSAP scroll-triggered animations, parallax effects, hover interactions
- **3D Visualization**: Three.js-based 3D globe showing global infrastructure
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **SEO Optimized**: Proper metadata configuration and performance optimizations
- **Multi-language**: Full EN/TR support with next-intl
- **Contact Forms**: Email integration via Nodemailer
- **Dark Theme**: Black background with cyan/teal accent colors and glassmorphism effects

## Next.js Configuration

**next.config.js**:
- Integrates `next-intl` plugin for i18n support via `createNextIntlPlugin`
- Uses i18n request handler from `./i18n/request.ts`
- App directory automatically enabled (Next.js 14+)
