import styled from 'styled-components';
import { Paragraph } from 'src/componentsByPage/home/paragraph';
import { getThemeVariable } from 'src/theme/utils';
import { Section } from 'src/components/section';
import { CTA } from 'src/components/cta';
import { Row } from 'src/components/row';
import { devices } from 'src/theme';

const StyledSection = styled(Section)`
	padding: 140px 0px;

	@media screen and (max-width: ${devices.smallTablet}) {
		padding: 80px 0px;
	}

	@media screen and (max-width: ${devices.mobile}) {
		padding: 50px 0px;
	}
`;

const StyledRow = styled(Row)`
	display: flex;

	> div {
		flex: 1;
	}
`;

const StyleImgContainer = styled.div`
	text-align: center;

	svg {
		display: inline-block;
		height: 400px;
		width: 400px;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		display: none;
	}
`;

const StyledH1 = styled.h1`
	font-size: 2.2em;
	margin: 0px;
	margin-bottom: 10px;

	@media screen and (max-width: ${devices.smallTablet}) {
		font-size: 2.2em;
	}

	@media screen and (max-width: ${devices.mobile}) {
		margin-top: 2px;
		line-height: 26px;
		font-size: 1.4em;
	}
`;

const StyledButton = styled(CTA)`
	border: 4px solid ${getThemeVariable('colors.primary')};
	color: ${getThemeVariable('colors.primary')};
	font-size: 1.4em;
	height: auto;
	line-height: auto;
	padding: 5px 25px;
	background: transparent;
	user-select: none;
	margin-top: 30px;

	&:hover {
		text-decoration: underline;
		background: transparent;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		border-width: 3px;
		font-size: 1.2em;
	}

	@media screen and (max-width: ${devices.mobile}) {
		padding: 2.5px 15px;
		margin-top: 30px;
	}
`;

const StyledStarsContainer = styled.div`
	margin-bottom: 15px;

	svg {
		color: ${getThemeVariable('colors.primary')};
		margin-right: 2px;
	}
`;

const StyledPerksContainer = styled.ul`
	list-style: none;
	margin-top: 15px;
	margin-bottom: 15px;
	padding: 0px;
	
	li {
		padding: 5px 0px;

		svg {
			margin-right: 7.5px;
			color: ${getThemeVariable('colors.primary')};
		}
	}
`;

const StyledUnderStars = styled.div`
	font-style: italic;
`;

const StyledParagraph = styled(Paragraph)`
	font-size: 1.1em;
	width: 80%;

	@media screen and (max-width: ${devices.mobile}) {
		width: 100%;
	}
`;

const StyledSubH1 = styled.div`
	text-transform: uppercase;
	font-weight: 300;
    font-size: 1.1em;
`;


export {
    StyledSubH1,
    StyledSection,
    StyleImgContainer,
    StyledRow,
    StyledButton,
    StyledH1,
    StyledStarsContainer,
    StyledPerksContainer,
    StyledUnderStars,
    StyledParagraph
};