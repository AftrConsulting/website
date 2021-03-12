import styled from 'styled-components';
import { Section } from 'src/components/section';

const StyledSection = styled(Section)`
	background: ${(p): string => p.theme.global.footer.background};
	text-align: center;
`;

const StyledCopyright = styled.div`
	padding: 20px;
	text-align: center;
	font-size: .9em;
`;

const StyledName = styled.div`
	background: ${(p): string => p.theme.colors.primary};
	display: inline-block;
	margin-bottom: 20px;

	img {
		height: 40px;
	}
`;

const StyledMailLink = styled.a`
	color: ${(p): string => p.theme.colors.primary};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const StyledMenu = styled.div`
	margin-bottom: 20px;

	a {
		color: ${(p): string => p.theme.global.footer.menuColor};
		display: inline-block;
		padding: 0px 7.5px;
	}
`;

const StyledIcons = styled.div`
	a {
		display: inline-block;
		background: ${(p): string => p.theme.global.footer.icon.background};
		height: 40px;
		width: 40px;
		margin: 0px 7.5px;
		border-radius: ${(p): string => p.theme.global.borderRadius};

		div {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 40px;
			width: 40px;
		}

		svg {
			font-size: 1.5em;
			color: ${(p): string => p.theme.global.footer.icon.color};
		}
	}
`;

export {
    StyledCopyright,
    StyledSection,
    StyledName,
    StyledMailLink,
    StyledMenu,
    StyledIcons
};