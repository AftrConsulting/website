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
	user-select: none;
`;

const StyledName = styled.div`
	background: ${(p): string => p.theme.colors.primary};
	display: inline-block;
	margin-bottom: 20px;
	user-select: none;

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
	user-select: none;

	a {
		color: ${(p): string => p.theme.global.footer.menuColor};
		display: inline-block;
		padding: 2px 7.5px;
	}
`;

const StyledIcons = styled.div`
	margin-top: 30px;

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

const StyledQuote = styled.div`
	font-style: italic;
	margin-bottom: 20px;
	user-select: none;
`;

export {
    StyledCopyright,
    StyledSection,
    StyledName,
    StyledMailLink,
    StyledMenu,
    StyledIcons,
    StyledQuote
};