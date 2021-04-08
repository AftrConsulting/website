import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { MyLink } from 'src/components/link';

const StyledLink = styled(MyLink)`
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