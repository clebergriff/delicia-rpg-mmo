import { changeLanguage, type Locale } from '@kaetram/common/i18n';

// Primeiro verificamos se há um idioma salvo no localStorage
const savedLang = localStorage.getItem('kaetram-language') as Locale;

// Se não houver idioma salvo, tentamos usar o do URL
let lang = savedLang || (location.pathname.slice(1, 3) as Locale);

if (lang) await changeLanguage(lang);
