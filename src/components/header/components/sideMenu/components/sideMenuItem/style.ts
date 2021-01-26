import styled from 'styled-components';

const StyledSideMenuItemContainer = styled.div`
	border-bottom: 1px solid ${(p): string => p.theme.global.borderColor};

	a, div {
		display: block;
		padding: 15px;
		text-decoration: none;
		cursor: pointer;
		position: relative;
		color: ${(p): string => p.theme.global.color};

		@media (hover: hover) and (pointer: fine) {
			&:hover {
				color: ${(p): string => p.theme.colors.primary};
			}
		}

		&.active {
			pointer-events: none;
			text-decoration: underline;
		}

		svg {
			position: absolute;
			right: 15px;
		}
	}
`;

export {
    StyledSideMenuItemContainer
};