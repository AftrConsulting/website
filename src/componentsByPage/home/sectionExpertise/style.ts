import styled from 'styled-components';
import { Section } from 'src/componentsByPage/home/section';
import { devices } from 'src/theme';

const StyledSection = styled(Section)`
	border: 1px solid ${(p): string => p.theme.global.borderColor};
	color: ${(p): string => p.theme.global.home.expertise.color};
`;

const StyledExpertiseContainer = styled.ul`
	padding: 0px;
	margin: 0px;
	display: flex;
	flex-direction: column;
	list-style: none;
	flex-wrap: wrap;
	width: auto;
	max-height: 180px;
	
	li {
		margin-top: 10px;
		margin-bottom: 10px;
		display: flex;
		width: 25%;
		margin-right: 10px;

		div {
			flex: 1;
		}

		svg {
			margin-right: 10px;
		}
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		max-height: 220px;
		
		li {
			width: 33.33%;
		}
	}

	@media screen and (max-width: ${devices.mobile}) {
		max-height: 320px;

		li {
			width: 50%;
		}
	}
`;

export {
    StyledExpertiseContainer,
    StyledSection
};