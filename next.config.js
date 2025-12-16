/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const nextConfig = {
  // Next.js 14 automatically uses app directory
}

module.exports = withNextIntl(nextConfig)
