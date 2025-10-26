import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const LANGUAGES = {
  en: {},
  ar: {},
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: LANGUAGES,
  defaultNS: 'translation',
  ns: ['translation'],
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
