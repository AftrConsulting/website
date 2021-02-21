import { useSelector } from 'react-redux';
import { IState } from 'src/context/interfaces/IState';
import { frLocale } from 'src/localizations/fr';
import { enLocale } from 'src/localizations/en';

/**
 * The locales.
 */
const locale = {
    en: enLocale,
    fr: frLocale
};

/**
 * The locale hook that returns the locales.
 */
const useLocale = (): typeof enLocale => {
    return useSelector((state: IState) => state.locale.locale);
};

export {
    useLocale,
    locale
};