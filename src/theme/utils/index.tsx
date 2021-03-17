import { RecursiveThemeKeyOf } from 'src/theme/types/RecursiveThemeKeyOf';
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
        return configuration.defaults.primaryColor;
    }
	
    return color;
};

/**
 * Returns the global theme.
 * @param {{}} theme - The theme. 
 * @param {{}} obj - The obj. 
 * @param {string} stack - The stack. 
 */
const getGlobalTheme = (theme: {}, obj = {}, stack = '-'): {} => {
    for (const i in theme) {
        const name = `${stack}-${i}`;
		
        if (typeof theme[i] === 'string' && theme[i]) {
            obj[name] = theme[i];
        } else {
            getGlobalTheme(theme[i], obj, name);
        }
    }
	
    return obj;
};

/**
 * Returns the global themes.
 * @param {{}} themes - The themes. 
 */
const getGlobalThemes = (themes: {}): string => {
	let html = '';

	for (let i in themes) {
		const theme = getGlobalTheme(themes[i]);
		html += `[data-theme="${i}"] {\n`;
		for (let a in theme) {
			html += `${a}: ${theme[a]};\n`;
		}
		html += '}\n';
	}

	return html;
}

/**
 * Returns the theme variable.
 * @param {RecursiveThemeKeyOf<ITheme>} theme - The theme. 
 */
const getThemeVariable = (theme: RecursiveThemeKeyOf<ITheme>): string => {
	return `var(--${theme.replace(/\./g, '-')})`;
}

export {
	getThemeVariable,
	getGlobalThemes,
	getGlobalTheme,
    getThemeName,
    getPrimaryColor,
    getTheme
};