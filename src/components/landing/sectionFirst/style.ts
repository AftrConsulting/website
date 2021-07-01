import styled from 'styled-components';
import { Section } from 'src/components/elements/section';
import { getThemeVariable } from 'src/theme/utils';
import { Row } from 'src/components/elements/row';
import { CTA } from 'src/components/special/cta';
import { devices } from 'src/theme';

const StyledSection = styled(Section)`
	padding: 100px 0px;

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

	> picture {
		alignItems: center;
		display: flex;
		height: 100%;
	}

	img {
		display: inline-block;
		border-radius: ${getThemeVariable('global.borderRadius')};
		object-fit: cover;
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
	background: ${getThemeVariable('colors.primary')};
	font-size: 1.6em;
	font-weight: bold;
	height: auto;
	line-height: auto;
	padding: 7.5px 30px;
	text-transform: uppercase;
	user-select: none;
	margin-top: 20px;

	&:hover {
		text-decoration: underline;
		background: ${getThemeVariable('colors.primaryHovered')};
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		border-width: 3px;
		font-size: 1.2em;
	}

	@media screen and (max-width: ${devices.mobile}) {
		padding: 2.5px 15px;
		margin-top: 30px;
	}

	@media screen and (max-width: ${devices.mediumMobile}) {
		font-size: 1em;
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
		}
	}
`;

const StyledUnderStars = styled.div`
	font-style: italic;
`;

const StyledSubH1 = styled.div`
	text-transform: uppercase;
	font-weight: 300;
    font-size: 1.1em;
`;

const StyledSealsContainer = styled.div`
	margin-top: 15px;

	> div {
		vertical-align: middle;
		margin-top: 10px;

		&:first-of-type {
			margin-right: 20px;
		}

		&:last-of-type {
			margin-left: 20px;
		}
	}

	@media screen and (max-width: ${devices.mediumMobile}) {
		> div:last-of-type {
			display: none;
		}
	}

	@media screen and (max-width: ${devices.verySmallMobile}) {
		> div:nth-child(2) {
			display: none;
		}
	}
`;

export {
    StyledSubH1,
    StyledSection,
    StyleImgContainer,
    StyledRow,
    StyledButton,
    StyledH1,
    StyledPerksContainer,
    StyledUnderStars,
    StyledSealsContainer
};