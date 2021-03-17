import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { Section } from 'src/components/section';
import { devices } from 'src/theme';

const StyledSection = styled(Section)`
	background: ${getThemeVariable('pages.home.description.background')};
`;

const StyledItalicText = styled.div`
	font-style: italic;
`;

const StyledSeparator = styled.div`
	width: 40%;
	max-width: 250px;
	height: 5px;
	background: ${getThemeVariable('colors.primary')};
	margin: 40px auto;
	border-radius: 10px;
`;

const StyledIconContainer = styled.div<{ size: string; }>`
	vertical-align: top;
	display: inline-block;
	margin-right: 20px;

	div {
		background: ${getThemeVariable('colors.primary')};
		height: 60px;
		width: 60px;
		border-radius: ${getThemeVariable('global.borderRadius')};
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	svg {
		height: ${(p): string => p.size};
		width: ${(p): string => p.size};
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		div {
			height: 50px;
			width: 50px;
		}
	}
`;

const StyledIconAllContainer = styled.div`
	margin-bottom: 40px;
`;

export {
    StyledIconAllContainer,
    StyledSection,
    StyledIconContainer,
    StyledSeparator,
    StyledItalicText
};