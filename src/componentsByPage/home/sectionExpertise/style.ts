import styled from 'styled-components';
import { Paragraph } from 'src/componentsByPage/home/paragraph';
import { Section } from 'src/componentsByPage/home/section';
import { devices } from 'src/theme';

const StyledSection = styled(Section)`
	border-top: 1px solid ${(p): string => p.theme.global.borderColor};
`;

const StyledExpertiseContainer = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr 1fr 1fr;

	> div {
		border-radius: ${(p): string => p.theme.global.borderRadius};
		background: ${(p): string => p.theme.pages.home.expertises.cardBackground};
		padding: 20px;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: ${devices.mobile}) {
		grid-template-columns: 1fr;
	}
`;

const StyledTitle = styled.div`
	font-size: 1.3em;
	font-weight: bold;
	margin-bottom: 10px;
`;

const StyledSeparator = styled.div`
	height: 4px;
	width: 40%;
    max-width: 250px;
	margin-top: 40px;
	margin-bottom: 30px;
	margin-left: auto;
	margin-right: auto;
	background: ${(p): string => p.theme.colors.primary};
	border-radius: ${(p): string => p.theme.global.borderRadius};
`;

const StyledParagraph = styled(Paragraph)`
	font-size: .95em !important;
`;

const StyledPS = styled.div`
	font-style: italic;
	text-align: center;
`;

export {
    StyledExpertiseContainer,
    StyledParagraph,
    StyledSeparator,
    StyledSection,
    StyledTitle,
    StyledPS
};