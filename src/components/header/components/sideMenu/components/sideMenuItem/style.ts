import styled from 'styled-components';

const StyledSideMenuItemContainer = styled.div`
	border-bottom: 1px solid ${(p): string => p.theme.global.borderColor};

	a, div {
		display: block;
		padding: 15px;
		text-decoration: none;
		color: ${(p): string => p.theme.global.color};

		&:hover {
			color: ${(p): string => p.theme.colors.primary};
		}

		&.active {
			pointer-events: none;
			text-decoration: underline;
		}
	}
`;

export {
    StyledSideMenuItemContainer
};