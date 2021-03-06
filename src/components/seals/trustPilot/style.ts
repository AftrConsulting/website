import styled from 'styled-components';
import { SVGImage } from 'src/components/elements/svgImage';
import { getThemeVariable } from 'src/theme/utils';

const StyledContainer = styled.div`
	display: inline-block;
	text-align: center;
	user-select: none;

	a {
		text-decoration: none;
		color: ${getThemeVariable('colors.color')};
	}
`;

const StyledTitle = styled.div`
	margin-top: 5px;
	font-size: 16px;
`;

const StyledBold = styled.span`
	font-weight: bold;
`;

const StyledLogo = styled(SVGImage)`
	height: 25px;
	margin-bottom: 5px;
`;

const StyledFiveStars = styled(SVGImage)`
	height: 30px;
`;

export {
    StyledContainer,
    StyledTitle,
    StyledBold,
    StyledLogo,
    StyledFiveStars
};