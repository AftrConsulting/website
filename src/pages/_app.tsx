import App from 'next/app';
import React, { ReactElement } from 'react';
import { GlobalStyles } from 'src/theme/global';

class ReactApp extends App {

    /**
     * The render method.
     */
    public render (): ReactElement {
        const { Component, pageProps } = this.props;
		
        return (
            <>
                <GlobalStyles />
                <Component {...pageProps}/>
            </>
        );
    }

}

export default ReactApp;