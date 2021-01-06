import styled from 'styled-components';

const SwitchContainerAll = styled.div`
	display: inline-block;
`;

const SwitchContainer = styled.div`
	position: relative;
	display: flex;
`;

const SwitchTrack = styled.div<{ checked: boolean }>`
	width: 34px;
	height: 14px;
	margin: 3px;
	background: ${'#ccc'};
	border-radius: 7px;
	transition: all 150ms;

	${(p): string => p.checked ? `
		background: ${'red'};
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
	background: ${'black'};
	position: absolute;
	top: 0px;
	left: 0px;
	transition: all 150ms;

	${(p): string => p.checked ? `
		left: 100%;
		transform: translateX(-100%);
		background: ${'yellow'};
	` : ''}
`;

export {
    SwitchContainerAll,
    SwitchContainer,
    SwitchTrack,
    SwitchInput,
    SwitchButton
};