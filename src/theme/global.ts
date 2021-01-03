import { createGlobalStyle } from 'styled-components';

/**
 * The global styles.
 */
const GlobalStyles = createGlobalStyle`
	html, body {
		font-weight: 400;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-size: 16px;
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