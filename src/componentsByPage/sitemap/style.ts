import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledLink = styled.a`
	color: ${getThemeVariable('colors.primary')};
	display: inline-block;
	margin-bottom: 5px;
`;

const StyledContainer = styled.div`
	margin-bottom: 40px;
`;

export {
    StyledLink,
    StyledContainer
};