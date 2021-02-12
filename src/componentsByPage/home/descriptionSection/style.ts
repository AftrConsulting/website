import styled from 'styled-components';
import { Row } from 'src/components/row';
import { devices } from 'src/theme';

const StyledRow = styled(Row)`
	display: flex;

	> div {
		&:first-of-type {
			padding-right: 50px;
		}

		&:last-of-type {
			padding-left: 50px;
		}

		flex: 1;
	}
`;

const StyledH2 = styled.h2`
	line-height: 40px;
	font-size: 1.9em;
	margin: 10px 0px 30px;
`;

const StyledDescription = styled.div`
	font-size: 1em;
	line-height: 26px;

	div:last-of-type {
		font-style: italic;
	}
`;

const StyledSubTitle = styled.div`
	font-weight: 300;
	font-size: 1.1em;
	text-transform: uppercase;
`;

const StyledSeparator = styled.div`
	width: 120px;
	height: 5px;
	background: ${(p): string => p.theme.colors.primary};
	margin: 40px auto;
	border-radius: 10px;
`;

const StyledIconContainer = styled.div<{ size: string; }>`
	vertical-align: top;
	display: inline-block;
	margin-right: 20px;

	div {
		background: ${(p): string => p.theme.colors.primary};
		height: 60px;
		width: 60px;
		border-radius: ${(p): string => p.theme.global.borderRadius};
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	svg {
		height: ${(p): string => p.size};
		width: ${(p): string => p.size};
	}
`;

export {
    StyledIconContainer,
    StyledSeparator,
    StyledDescription,
    StyledRow,
    StyledH2,
    StyledSubTitle
};