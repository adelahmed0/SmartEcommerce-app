import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ar from './ar.json';
import de from './de.json';
import fr from './fr.json';

const LANGUAGES = {
  en: { translation: en },
  ar: { translation: ar },
  de: { translation: de },
  fr: { translation: fr },
};

i18n.use(initReactI18next).init({
  fallbackLng: 'ar',
  lng: 'ar', // تعيين اللغة الافتراضية إلى العربية
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
