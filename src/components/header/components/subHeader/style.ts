import styled from 'styled-components';
import { devices } from 'src/theme';

const StyledSubHeaderContainer = styled.div`
	flex: 1;
	text-align: center;
	height: 100%;

	@media screen and (max-width: ${devices.smallTablet}) {
		& > div {
			display: none;
		}
	}
`;

const StyledButtonContainer = styled.div`
	padding: 0px 10px;

	a {
		@media screen and (max-width: ${devices.mobile}) {
			padding: 0px 10px;
			line-height: 30px;
			height: 30px;
		}

		@media screen and (max-width: 400px) {
			display: none;
		}
	}
`;

export {
    StyledSubHeaderContainer,
    StyledButtonContainer
};