import styled from 'styled-components';
import { CTA } from 'src/components/cta';
import { Row } from 'src/components/row';
import { devices } from 'src/theme';

const StyledRow = styled(Row)`
	display: flex;

	> div {
		flex: 1;
	}
`;

const StyleImgContainer = styled.div`
	text-align: center;

	svg {
		display: inline-block;
		height: 400px;
		width: 400px;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		display: none;
	}
`;

const StyledH1 = styled.h1`
	font-size: 2.7em;
	margin: 0px;

	@media screen and (max-width: ${devices.smallTablet}) {
		font-size: 2.4em;
	}

	@media screen and (max-width: ${devices.mobile}) {
		line-height: 35px;
		font-size: 1.6em;
	}
`;

const StyledH1Span = styled.span`
	color: ${(p): string => p.theme.colors.primary};
`;

const StyledButton = styled(CTA)`
	border: 4px solid ${(p): string => p.theme.colors.primary};
	color: ${(p): string => p.theme.colors.primary};
	font-size: 1.4em;
	height: auto;
	line-height: auto;
	padding: 5px 25px;
	background: transparent;
	user-select: none;
	margin-top: 60px;

	&:hover {
		text-decoration: underline;
		background: transparent;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		border-width: 3px;
		font-size: 1.2em;
	}

	@media screen and (max-width: ${devices.mobile}) {
		border-width: 2px;
		font-size: 1em;
		padding: 2.5px 10px;
		margin-top: 30px;
	}
`;

export {
    StyleImgContainer,
    StyledRow,
    StyledH1Span,
    StyledButton,
    StyledH1
};