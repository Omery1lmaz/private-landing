import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix, defaultLocale } from '../i18n/routing';
import { NextRequest } from 'next/server';

const intl = createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  localeDetection: false
});

export default function middleware(req: NextRequest) {
  return intl(req);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
