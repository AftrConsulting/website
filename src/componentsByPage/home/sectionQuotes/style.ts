import styled from 'styled-components';
import { Paragraph } from 'src/components/elements/paragraph';
import { Section } from 'src/components/elements/section';
import { Icon } from 'src/components/elements/icon';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledSection = styled(Section)`
	border-top: 1px solid ${getThemeVariable('global.borderColor')};
`;

const StyledQuotesContainer = styled.div`
	margin-top: 40px;
	display: grid;
	grid-gap: 50px;
	grid-template-columns: 1fr 1fr 1fr;

	> div {
		position: relative;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		grid-gap: 60px;
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: ${devices.mobile}) {
		grid-gap: 50px;
	}
`;

const StyledDescription = styled(Paragraph)`
	font-style: italic;
	margin-bottom: 30px;

	@media screen and (max-width: ${devices.smallTablet}) {
		margin-bottom: 20px;
	}
`;

const StyledIcon = styled(Icon)`
	color: ${getThemeVariable('pages.home.quotes.background')}; 
	position: absolute;
	font-size: 4em;
	margin-top: -15px;
	margin-left: -5px;
	z-index: -1;
`;

const StyledName = styled.span`
	font-weight: bold;
	font-size: 1.1em;
`;

const StyledLink = styled.a`
	color: ${getThemeVariable('colors.primary')};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export {
    StyledDescription,
    StyledQuotesContainer,
    StyledSection,
    StyledIcon,
    StyledName,
    StyledLink
};