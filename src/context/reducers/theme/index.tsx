import { IStoreInitialState } from 'src/context/interfaces/IStoreInitialState';
import { IActionResponse } from 'src/context/interfaces/IActionResponse';
import { ThemeAction } from 'src/context/enums/theme';
import { configuration } from 'src/configuration';
import { getTheme, themes } from 'src/theme';

/**
 * Returns the theme reducer.
 * @param {IStoreInitialState} initialState - The initial state.
 */
const getThemeReducer = (initialState: IStoreInitialState) => (state = initialState, action: IActionResponse): unknown => {
    let newState = state;
	
    if (action.type === ThemeAction.setTheme && action.value && themes[action.value]) {
        newState = {
			 name: action.value,
			 theme: getTheme(action.value)
        };
        localStorage.setItem(configuration.localStorage.theme, newState.name);
    }
	
    return newState;
};

export {
    getThemeReducer
};