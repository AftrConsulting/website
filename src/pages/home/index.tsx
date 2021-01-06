import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Row } from 'src/components/row';
import { useTranslation, Link } from 'src/i18n';
import { Icon } from 'src/components/icon';
import { DarkModeSwitch } from 'src/components/darkModeSwitch';

/**
 * The Home component.
 */
const Home = (): ReactElement => {
    const { t, i18n } = useTranslation([ 'common' ]);
	
    const toggleLanguage = (): void => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };
	
    return (
        <Row>
            <NextSeo
                title={t('title')}
                description={t('description')}
            />
            <DarkModeSwitch />
            <Icon icon={faMoon} />
            <Icon icon={faSun} />
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