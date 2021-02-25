import styled from 'styled-components';
import { lighten } from 'polished';
import { Section } from 'src/components/section';

const StyledSection = styled(Section)`
	background: ${(p): string => p.theme.global.footer.background};
	color: ${(p): string => p.theme.global.footer.color};
	text-align: center;
`;

const StyledCopyright = styled.div`
	background: ${(p): string => p.theme.global.footer.background};
	border-top: 1px solid ${(p): string => p.theme.global.footer.borderColor};
	color: ${(p): string => p.theme.global.footer.color};
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

const StyledSeparator = styled.div`
	width: 40%;
	max-width: 250px;
	height: 5px;
	background: ${(p): string => 'white'};
	margin: 40px auto;
	border-radius: 10px;
`;

export {
    StyledSeparator,
    StyledCopyright,
    StyledSection,
    StyledName
};