import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import i18nextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import translations from './locales';

console.log(translations);

const i18nConfig = {
    resources: translations,
    fallbackLng: 'en-US',
    defaultNS: 'translations',
    debug: true,
    interpolation: {
        escapeValue: false
    }/*,
    resources: {
        en: {
            translation: {
                label1: "Bill",
                label2: "Select a Tip %",
                label3: "Number of People",
                button: "Custom",
                tipAmount: "Tip Amount",
                total: "Total",
                person: "/ person",
                reset: "Reset"
            }
        },
        ptBr: {
            translation: {
                label1: "Valor da conta",
                label2: "Selecione a gorjeta %",
                label3: "Número de pessoas",
                button: "Outro",
                tipAmount: "Gorjeta",
                total: "Total",
                person: "/ pessoa",
                reset: "Limpar"
            }
        },
    }*/
}

i18n
    .use(I18nextBrowserLanguageDetector)
    .use(i18nextHttpBackend)
    .use(initReactI18next)
    .init(i18nConfig);

export default i18n;