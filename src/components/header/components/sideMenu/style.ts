import styled from 'styled-components';

const StyledLogoContainer = styled.div`
	border-bottom: 1px solid ${(p): string => p.theme.global.borderColor};
	padding: 10px;

	& > div {
		width: 200px;
	}
`;

const StyledSideMenuItemContainer = styled.div`
	margin-bottom: 10px;
`;

const StyledSideMenuItemFooterContainer = styled.div`
	margin-top: 20px;
	text-align: center;
`;

export {
    StyledSideMenuItemContainer,
    StyledLogoContainer,
    StyledSideMenuItemFooterContainer
};