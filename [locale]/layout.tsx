// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl'
import enMessages from '../messages/en.json'
import trMessages from '../messages/tr.json'

const messages = {
  en: enMessages,
  tr: trMessages,
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: keyof typeof messages }
}) {
  const localeMessages = messages[locale] ?? messages.tr

  return (
    <NextIntlClientProvider locale={locale} messages={localeMessages}>
      {children}
    </NextIntlClientProvider>
  )
}
