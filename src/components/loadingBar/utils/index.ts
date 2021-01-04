/**
 * Changes the width loading bar.
 * @param {HTMLDivElement} loadingBar - The loading bar.
 * @param {string} width - The width property.
 * @param {string} speed - The speed property.
 */
const changeWidthLoadingBar = (loadingBar: HTMLDivElement, width: string, speed: string): void => {
    if (!loadingBar) return;
	
    loadingBar.style.transition = `width ${speed} ease`;
    loadingBar.style.width = width;
	
    loadingBar.removeEventListener('transitionend', onLoadingBarTransitionEnd);
    loadingBar.addEventListener('transitionend', onLoadingBarTransitionEnd);
};

/**
 * Changes the width loading bar.
 * @param {HTMLDivElement} loadingBar - The loading bar.
 */
const resetLoadingBar = (loadingBar: HTMLDivElement): void => {
    if (!loadingBar) return;
	
    Object.assign(loadingBar.style, {
        'display': 'block',
        'transition': '',
        'width': '0%'
    });

    loadingBar.offsetHeight;
};

/**
 * The transition end loading bar handler.
 * @param {Event} event - The event.
 */
const onLoadingBarTransitionEnd = (event: Event): void => {
    const element = event.target as HTMLElement;
    if (element.style.width !== '100%') return;

    element.style.display = 'none';
};

export {
    changeWidthLoadingBar,
    resetLoadingBar
};