import Cookie from 'js-cookie';
import { parseCookies } from 'nookies';
import App, { AppContext } from 'next/app';
import { ThemeProvider } from 'styled-components';
import React, { ReactElement, useState } from 'react';
import { LoadingBar } from 'src/components/loadingBar';
import { getTheme, getThemeName } from 'src/theme';
import { configuration } from 'src/configuration';
import { MyTheme } from 'src/theme/types/MyTheme';
import { GlobalStyles } from 'src/theme/global';

interface IAppProps {
	Component: () => ReactElement;
	pageProps: {};
	theme: MyTheme;
}

/**
 * The MyApp component.
 * @param {IAppProps} props - The props.
 */
const MyApp = (props: IAppProps): ReactElement => {
    const [ theme, setTheme ] = useState(props.theme);
	
    const toggleTheme = (): void => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        Cookie.set(configuration.cookies.theme, newTheme);
        setTheme(newTheme);
    };
	
    return (
        <ThemeProvider theme={getTheme(theme)}>
            <GlobalStyles />
            <LoadingBar />
            <button onClick={toggleTheme}>send</button>
            <props.Component {...props.pageProps} />
        </ThemeProvider>
    );
};

/**
 * Returns the initial props.
 * @param {DocumentContext} appContext - The app context. 
 */
MyApp.getInitialProps = async (appContext: AppContext): Promise<{}> => {
    const appProps = await App.getInitialProps(appContext);
    const themeName = parseCookies(appContext.ctx)[configuration.cookies.theme];
    const theme = getThemeName(themeName);
	
    return { 
        ...appProps,
        theme
    };
};

export default MyApp;