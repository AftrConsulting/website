import styled from 'styled-components';
import { devices } from 'src/theme';

const StyledLogoContainer = styled.div`
	text-align: center;
	padding: 0px 10px;
`;

const StyledName = styled.div`
	background: ${(p): string => p.theme.colors.primary};
	display: inline-block;

	img {
		height: 40px;

		@media screen and (max-width: ${devices.mobile}) {
			height: 30px;
			width: 75px;
		}
	}
`;

const StyledLanguage = styled.button`
	background: ${(p): string => p.theme.global.header.logo.language.background};
	color: ${(p): string => p.theme.global.header.logo.language.color};
	border-radius: ${(p): string => p.theme.global.borderRadius};
	display: inline-block;
	padding: 2px 5px;
	vertical-align: bottom;
	margin-left: 10px;
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
    StyledName,
    StyledLanguage
};