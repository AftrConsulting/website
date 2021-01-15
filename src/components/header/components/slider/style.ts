import styled from 'styled-components';

const StyledSliderContainer = styled.div<{ rightDirection?: boolean, open: boolean }>`
    background: ${(p): string => p.theme.global.background};
    transition: transform .15s ease-out;
    will-change: transform;
    animation-fill-mode: forwards;
    backface-visibility: hidden;
	perspective: 1000;
	height: 100%;
	position: fixed;
	z-index: 11;
	overflow: hidden;
	top: 0;

	${(p): string => {
        let x = p.rightDirection ? '100%' : '-100%';
        if (p.open) {
            x = '0px';
        }

        return `
			transform: translate3d(${x}, 0, 0);
			${p.rightDirection ? 'right' : 'left'}: 0;
			border-${p.rightDirection ? 'left' : 'right'}: 1px solid ${p.theme.global.header.sideMenu.borderColor};
		`;
    }
}
`;

const StyledSliderOpacity = styled.div<{ open: boolean }>`
    transition: opacity .15s ease-out;
    will-change: opacity;
	transform: translateZ(0);
	height: 100%;
    position: fixed;
	top: 0;
	width: 100%;
	left: 0;
    background: ${(p): string => p.theme.global.header.sideMenu.background};
    z-index: 10;
	cursor: pointer;
	visibility: hidden;

	${(p): string => p.open ? `
		opacity: 1;
	` : `
		opacity: 0;
	`}

`;

export {
    StyledSliderContainer,
    StyledSliderOpacity
};