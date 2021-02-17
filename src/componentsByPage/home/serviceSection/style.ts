import styled from 'styled-components';
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

export {
    StyleImgContainer
};