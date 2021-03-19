import React, { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { StyledContainer } from './style';
import { Analytics } from 'src/components/container/components/analytics';
import { Chat } from 'src/components/container/components/chat';
import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';
import { isProduction } from 'src/utils';

interface IContainerProps {
	children: ReactElement | ReactElement[]
}

/**
 * The Container component.
 * @param {IContainerProps} props - The props. 
 */
const Container = (props: IContainerProps): ReactElement => {
    const router = useRouter();
	
    useEffect(() => {
        const handleRouteChange = (): void => {
            if (!window.ma) return;

            window.ma.track();
        };
		
        router.events.on('routeChangeComplete', handleRouteChange);
		  
        return (): void => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);
	
    const externals = getExternals();
	
    return (
        <>	
            {externals}
            <Header />
            <StyledContainer>
                {props.children}
            </StyledContainer>
            <Footer />
        </>
    );
};

/**
 * Returns the externals.
 */
const getExternals = (): ReactElement | null => {
    if (!isProduction()) return null;
	
    return (
        <> 
            <Analytics />
            <Chat />
        </>
    );
};

export {
    Container
};