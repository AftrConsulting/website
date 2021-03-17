import { RecursiveThemeKeyOf } from 'src/theme/types/RecursiveThemeKeyOf';
import { ITheme } from 'src/theme/interfaces/ITheme';

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
	getGlobalTheme
};