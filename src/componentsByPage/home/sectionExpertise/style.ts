import styled from 'styled-components';
import { Section } from 'src/componentsByPage/home/section';

const StyledSection = styled(Section)`
	background: ${(p): string => p.theme.colors.primary};
	color: ${(p): string => p.theme.global.home.expertise.color};
`;

export {
    StyledSection
};