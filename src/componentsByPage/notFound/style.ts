import styled from 'styled-components';
import { darken } from 'polished';
import { MyLink } from 'src/components/link';

const StyledLink = styled(MyLink)`
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
	margin-top: 10px;
	margin-bottom: 60px;

	&:hover {
		background: ${(p): string => darken(.1, p.theme.colors.primary)};
	}
`;

export {
    StyledLink
};