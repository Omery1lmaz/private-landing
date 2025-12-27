import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales } from './i18n.config'

// Redirect requests without locale prefix to the best-matching locale.
export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl

  // Skip next internals, api, public files and assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/public') ||
    pathname.includes('.') // file extension like .png, .css
  ) {
    return
  }

  // If the path already starts with a supported locale (e.g. /tr or /en), do nothing.
  const firstSegment = pathname.split('/')[1]
  if (locales.includes(firstSegment as typeof locales[number])) {
    return
  }

  // Determine preferred locale from Accept-Language header
  const acceptLanguage = req.headers.get('accept-language') || ''
  const preferred = acceptLanguage
    .split(',')
    .map((part) => part.split(';')[0].trim())
    .find((lang) => locales.some((loc) => lang.toLowerCase().startsWith(loc)))

  const localeToUse = (preferred && locales.find((loc) => preferred.toLowerCase().startsWith(loc))) || locales[0]

  const url = req.nextUrl.clone()
  url.pathname = `/${localeToUse}${pathname}`
  if (search) url.search = search

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|api|static|public).*)'],
}





