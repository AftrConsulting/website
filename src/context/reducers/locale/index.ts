import { IStoreInitialLocaleState } from 'src/context/interfaces/locale/IStoreInitialLocaleState';
import { IActionResponse } from 'src/context/interfaces/IActionResponse';
import { LocaleAction } from 'src/context/enums/locale';
import { locale } from 'src/localizations';

const defaultState: IStoreInitialLocaleState = {
    language: 'en',
    locale: locale.en
};

/**
 * Returns the locale reducer.
 * @param {IStoreInitialHeaderState} state - The state.
 * @param {IActionResponse} action - The action.
 */
const getLocaleReducer = (state = defaultState, action: IActionResponse): unknown => {
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