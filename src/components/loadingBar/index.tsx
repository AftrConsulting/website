import React, { ReactElement, useEffect, useRef } from 'react';
import { Router } from 'next/dist/client/router';
import { StyledLoadingBar } from './style';
import { changeWidthLoadingBar, resetLoadingBar } from 'src/components/loadingBar/utils';

/**
 * The LoadingBar Component.
 */
const LoadingBar = (): ReactElement => {
    const ref = useRef(null);
	
    const handleStart = (): void => {
        resetLoadingBar(ref.current as unknown as HTMLDivElement);
        changeWidthLoadingBar(ref.current as unknown as HTMLDivElement, '50%', '2s');
    };
	
    const handleComplete = (): void => {
        changeWidthLoadingBar(ref.current as unknown as HTMLDivElement, '100%', '.5s');	
    };
	
    useEffect(() => {
        Router.events.on('routeChangeStart', handleStart);
        Router.events.on('routeChangeComplete', handleComplete);
		
        return (): void => {
            Router.events.off('routeChangeStart', handleStart);
            Router.events.off('routeChangeComplete', handleComplete);
        };
    }, []);
	
    return <StyledLoadingBar ref={ref} />;
};

export {
    LoadingBar
};