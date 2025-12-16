import {getRequestConfig} from 'next-intl/server';

import {defaultLocale, locales, type Locale} from './routing';

export default getRequestConfig(async ({locale}) => {
  const normalizedLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  return {
    locale: normalizedLocale,
    messages: (await import(`../messages/${normalizedLocale}.json`)).default,
  };
});

