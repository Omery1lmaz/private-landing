import React from 'react'

const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ArvexaLabs",
    "url": "https://arvexalabs.com",
    "logo": "https://arvexalabs.com/logo/icon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-552-822-87-99",
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": ["Turkish", "English"]
    },
    "sameAs": [
      "https://twitter.com/elitecodestudio",
      "https://linkedin.com/company/arvexalabs"
    ],
    "description": "AI-powered websites, mobile applications, and SEO solutions. High-performance digital growth strategies for brands."
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default StructuredData
