import styled from 'styled-components';
import { Section } from 'src/componentsByPage/home/section';

const StyledSection = styled(Section)`
	border-top: 1px solid ${(p): string => p.theme.global.borderColor};
`;

export {
    StyledSection
};