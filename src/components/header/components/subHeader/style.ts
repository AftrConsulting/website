import styled from 'styled-components';

const StyledLogoContainer = styled.div`
	padding: 0px 10px;
`;

const StyledSubHeaderContainer = styled.div`
	flex: 1;
	text-align: center;
	height: 100%;
`;

const StyledButtonContainer = styled.div`
	padding: 0px 10px;
`;

const StyledLogo = styled.div`
	border-radius: ${(p): string => p.theme.global.borderRadius};
	background: ${(p): string => p.theme.global.header.logo.background};
	height: 40px;
	width: 40px;
`;

export {
    StyledLogoContainer,
    StyledSubHeaderContainer,
    StyledButtonContainer,
    StyledLogo
};