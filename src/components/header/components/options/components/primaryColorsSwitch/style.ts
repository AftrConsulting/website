import styled from 'styled-components';

const StyledPrimaryColor = styled.div<{ primaryColor: string, active: boolean }>`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: ${(p): string => p.primaryColor};
	border: 3px solid ${(p): string => p.primaryColor};
	display: inline-block;
	margin-right: 10px;
	cursor: pointer;

	${(p): string => p.active ? `
		border-color: ${p.theme.global.primaryColors.borderColor};
	` : ''}
`;

export {
    StyledPrimaryColor
};