import styled from 'styled-components';
import { devices } from 'src/theme';

const StyledContainer = styled.div`
	padding-top: 60px;

	@media screen and (max-width: ${devices.mobile}) {
		padding-top: 50px;
	}
`;

export {
    StyledContainer
};