import styled from 'styled-components';
import { Section } from 'src/components/section';
import { Row } from 'src/components/row';
import { devices } from 'src/theme';

const StyledSection = styled(Section)`
	border-top: 1px solid ${(p): string => p.theme.global.borderColor};
`;

const StyledCenter = styled(Row)`
	display: flex;

	> div:first-of-type {
		flex: 1;
		padding-right: 80px;
	}

	> div:last-of-type {
		display: flex;
		align-items: center;
	}

	@media screen and (max-width: ${devices.tablet}) {
		display: block;

		> div:first-of-type {
			padding-bottom: 40px;
			padding-right: 0px;
		}
	}

	@media screen and (max-width: ${devices.mobile}) {
		> div:first-of-type {
			padding-bottom: 30px;
		}
	}
`;

const StyledButton = styled.button`
	background: transparent;
	border: 4px solid ${(p): string => p.theme.colors.primary};
	border-radius: ${(p): string => p.theme.global.borderRadius};
	color: ${(p): string => p.theme.colors.primary};
	font-size: 1.4em;
	padding: 10px 25px;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}

	svg {
		margin-left: 10px;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		border-width: 3px;
		font-size: 1.2em;
	}

	@media screen and (max-width: ${devices.mobile}) {
		border-width: 2px;
		font-size: 1em;
	}
`;

export {
    StyledCenter,
    StyledSection,
    StyledButton
};