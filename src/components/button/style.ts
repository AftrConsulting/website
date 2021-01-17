import styled from 'styled-components';
import { darken } from 'polished';

const StyledButton = styled.button`
	padding: 10px 15px;
	border: none;
	color: white;
	background: ${(p): string => p.theme.colors.primary};
	border-radius: ${(p): string => p.theme.global.borderRadius};
	cursor: pointer;

	&:hover {
		background: ${(p): string => darken(.1, p.theme.colors.primary)};
	}
`;

const StyledLink = styled.a`
	padding: 0px 15px;
	border: none;
	color: white;
	background: ${(p): string => p.theme.colors.primary};
	border-radius: ${(p): string => p.theme.global.borderRadius};
	cursor: pointer;
	display: inline-block;
	text-decoration: none;
	height: 40px;
	line-height: 40px;

	&:hover {
		background: ${(p): string => darken(.1, p.theme.colors.primary)};
	}
`;

export {
    StyledButton,
    StyledLink
};