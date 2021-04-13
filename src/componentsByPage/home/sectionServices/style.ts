import styled from 'styled-components';
import { SideBySide } from 'src/componentsByPage/home/sideBySide';
import { devices } from 'src/theme';

const StyleImgContainer = styled.div`
	text-align: center;

	svg {
		display: inline-block;
		height: 205px;
		width: 300px;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		margin-top: 40px;
	}
`;

const StyledSideBySide = styled(SideBySide)`
	padding-bottom: 80px;

	> div {
		&:last-of-type {
			padding: 0px;
		}

		&:first-of-type {
			padding-right: 60px;
			padding-left: 0px;
		}
	}
	
	&:last-of-type {
		padding-bottom: 0px;
	}

	&:nth-child(odd) {
		flex-direction: row-reverse;

		> div {
			&:last-of-type {
				padding: 0px;
			}
	
			&:first-of-type {
				padding-left: 60px;
				padding-right: 0px;
			}
		}
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		padding-bottom: 40px;

		> div {
			&:first-of-type {
				padding: 0px;
			}
		}

		&:nth-child(odd) {
			flex-direction: row;

			> div {
				&:first-of-type {
					padding: 0px;
				}
			}
		}
	}
`;

export {
    StyledSideBySide,
    StyleImgContainer
};