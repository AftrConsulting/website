import { ITheme } from 'src/theme/interfaces/ITheme';
import { MyTheme } from 'src/theme/types/MyTheme';
import { configuration } from 'src/configuration';
import { allColors, themes } from 'src/theme';

/**
 * Returns the theme name.
 * @param {string} theme - The theme. 
 */
const getThemeName = (theme?: string): MyTheme => {
    if (!theme || !themes[theme]) {
        return configuration.defaults.themeName;
    }

    return theme as MyTheme;
};

/**
 * Returns the theme.
 * @param {string} primaryColor - The primary color.
 * @param {string} themeName - The theme name. 
 */
const getTheme = (primaryColor: string, themeName?: string): ITheme => {
    let newTheme = themes[configuration.defaults.themeName];
	
    if (themeName && themes[themeName]) {
        newTheme = themes[themeName];
    }

    newTheme.colors.primary = primaryColor;
	
    return {
        ...newTheme
    };
};

/**
 * Returns the primary color.
 * @param {string} color - The color. 
 */
const getPrimaryColor = (color?: string): string => {
    if (!color || allColors.indexOf(color) === -1) {
        return allColors[0];
    }
	
    return color;
};

export {
    getThemeName,
    getPrimaryColor,
    getTheme
};