import Cookies from 'js-cookie';
import { IStoreInitialThemeState } from 'src/context/interfaces/theme/IStoreInitialThemeState';
import { IActionResponse } from 'src/context/interfaces/IActionResponse';
import { ThemeAction } from 'src/context/enums/theme';
import { MyTheme } from 'src/theme/types/MyTheme';
import { configuration } from 'src/configuration';
import { getTheme } from 'src/theme/utils';
import { allColors, themes } from 'src/theme';

/**
 * Returns the theme reducer.
 * @param {IStoreInitialThemeState} initialState - The initial state.
 */
const getThemeReducer = (initialState: IStoreInitialThemeState) => (state = initialState, action: IActionResponse): unknown => {
    let newState = state;
	
    if (action.type === ThemeAction.setTheme && themes[action.value as MyTheme]) {
        const themeName = action.value as MyTheme;
		
        newState = {
            ...newState,
            theme: getTheme(newState.primaryColor, themeName),
            themeName
        };
		
        Cookies.set(configuration.cookies.theme, themeName);
    }
	
    if (action.type === ThemeAction.setPrimaryColor && allColors.indexOf(action.value as string) !== -1) {
        const primaryColor = action.value as string;
		
        newState = {
            ...newState,
            primaryColor,
            theme: getTheme(primaryColor, newState.themeName)
        };
		
        Cookies.set(configuration.cookies.primaryColor, primaryColor);
    }
	
    return newState;
};

export {
    getThemeReducer
};