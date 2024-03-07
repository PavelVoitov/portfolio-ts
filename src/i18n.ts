import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import translationEnglish from './i18n/en/translation.json'
import translationRussian from './i18n/ru/translation.json'
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  en: {
    translation: translationEnglish
  },
  ru: {
    translation: translationRussian
  }
}

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources
})

export default i18next