import styled from 'styled-components';
import { devices } from 'src/theme';

const StyledTitle = styled.h2`
	line-height: 40px;
	font-size: 1.9em;
	margin: 10px 0px 30px;

	@media screen and (max-width: ${devices.smallTablet}) {
		margin-bottom: 20px;
		line-height: 30px;
		font-size: 1.5em;
	}
`;

export {
    StyledTitle
};