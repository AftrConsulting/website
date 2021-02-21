import styled from 'styled-components';
import { Paragraph } from 'src/componentsByPage/home/paragraph';
import { Section } from 'src/componentsByPage/home/section';
import { Row } from 'src/components/row';
import { CTA } from 'src/components/cta';
import { devices } from 'src/theme';

const StyledSection = styled(Section)`
	background: ${(p): string => p.theme.pages.home.description.background};	
`;

const StyledRow = styled(Row)`
	display: flex;
`;

const StyledCTA = styled(CTA)`
	border: 4px solid ${(p): string => p.theme.colors.primary};
	color: ${(p): string => p.theme.colors.primary};
	font-size: 1.4em;
	height: auto;
	line-height: auto;
	padding: 5px 25px;
	background: transparent;
	user-select: none;
	margin-top: 20px;
`;

const StyledParagraph = styled(Paragraph)`
	font-style: italic;
`;

const StyledSeparator = styled.div`
	width: 40%;
	max-width: 250px;
	height: 5px;
	background: ${(p): string => p.theme.colors.color};
	margin-bottom: 20px;
	border-radius: 10px;
`;

export {
    StyledSeparator,
    StyledParagraph,
    StyledSection,
    StyledRow,
    StyledCTA
};