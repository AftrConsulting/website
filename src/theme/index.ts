import { lightTheme } from 'src/theme/themes/light';
import { darkTheme } from 'src/theme/themes/dark';
import { MyTheme } from 'src/theme/types/MyTheme';
import { configuration } from 'src/configuration';
import { ITheme } from 'src/theme/interfaces/ITheme';

/**
 * The themes.
 */
const themes = {
    dark: darkTheme,
    light: lightTheme
};

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
 * @param {string} theme - The theme. 
 */
const getTheme = (theme?: string): ITheme => {
    if (!theme || !themes[theme]) {
        return themes[configuration.defaults.themeName];
    }

    return themes[theme];
};

export {
    getThemeName,
    getTheme,
    themes
};