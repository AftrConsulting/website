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

const StyledSeparator = styled.div`
	width: 40%;
	max-width: 250px;
	height: 5px;
	background: 'white';
	margin: 40px auto;
	border-radius: 10px;
`;

export {
    StyledSeparator,
    StyledCopyright,
    StyledSection,
    StyledName
};