import Link from 'next/link';
import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'src/context/actions/theme';
import { IState } from 'src/context/interfaces/IState';
import { Row } from 'src/components/row';
import { useTranslation } from 'src/i18n';

/**
 * The Home component.
 */
const Home = (): ReactElement => {
    const { t } = useTranslation([ 'common' ]);
    const { themeName } = useSelector((state: IState) => state.theme);
    const dispatch = useDispatch();
	
    const toggleTheme = (): void => {
        const action = setTheme(themeName === 'light' ? 'dark' : 'light');
        dispatch(action);
    };
	
    return (
        <Row>
            <NextSeo
                title={t('title')}
                description={t('description')}
            />
            <button onClick={toggleTheme}>send</button>
            <h1>{t('h1')}</h1>
            <Link href="/about">link</Link>
        </Row>
    );
};

Home.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common' ]
});

export default Home;