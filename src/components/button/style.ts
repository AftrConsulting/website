import styled from 'styled-components';
import { darken } from 'polished';

const StyledButton = styled.button`
	padding: 10px 15px;
	border: none;
	color: white;
	background: ${(p): string => p.theme.colors.primary};
	border-radius: 7px;
	cursor: pointer;

	&:hover {
		background: ${(p): string => darken(.1, p.theme.colors.primary)};
	}
`;

const StyledLink = styled.a`
	padding: 10px 15px;
	border: none;
	color: white;
	background: ${(p): string => p.theme.colors.primary};
	border-radius: 7px;
	cursor: pointer;
	display: inline-block;
	text-decoration: none;

	&:hover {
		background: ${(p): string => darken(.1, p.theme.colors.primary)};
	}
`;

export {
    StyledButton,
    StyledLink
};