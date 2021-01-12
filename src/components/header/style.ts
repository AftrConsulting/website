import styled from 'styled-components';
import { Row } from 'src/components/row';

const StyledHeader = styled.div`
	width: 100%;
	height: 60px;
	border-bottom: 1px solid ${(p): string => p.theme.global.borderColor};
`;

const StyledHeaderRow = styled(Row)`
	justify-content: space-between;
	flex-direction: row;
	display: flex;
	height: 100%;

	& > div {
		flex: 1;
	}
`;

const StyledButton = styled.button`
	margin-right: auto;
	background: transparent;
	border: none;
	padding: 0px 20px;
	cursor: pointer;
	font-size: 20px;
	border-left: 1px solid ${(p): string => p.theme.global.borderColor};
	border-right: 1px solid ${(p): string => p.theme.global.borderColor};
	color: ${(p): string => p.theme.global.header.iconColor};
`;

export {
    StyledHeader,
    StyledButton,
    StyledHeaderRow
};
