import { ITheme } from 'src/theme/interfaces/ITheme';

/**
 * Adds the theme to the styled components.
 */
declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface DefaultTheme extends ITheme {
		
	}
}