import styled from 'styled-components';
import { lighten } from 'polished';
import { Section } from 'src/components/section';

const StyledSection = styled(Section)`
	background: ${(p): string => p.theme.colors.primary};
	color: ${(p): string => p.theme.global.footer.color};
	text-align: center;
`;

const StyledCopyright = styled.div`
	background: ${(p): string => p.theme.colors.primary};
	border-top: 1px solid ${(p): string => lighten(.1, p.theme.colors.primary)};
	color: ${(p): string => p.theme.global.footer.color};
	padding: 20px;
	text-align: center;
	font-size: .9em;
`;

const StyledName = styled.div`
	border: 1px solid ${(p): string => lighten(.1, p.theme.colors.primary)};
	display: inline-block;

	img {
		height: 40px;
	}
`;

export {
    StyledCopyright,
    StyledSection,
    StyledName
};