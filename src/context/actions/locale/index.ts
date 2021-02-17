import { IActionResponse } from 'src/context/interfaces/IActionResponse';
import { LocaleAction } from 'src/context/enums/locale';
import { locale } from 'src/localizations';

/**
 * Sets the language.
 * @param {keyof typeof locale} language - The language.
 */
const setLanguage = (language: keyof typeof locale): IActionResponse => ({
    type: LocaleAction.changeLanguage,
    value: language
});

export {
    setLanguage
};