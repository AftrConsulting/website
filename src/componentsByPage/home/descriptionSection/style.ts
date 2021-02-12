import styled from 'styled-components';
import { Row } from 'src/components/row';
import { devices } from 'src/theme';

const StyledRow = styled(Row)`
	display: flex;

	> div {
		&:first-of-type {
			padding-right: 40px;
		}

		&:last-of-type {
			padding-left: 40px;
		}

		@media screen and (max-width: ${devices.tablet}) {
			&:first-of-type {
				padding-right: 20px;
			}
	
			&:last-of-type {
				padding-left: 20px;
			}
		}

		flex: 1;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		display: block;

		> div {
			&:first-of-type {
				padding-right: 0px;
				margin-bottom: 40px;
			}
	
			&:last-of-type {
				padding-left: 0px;
			}
		}
	}
`;

const StyledH2 = styled.h2`
	line-height: 40px;
	font-size: 1.9em;
	margin: 10px 0px 30px;

	@media screen and (max-width: ${devices.smallTablet}) {
		margin-bottom: 20px;
		line-height: 30px;
		font-size: 1.5em;
	}
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

	@media screen and (max-width: ${devices.smallTablet}) {
		div {
			height: 50px;
			width: 50px;
		}
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