import styled from 'styled-components';

const StyledLoadingBar = styled.div`
	height: 5px;
	width: 0%;
	z-index: 999999999;
	position: absolute;
	background: ${(p): string => p.theme.colors.primary};
	top: 0px;
`;

export {
    StyledLoadingBar
};