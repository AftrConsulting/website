import styled from 'styled-components';

const StyledSubHeaderItemContainer = styled.div`
	display: inline-block;
	height: 100%;

	div, a {
		padding: 0px 1em;
		line-height: 60px;
		display: block;
		color: ${(p): string => p.theme.colors.color};
		text-decoration: none;
		cursor: pointer;
		
		&:hover {
			color: ${(p): string => p.theme.colors.primary};
		}

		&.active {
			pointer-events: none;
			text-decoration: underline;
		}
	}

	svg {
		margin-left: 5px;
		font-size: .8em;
	}
`;

export {
    StyledSubHeaderItemContainer
};