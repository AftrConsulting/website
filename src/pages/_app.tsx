import { ThemeProvider } from 'styled-components';
import React, { ReactElement } from 'react';
import { Provider, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { IStoreInitialThemeState } from 'src/context/interfaces/theme/IStoreInitialThemeState';
import { getTheme } from 'src/theme/utils';
import { SideMenu } from 'src/components/header/components/sideMenu';
import { LoadingBar } from 'src/components/loadingBar';
import { IState } from 'src/context/interfaces/IState';
import { getGlobalStyles } from 'src/theme/global';
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
    const router = useRouter();
    const store = getStore({
        language: router.locale,
        theme: {
            primaryColor: '#d64541',
            theme: getTheme('#d64541', 'light'),
            themeName: 'light'
        }
    });

    return (
        <Provider store={store}>
            <MyAppWithTheme {...props} />
        </Provider>
    );
};

// /**
//  * Returns the initial props.
//  * @param {DocumentContext} appContext - The app context.
//  */
// MyApp.getInitialProps = async (appContext: AppContext): Promise<{}> => {
//     const appProps = await App.getInitialProps(appContext);
//     const cookies = parseCookies(appContext.ctx);
	
//     const themeName = getThemeName(cookies[configuration.cookies.theme]);
//     const primaryColor = getPrimaryColor(cookies[configuration.cookies.primaryColor]);

//     return { 
//         ...appProps,
//         theme: {
//             primaryColor,
//             theme: getTheme(primaryColor, themeName),
//             themeName
//         }
//     };
// };

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
            <SideMenu />
            <props.Component {...props.pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;