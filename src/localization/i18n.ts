import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ar from './ar.json';
import de from './de.json';
import fr from './fr.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGES = {
  en: { translation: en },
  ar: { translation: ar },
  de: { translation: de },
  fr: { translation: fr },
};

const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: async (callback: (lng: string) => void) => {
    try {
      const SavedLanguage = await AsyncStorage.getItem('LANGUAGE');
      if (SavedLanguage) {
        callback(SavedLanguage);
      }
    } catch (error) {
      console.error('Error getting language from AsyncStorage:', error);
      callback('ar');
    }
    callback('ar');
  },
  cacheUserLanguage: async (lng: string) => {
    try {
      await AsyncStorage.setItem('LANGUAGE', lng);
    } catch (error) {
      console.error('Error getting language from AsyncStorage:', error);
    }
  },
};

i18n
  .use({
    type: 'languageDetector',
    async: true,
    detect(callback: (lng: string) => void) {
      AsyncStorage.getItem('LANGUAGE')
        .then((SavedLanguage) => {
          if (SavedLanguage) {
            callback(SavedLanguage);
          } else {
            callback('ar');
          }
        })
        .catch((error) => {
          console.error('Error getting language from AsyncStorage:', error);
          callback('ar');
        });
    },
    init() {},
    cacheUserLanguage(lng: string) {
      AsyncStorage.setItem('LANGUAGE', lng).catch((error) => {
        console.error('Error setting language in AsyncStorage:', error);
      });
    },
  })
  .use(initReactI18next)
  .init({
    fallbackLng: 'ar',
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
