import { ITheme } from 'src/theme/interfaces/ITheme';

/**
 * The global styles.
 * @param {ITheme} theme - The theme.
 */
// eslint-disable-next-line max-lines-per-function
const getGlobalStyles = (theme: ITheme): string => (`
	html, body {
		font-family: -apple-system, system-ui, BlinkMacSystemFont, 
					  Segoe UI, Roboto,Oxygen-Sans, Ubuntu, Cantarell, 
					  Helvetica Neue, sans-serif;
		font-weight: 400;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-size: 16px;
		color: ${theme.global.color};
		background: ${theme.global.background};
		letter-spacing: 0px;
	}

	* {
		appearance: none;
		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
		-webkit-tap-highlight-color: transparent;
	}
	
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}
	
	*:focus,
	*:active,
	*:visited,
	*:hover {
		outline: 0;
	}
	
	button,
	textarea,
	input {
		display: block;
		font-family: inherit;
		font-size: 1em;
	}

	img { 
		display: block;
	}

	[data-slider] {
		display: none;
	}
`);

export {
    getGlobalStyles
};
