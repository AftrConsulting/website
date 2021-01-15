import { parseCookies } from 'nookies';
import App, { AppContext } from 'next/app';
import { ThemeProvider } from 'styled-components';
import React, { ReactElement } from 'react';
import { Provider, useSelector } from 'react-redux';
import { IStoreInitialThemeState } from 'src/context/interfaces/theme/IStoreInitialThemeState';
import { LoadingBar } from 'src/components/loadingBar';
import { IState } from 'src/context/interfaces/IState';
import { configuration } from 'src/configuration';
import { getGlobalStyles } from 'src/theme/global';
import { getThemeName, getTheme } from 'src/theme';
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
    let themeName = parseCookies(appContext.ctx)[configuration.cookies.theme];
    themeName = getThemeName(themeName);

    return { 
        ...appProps,
        theme: {
            theme: getTheme(themeName),
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
            <props.Component {...props.pageProps} />
        </ThemeProvider>
    );
};

export default appWithTranslation(MyApp);