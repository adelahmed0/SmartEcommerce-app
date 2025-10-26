import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ar from './ar.json';

const LANGUAGES = {
  en: { translation: en },
  ar: { translation: ar },
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
