import styled from 'styled-components';

const StyledLogoContainer = styled.div`
	padding: 0px 10px;
`;

const StyledSubHeaderContainer = styled.div`
	flex: 1;
	text-align: center;
	height: 100%;
`;

const StyledButtonContainer = styled.div`
	padding: 0px 10px;
`;

const StyledLogo = styled.div`
	border-radius: ${(p): string => p.theme.global.borderRadius};
	background: ${(p): string => p.theme.global.header.logo.background};
	height: 40px;
	width: 40px;
	vertical-align: top;
	display: inline-block;
	cursor: pointer;
`;

const StyledName = styled.div`
	display: inline-block;
	padding-left: 10px;
	padding-right: 5px;
	vertical-align: top;
	line-height: 40px;
	cursor: pointer;
`;

const StyledLanguage = styled.button`
	background: ${(p): string => p.theme.global.header.logo.language.background};
	color: ${(p): string => p.theme.global.header.logo.language.color};
	border-radius: ${(p): string => p.theme.global.borderRadius};
	display: inline-block;
	padding: 2px 5px;
	vertical-align: bottom;
	margin-left: 5px;
	border: none;
	cursor: pointer;
	font-style: italic;
	
	&:hover {
		background: ${(p): string => p.theme.global.header.logo.language.backgroundHover};
	}
`;

export {
    StyledLogoContainer,
    StyledSubHeaderContainer,
    StyledButtonContainer,
    StyledLogo,
    StyledLanguage,
    StyledName
};