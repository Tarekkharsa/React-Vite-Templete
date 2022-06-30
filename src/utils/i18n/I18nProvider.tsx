import { IntlProvider } from 'react-intl';

import useLang from '@/hooks/useLang';

import arMessages from './messages/ar';
import enMessages from './messages/en';

const allMessages = {
  en: enMessages,
  ar: arMessages,
};

export function I18nProvider({ children }) {
  const { lang } = useLang();
  const messages = allMessages[lang];

  return (
    <IntlProvider locale={lang} messages={messages}>
      {children}
    </IntlProvider>
  );
}
