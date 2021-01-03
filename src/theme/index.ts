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
 * Returns the default theme name.
 */
const getDefaultThemeName = (): MyTheme => {
    const theme = null;

    if (!theme || !themes[theme]) {
        return configuration.defaults.theme;
    }
	
    return theme as MyTheme;
};

/**
 * Returns the theme.
 * @param {MyTheme} theme - The theme. 
 */
const getTheme = (theme: MyTheme): ITheme => {
    if (!themes[theme]) {
        return themes[configuration.defaults.theme];
    }

    return themes[theme];
};

export {
    getDefaultThemeName,
    getTheme,
    themes
};