import { IStoreInitialLocaleState } from 'src/context/interfaces/locale/IStoreInitialLocaleState';
import { IActionResponse } from 'src/context/interfaces/IActionResponse';
import { LocaleAction } from 'src/context/enums/locale';
import { locale } from 'src/localizations';

const defaultState: IStoreInitialLocaleState = {
    language: 'en'
};

/**
 * Returns the locale reducer.
 * @param {IStoreInitialHeaderState} state - The state.
 * @param {IActionResponse} action - The action.
 */
const getLocaleReducer = (state = defaultState, action: IActionResponse): unknown => {
    const newState = { ...state };

    if (action.type === LocaleAction.changeLanguage && locale[action.value as string]) {
        newState.language = action.value as keyof typeof locale;
    }
	
    return newState;
};

export {
    getLocaleReducer
};