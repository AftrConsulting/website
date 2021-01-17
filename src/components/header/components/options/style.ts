import styled from 'styled-components';

const StyledTitle = styled.div`
	padding: 20px 80px;
	padding-bottom: 0px;
	font-weight: bold;
	font-size: 1.2em;
`;

const StyledContainer = styled.div`
	padding: 0px 10px;
`;

const StyledSubTitle = styled.div`
	text-decoration: underline;
	margin-top: 20px;
	margin-bottom: 10px;
`;

const StyledButton = styled.button<{ active: boolean; }>`
	border: none;
	display: inline-block;
	padding: 7px 10px;
	border-radius: ${(p): string => p.theme.global.borderRadius};
	margin-right: 10px;
	color: ${(p): string => p.theme.global.color};
	background: ${(p): string => p.theme.global.header.options.languages.background};
	cursor: pointer;

	${(p): string => p.active ? 
        `background: ${p.theme.colors.primary};
		 color: ${p.theme.global.header.options.languages.activeColor};` 
		 : ''}
`;

export {
    StyledSubTitle,
    StyledContainer,
    StyledTitle,
    StyledButton
};