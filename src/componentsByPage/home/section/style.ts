import styled from 'styled-components';
import { devices } from 'src/theme';

const StyledContainer = styled.div`
	padding: 120px 0px;
	border-bottom: 1px solid ${(p): string => p.theme.global.borderColor};

	@media screen and (max-width: ${devices.smallTablet}) {
		padding: 80px 0px;
	}

	@media screen and (max-width: ${devices.mobile}) {
		padding: 50px 0px;
	}
`;

export {
    StyledContainer
};