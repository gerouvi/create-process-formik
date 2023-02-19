import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {},
        form: {
          header: 'Election description',
          form: 'Form',
          title: 'Title',
          description: 'Description',
          weightedVote: 'Weighted vote',
          weight: 'Weight',
          addresses: 'Addresses',
          address_one: 'Address',
          address: 'Address {{index}}',
          questions: 'Questions',
          question: 'Question {{index}}',
          options: 'Options',
          option: 'Option {{index}}',
          createProcess: 'Create Process',
          aria: {
            deleteAddress: 'Delete address',
            addAddress: 'Add address',
            weight: 'Address weight',
            deleteOption: 'Delete option',
            addOption: 'Add option',
            addQuestion: 'Add new question',
            deleteQuestion: 'Delete question',
          },
        },
      },
      cat: {
        translation: {},
        form: {
          header: "Descripció de l'elecció",
          form: 'Formulari',
          title: 'Títol',
          description: 'Descripció',
          weightedVote: 'Votació ponderada',
          weight: 'Pes',
          addresses: 'Adreces',
          address: 'Adreça {{index}}',
          questions: 'Preguntes',
          question: 'Pregunta {{index}}',
          options: 'Opcions',
          option: 'Opció {{index}}',
          createProcess: 'Crear Procés',
          aria: {
            deleteAddress: 'Eliminar adreça',
            addAddress: 'Afegir adreça',
            weigth: "Pes de l'adreça",
            deleteOption: 'Eliminar opció',
            addOption: 'Afegir opció',
            addQuestion: 'Afeggir nova pregunta',
            deleteQuestion: 'Eliminar pregunta',
          },
        },
      },
    },
  });
