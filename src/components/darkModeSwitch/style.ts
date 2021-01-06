import styled from 'styled-components';
import { Icon } from 'src/components/icon';

const SwitchContainerAll = styled.div`
	display: inline-block;
`;

const SwitchContainer = styled.div`
	position: relative;
	display: flex;
	margin: 3px;
`;

const SwitchTrack = styled.div<{ checked: boolean }>`
	width: 50px;
	height: 24px;
	background: ${'#ccc'};
	border-radius: 10px;
	transition: all 150ms;

	${(p): string => p.checked ? `
		background: ${'#ccc'};
	` : ''}
`;

const SwitchInput = styled.input`
	appearance: none;
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	margin: 0px;
	cursor: pointer;

	&:focus,
	&:active,
	&:visited,
	&:hover {
		outline: 0;
	}
`;

const SwitchButton = styled.div<{ checked: boolean }>`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: ${(p): string => p.theme.global.color};
	position: absolute;
	top: 2px;
	left: 2px;
	transition: all 150ms;

	${(p): string => p.checked ? `
		left: calc(100% - 2px);
		transform: translateX(-100%);
		background: ${p.theme.global.color};
	` : ''}
`;

const SwitchIcon = styled(Icon)<{ checked: boolean }>`
	position: absolute;
	font-size: 14px;
	top: 5px;
	right: 5px;

	${(p): string => p.checked ? `
		left: 5px;
		right: auto;
	` : ''}
`;

export {
    SwitchContainerAll,
    SwitchContainer,
    SwitchTrack,
    SwitchInput,
    SwitchButton,
    SwitchIcon
};