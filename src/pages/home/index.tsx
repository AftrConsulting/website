import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { useTranslation, Link } from 'src/i18n';
import { DarkModeSwitch } from 'src/components/darkModeSwitch';
import { Header } from 'src/components/header';

/**
 * The Home component.
 */
const Home = (): ReactElement => {
    const { t, i18n } = useTranslation([ 'common' ]);
	
    const toggleLanguage = (): void => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };
	
    return (
        <>
            <Header />
            <NextSeo
                title={t('title')}
                description={t('description')}
            />
            <DarkModeSwitch />
            <button onClick={toggleLanguage}>change language</button>
            <h1>{t('h1')}</h1>
            <Link href="/about">link</Link>
        </>
    );
};

Home.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common' ]
});

export default Home;