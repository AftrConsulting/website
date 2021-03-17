import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledMarkdownContainer = styled.div`
	margin-bottom: 40px;

	a {
		color: ${getThemeVariable('colors.primary')};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	p {
		line-height: 24px;
		word-break: break-word;
	}

	h3 {
		margin: 25px 0px 10px;
	}

	h1 {
		font-size: 2em;

		@media screen and (max-width: ${devices.mobile}) {
			font-size: 1.5em;
		}
	}
`;

export {
    StyledMarkdownContainer
};