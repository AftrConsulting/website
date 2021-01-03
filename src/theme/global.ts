import { createGlobalStyle } from 'styled-components';

/**
 * The global styles.
 * @param {{}} p - The props.
 */
const GlobalStyles = createGlobalStyle`
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
		color: ${(p): string => p.theme.global.color};
		background: ${(p): string => p.theme.global.background};
		letter-spacing: 0px;
	}

	* {
		appearance: none;
		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
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
`;

export {
    GlobalStyles
};