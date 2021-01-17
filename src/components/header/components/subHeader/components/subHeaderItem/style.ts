import styled from 'styled-components';

const StyledSubHeaderItemContainer = styled.div`
	display: inline-block;
	padding: 0px 1em;
	line-height: 60px;
	height: 100%;
	cursor: pointer;

	&:hover {
		color: ${(p): string => p.theme.colors.primary};
	}
`;

export {
    StyledSubHeaderItemContainer
};