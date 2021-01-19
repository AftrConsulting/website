import styled from 'styled-components';
import { devices } from 'src/theme';

const StyledLogoContainer = styled.div`
	text-align: center;
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

	@media screen and (max-width: ${devices.mobile}) {
		height: 30px;
		width: 30px;
	}
`;

const StyledName = styled.div`
	display: inline-block;
	padding-left: 10px;
	padding-right: 5px;
	vertical-align: top;
	line-height: 40px;
	cursor: pointer;
	color: ${(p): string => p.theme.global.color};

	@media screen and (max-width: ${devices.mobile}) {
		line-height: 30px;
	}
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
	width: 30px;
	text-align: center;
	
	&:hover {
		background: ${(p): string => p.theme.global.header.logo.language.backgroundHover};
	}
`;

export {
    StyledLogoContainer,
    StyledLogo,
    StyledName,
    StyledLanguage
};