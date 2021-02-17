import styled from 'styled-components';
import { SideBySide } from 'src/componentsByPage/home/sideBySide';
import { devices } from 'src/theme';

const StyleImgContainer = styled.div`
	text-align: center;

	svg {
		display: inline-block;
		height: 300px;
		width: 300px;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		display: none;
	}
`;

const StyledSideBySide = styled(SideBySide)`
	padding-bottom: 40px;

	&:last-of-type {
		padding-bottom: 0px;
	}
`;

export {
    StyledSideBySide,
    StyleImgContainer
};