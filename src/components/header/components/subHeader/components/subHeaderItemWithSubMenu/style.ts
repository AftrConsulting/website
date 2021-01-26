import styled from 'styled-components';

const SubHeaderItemWithSubMenuContainer = styled.div`
	position: absolute;
	background: ${(p): string => p.theme.colors.background};
	border: 1px solid ${(p): string => p.theme.global.borderColor};
	top: 45px;
	padding: 0px;

	a {
		display: block;
		color: ${(p): string => p.theme.colors.color};
		padding: 10px 20px;
		line-height: normal;
		border-bottom: 1px solid ${(p): string => p.theme.global.borderColor};

		&:last-of-type {
			border-bottom: 0px;
		}

		@media (hover: hover) and (pointer: fine) {
			&:hover {
				color: ${(p): string => p.theme.colors.primary};
			}
		}

		&.active {
			pointer-events: none;
			text-decoration: underline;
		}
	}
`;

export {
    SubHeaderItemWithSubMenuContainer
};