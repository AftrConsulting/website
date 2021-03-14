import styled from 'styled-components';

const StyledLink = styled.a`
	color: ${(p): string => p.theme.colors.primary};
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