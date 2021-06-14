import styled from 'styled-components';
import { SideBySide } from 'src/components/landing/sideBySide';
import { Paragraph } from 'src/components/elements/paragraph';
import { SubTitle } from 'src/components/landing/subTitle';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';
import { OutsideLink } from 'src/components/elements/outsideLink';

const StyledSideBySide = styled(SideBySide)`
	padding-left: 0px;
	padding-right: 0px;
	margin-bottom: 50px;
`;

const StyledImgContainer = styled.div`
	background: ${getThemeVariable('pages.porfolio.image.background')};
	border-radius: ${getThemeVariable('global.borderRadius')};
	padding: 1px;

	img {
		border-radius: ${getThemeVariable('global.borderRadius')};
		width: 100%;
	}
`;

const StyledSubTitle = styled(SubTitle)`
	@media screen and (max-width: ${devices.smallTablet}) {
		margin-top: 30px;
	}
`;

const StyledOutsideLink = styled(OutsideLink)`
	color: ${getThemeVariable('colors.primary')};
	margin-top: 20px;
	display: inline-block;
`;

const StyledParagraph = styled(Paragraph)`
	margin-bottom: 50px;
`;

export {
    StyledImgContainer,
    StyledSideBySide,
    StyledSubTitle,
    StyledOutsideLink,
    StyledParagraph
};