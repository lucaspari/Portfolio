import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PTBR from "./locales/pt/pt-br.json";
import ESUS from "./locales/en/en-us.json";
const resources = {
  pt: {
    translation: PTBR,
  },
  en: {
    translation: { "Hello, I'm Lucas Pari": "Hello, I'm Lucas Pari" },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
