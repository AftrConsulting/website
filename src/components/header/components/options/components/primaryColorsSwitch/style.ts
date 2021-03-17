import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledPrimaryColor = styled.div<{ primaryColor: string, active: boolean }>`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background: ${(p): string => p.primaryColor};
	display: inline-block;
	margin-right: 10px;
	cursor: pointer;
	color: ${getThemeVariable('global.primaryColors.color')};
	text-align: center;
	vertical-align: top;

	svg {
		display: none;
		margin-top: 10px;
	}

	${(p): string => p.active ? `
		svg {
			display: inline-block;
		}
	` : ''}
`;

export {
    StyledPrimaryColor
};