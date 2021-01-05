import { IActionResponse } from 'src/context/interfaces/IActionResponse';
import { ThemeAction } from 'src/context/enums/theme';
import { MyTheme } from 'src/theme/types/MyTheme';
import { themes } from 'src/theme';

/**
 * Returns the theme reducer.
 * @param {{}} initialState - The initial state.
 */
const getThemeReducer = (initialState: {}) => (state = initialState, action: IActionResponse): unknown => {
    let newState = state;
	
    if (action.type === ThemeAction.setTheme && action.value && themes[action.value as MyTheme]) {
        newState = {
			 name: action.value
        };
    }
	
    return newState;
};

export {
    getThemeReducer
};