import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { SideBySide } from 'src/components/landing/sideBySide';

const StyledSideBySide = styled(SideBySide)`
	padding-left: 0px;
	padding-right: 0px;
	margin-bottom: 30px;
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

export {
    StyledImgContainer,
    StyledSideBySide
};