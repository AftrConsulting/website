import styled from 'styled-components';

const StyledSideMenuItemContainer = styled.div`
	margin-bottom: 10px;
`;

const SideMenuItemClose = styled.div`
	border-bottom: 1px solid ${(p): string => p.theme.global.borderColor};
	background: ${(p): string => p.theme.global.header.sideMenu.goBackBackground};
	cursor: pointer;
	padding: 15px;

	svg {
		margin-right: 15px;
	}
`;

export {
    StyledSideMenuItemContainer,
    SideMenuItemClose
};