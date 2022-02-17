import { supportedLocales } from './stripe-upe-supported-locales';

export default function formatLocale(localeLanguage: string): string {
    const [language, country] = localeLanguage.replace(/_/g, '-').toLowerCase().split('-');
    const countryLocales = supportedLocales[language];
    if (!countryLocales) {
        return 'auto';
    }
    const formattedLocale = `${language}-${country?.toUpperCase()}`;

    return countryLocales.indexOf(formattedLocale) > -1 ? formattedLocale : countryLocales[0];
}
