import Cookies from 'js-cookie';
import { IStoreInitialThemeState } from 'src/context/interfaces/theme/IStoreInitialThemeState';
import { IActionResponse } from 'src/context/interfaces/IActionResponse';
import { ThemeAction } from 'src/context/enums/theme';
import { MyTheme } from 'src/theme/types/MyTheme';
import { configuration } from 'src/configuration';
import { allColors, themes } from 'src/theme';
import { getTheme } from 'src/theme/utils';
import { context } from 'src/context';

/**
 * Returns the initial state.
 * @param {IStoreInitialThemeState} initialState - The initial state.
 */
const getThemeReducer = (initialState: IStoreInitialThemeState): (state: IStoreInitialThemeState, action: IActionResponse) => unknown => {
    const initialTheme = context.theme ? 
        context.theme : initialState;
		
    return getThemeReducerWithState(initialTheme);
};

/**
 * Returns the theme reducer.
 * @param {IStoreInitialThemeState} initialState - The initial state.
 */
const getThemeReducerWithState = (initialState: IStoreInitialThemeState) => (state = initialState, action: IActionResponse): unknown => {
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