import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const effectiveLocale = locale || 'tr'; // Fallback for debugging
  return {
    locale: effectiveLocale,
    messages: (await import(`./messages/${effectiveLocale}.json`)).default
  };
});
