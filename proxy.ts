import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'tr'],

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Always prefix locale in URL
  localePrefix: 'always',
  
  // Enable locale detection
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(en|tr)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
