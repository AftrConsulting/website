import { parseCookies } from 'nookies';
import App, { AppContext } from 'next/app';
import { ThemeProvider } from 'styled-components';
import React, { ReactElement } from 'react';
import { Provider, useSelector } from 'react-redux';
import { IStoreInitialThemeState } from 'src/context/interfaces/theme/IStoreInitialThemeState';
import { getThemeName, getTheme, getPrimaryColor } from 'src/theme/utils';
import { LoadingBar } from 'src/components/loadingBar';
import { IState } from 'src/context/interfaces/IState';
import { Container } from 'src/components/container';
import { getGlobalStyles } from 'src/theme/global';
import { configuration } from 'src/configuration';
import { appWithTranslation } from 'src/i18n';
import { getStore } from 'src/context';

interface IAppProps {
	pageProps: {};
	Component: () => ReactElement;
	theme: IStoreInitialThemeState;
}

/**
 * The MyApp component.
 * @param {IAppProps} props - The app props.
 */
const MyApp = (props: IAppProps): ReactElement => {
    const store = getStore({
        theme: props.theme
    });

    return (
        <Provider store={store}>
            <MyAppWithTheme {...props} />
        </Provider>
    );
};

/**
 * Returns the initial props.
 * @param {DocumentContext} appContext - The app context.
 */
MyApp.getInitialProps = async (appContext: AppContext): Promise<{}> => {
    const appProps = await App.getInitialProps(appContext);
    const cookies = parseCookies(appContext.ctx);
	
    const themeName = getThemeName(cookies[configuration.cookies.theme]);
    const primaryColor = getPrimaryColor(cookies[configuration.cookies.primaryColor]);

    return { 
        ...appProps,
        theme: {
            primaryColor,
            theme: getTheme(primaryColor, themeName),
            themeName
        }
    };
};

/**
 * The MyAppWithTheme component.
 * @param {IAppProps} props - The props.
 */
const MyAppWithTheme = (props: IAppProps): ReactElement => {
    const { theme } = useSelector((state: IState) => state.theme);

    return (
        <ThemeProvider theme={theme}>
            <style>
                {getGlobalStyles(theme)}
            </style>
            <LoadingBar />
            <Container>
                <props.Component {...props.pageProps} />
            </Container>
        </ThemeProvider>
    );
};

export default appWithTranslation(MyApp);