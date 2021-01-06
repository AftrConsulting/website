import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'src/context/actions/theme';
import { IState } from 'src/context/interfaces/IState';
import { Row } from 'src/components/row';
import { useTranslation, Link } from 'src/i18n';

/**
 * The Home component.
 */
const Home = (): ReactElement => {
    const { t, i18n } = useTranslation([ 'common' ]);
    const { themeName } = useSelector((state: IState) => state.theme);
    const dispatch = useDispatch();
	
    const toggleTheme = (): void => {
        const action = setTheme(themeName === 'light' ? 'dark' : 'light');
        dispatch(action);
    };
	
    const toggleLanguage = (): void => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };
	
    return (
        <Row>
            <NextSeo
                title={t('title')}
                description={t('description')}
            />
            <button onClick={toggleTheme}>toggle theme</button>
            <button onClick={toggleLanguage}>change language</button>
            <h1>{t('h1')}</h1>
            <Link href="/about">link</Link>
        </Row>
    );
};

Home.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common' ]
});

export default Home;