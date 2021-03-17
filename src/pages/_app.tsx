import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { SideMenu } from 'src/components/header/components/sideMenu';
import { LoadingBar } from 'src/components/loadingBar';
import { globalStyles } from 'src/theme/global';
import { getStore } from 'src/context';

interface IAppProps {
	pageProps: {};
	Component: () => ReactElement;
}

/**
 * The MyApp component.
 * @param {IAppProps} props - The app props.
 */
const MyApp = (props: IAppProps): ReactElement => {
    const router = useRouter();
    const store = getStore({
        language: router.locale
    });

    return (
        <Provider store={store}>
            <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
            <LoadingBar />
            <SideMenu />
            <props.Component {...props.pageProps} />
        </Provider>
    );
};

export default MyApp;