import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {},
        form: {
          form: 'Form',
          title: 'Title',
          description: 'Description',
          weightedVote: 'Weighted vote',
          weight: 'Weight',
          address: 'Address {{index}}',
          question: 'Question {{index}}',
          option: 'Option {{index}}',
          createProcess: 'Create Process',
        },
      },
      cat: {
        translation: {},
        form: {
          form: 'Formulari',
          title: 'Títol',
          description: 'Descripció',
          weightedVote: 'Votació ponderada',
          weight: 'Pes',
          address: 'Adreça {{index}}',
          question: 'Pregunta {{index}}',
          option: 'Opció {{index}}',
          createProcess: 'Crear Procés',
        },
      },
    },
  });
