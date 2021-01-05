import Cookies from 'js-cookie';
import { IStoreInitialThemeState } from 'src/context/interfaces/theme/IStoreInitialThemeState';
import { IActionResponse } from 'src/context/interfaces/IActionResponse';
import { ThemeAction } from 'src/context/enums/theme';
import { MyTheme } from 'src/theme/types/MyTheme';
import { configuration } from 'src/configuration';
import { themes, getTheme } from 'src/theme';

/**
 * Returns the theme reducer.
 * @param {IStoreInitialThemeState} initialState - The initial state.
 */
const getThemeReducer = (initialState: IStoreInitialThemeState) => (state = initialState, action: IActionResponse): unknown => {
    const themeName = action.value as MyTheme;
    let newState = state;
	
    if (action.type === ThemeAction.setTheme && themeName && themes[themeName]) {
        newState = {
            theme: getTheme(themeName),
            themeName
        };
		
        Cookies.set(configuration.cookies.theme, themeName);
    }
	
    return newState;
};

export {
    getThemeReducer
};