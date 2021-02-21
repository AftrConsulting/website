import styled from 'styled-components';
import { Paragraph } from 'src/componentsByPage/home/paragraph';
import { CTA } from 'src/components/cta';
import { devices } from 'src/theme';

const StyledContainer = styled.div`
	background: ${(p): string => p.theme.pages.home.bookConsultation.background};
	border-radius: ${(p): string => p.theme.global.borderRadius};
	border: 4px solid ${(p): string => p.theme.colors.primary};
	padding: 40px;
	margin-top: 80px;
	display: flex;

	> div:first-of-type {
		flex: 1;
		padding-right: 40px;
	}

	> div:last-of-type {
		display: flex;
		align-items: center;
	}

	@media screen and (max-width: ${devices.tablet}) {
		> div:first-of-type {
			padding-bottom: 40px;
			padding-right: 0px;
		}

		display: block;
	}


	@media screen and (max-width: ${devices.smallTablet}) {
		margin-top: 40px;

		> div:first-of-type {
			padding-bottom: 20px;
		}
	}

	@media screen and (max-width: ${devices.mobile}) {
		padding: 20px;
	}
`;

const StyledCTA = styled(CTA)`
	font-size: 1.4em;
	height: auto;
	line-height: auto;
	padding: 10px 25px;
	user-select: none;

	@media screen and (max-width: ${devices.smallTablet}) {
		font-size: 1.2em;
	}
`;

const StyledTitle = styled.div`
	font-size: 1.8em;
	font-weight: bold;
	margin-bottom: 20px;

	@media screen and (max-width: ${devices.smallTablet}) {
		font-size: 1.5em;
	}
`;

const StyledParagraph = styled(Paragraph)`
	font-style: italic;
`;

export {
    StyledParagraph,
    StyledTitle,
    StyledContainer,
    StyledCTA
};