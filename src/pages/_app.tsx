import { parseCookies } from 'nookies';
import App, { AppContext } from 'next/app';
import { ThemeProvider } from 'styled-components';
import React, { ReactElement } from 'react';
import { Provider, useSelector } from 'react-redux';
import { LoadingBar } from 'src/components/loadingBar';
import { IState } from 'src/context/interfaces/IState';
import { configuration } from 'src/configuration';
import { MyTheme } from 'src/theme/types/MyTheme';
import { getGlobalStyles } from 'src/theme/global';
import { getThemeName } from 'src/theme';
import { getStore } from 'src/context';

interface IAppProps {
	Component: () => ReactElement;
	pageProps: {};
	themeName: MyTheme;
}

/**
 * The MyApp component.
 * @param {IAppProps} props - The props.
 */
const MyApp = (props: IAppProps): ReactElement => {	
    const store = getStore({
        theme: {
            name: props.themeName
        }
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
    const themeName = parseCookies(appContext.ctx)[configuration.cookies.theme];
	
    return { 
        ...appProps,
        themeName: getThemeName(themeName)
    };
};

/**
 * The MyApp component.
 * @param {IAppProps} props - The props.
 */
const MyAppWithTheme = (props: IAppProps): ReactElement => {
    const theme = useSelector((state: IState) => state.theme.theme);
	
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

export default MyApp;