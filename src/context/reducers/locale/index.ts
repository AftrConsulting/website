import { IStoreInitialLocaleState } from 'src/context/interfaces/locale/IStoreInitialLocaleState';
import { IActionResponse } from 'src/context/interfaces/IActionResponse';
import { LocaleAction } from 'src/context/enums/locale';
import { locale } from 'src/localizations';

/**
 * Returns the locale reducer with the default language.
 * @param {string} language - The language. 
 */
const getLocaleReducer = (language?: string): (state: IStoreInitialLocaleState, action: IActionResponse) => unknown => {
    const newLanguage = locale[language as string] ? language : 'en';
	
    const defaultState: IStoreInitialLocaleState = {
        language: newLanguage as keyof typeof locale,
        locale: locale[newLanguage as keyof typeof locale]
    };
	
    return getLocaleReducerWithState(defaultState);
};

/**
 * Returns the locale reducer.
 * @param {IStoreInitialLocaleState} initialState - The initial state.
 */
const getLocaleReducerWithState = (initialState: IStoreInitialLocaleState) => (state = initialState, action: IActionResponse): unknown => {
    const newState = { ...state };
    const newLocale = locale[action.value as string];

    if (action.type === LocaleAction.changeLanguage && newLocale) {
        newState.language = action.value as keyof typeof locale;
        newState.locale = newLocale;
    }
	
    return newState;
};

export {
    getLocaleReducer
};