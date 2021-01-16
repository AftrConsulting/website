import { IActionResponse } from 'src/context/interfaces/IActionResponse';
import { ThemeAction } from 'src/context/enums/theme';
import { MyTheme } from 'src/theme/types/MyTheme';

/**
 * Sets the theme name.
 * @param {MyTheme} themeName - The theme name. 
 */
const setTheme = (themeName?: MyTheme): IActionResponse => ({
    type: ThemeAction.setTheme,
    value: themeName
});

/**
 * Sets the primaryColor.
 * @param {string} primaryColor - The primary color. 
 */
const setPrimaryColor = (primaryColor?: string): IActionResponse => ({
    type: ThemeAction.setPrimaryColor,
    value: primaryColor
});

export {
    setPrimaryColor,
    setTheme
};