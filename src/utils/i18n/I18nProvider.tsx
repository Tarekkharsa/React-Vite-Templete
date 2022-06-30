import { IntlProvider } from 'react-intl';

import useLang from '@/hooks/useLang';

import arMessages from './messages/ar.json';
import enMessages from './messages/en.json';

const allMessages = {
  en: enMessages,
  ar: arMessages,
} as any;

export function I18nProvider({ children }: any) {
  const { lang } = useLang();
  const messages = allMessages[lang];

  return (
    <IntlProvider locale={lang} messages={messages}>
      {children}
    </IntlProvider>
  );
}
