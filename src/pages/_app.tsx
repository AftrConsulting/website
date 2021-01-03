import App from 'next/app';
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'src/theme/global';
import { getTheme, getDefaultThemeName } from 'src/theme';

class ReactApp extends App {

    /**
     * The render method.
     */
    public render (): ReactElement {
        const { Component, pageProps } = this.props;
        const theme = getTheme(getDefaultThemeName());

        return (
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Component {...pageProps}/>
            </ThemeProvider>
        );
    }

}

export default ReactApp;