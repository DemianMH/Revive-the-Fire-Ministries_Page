// Ubicación: src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importamos tus archivos de traducción existentes
import translationEN from './app/messages/en.json';
import translationES from './app/messages/es.json';

i18n
  // Detecta el idioma del navegador del usuario
  .use(LanguageDetector)
  // Pasa la instancia de i18n a react-i18next.
  .use(initReactI18next)
  // Configuración principal
  .init({
    // Idioma por defecto
    fallbackLng: 'es',
    // Desactiva el modo debug en producción
    debug: process.env.NODE_ENV === 'development',
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      }
    },
    interpolation: {
      escapeValue: false, // React ya se encarga de esto
    }
  });

export default i18n;