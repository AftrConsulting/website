import styled from 'styled-components';

const StyledMarkdownContainer = styled.div`
	margin-bottom: 40px;

	a {
		color: ${(p): string => p.theme.colors.primary};
	}

	p {
		line-height: 24px;
	}

	h3 {
		margin: 30px 0px;
	}
`;

export {
    StyledMarkdownContainer
};