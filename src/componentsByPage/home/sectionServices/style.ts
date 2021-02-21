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
		margin-top: 40px;
	}
`;

const StyledSideBySide = styled(SideBySide)`
	padding-bottom: 40px;

	&:last-of-type {
		padding-bottom: 0px;
	}

	&:nth-child(odd) {
		flex-direction: row-reverse;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		&:nth-child(odd) {
			flex-direction: row;
		}
	}
`;

export {
    StyledSideBySide,
    StyleImgContainer
};