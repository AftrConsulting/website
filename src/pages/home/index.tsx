import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { useTranslation, Link } from 'src/i18n';
import { Header } from 'src/components/header';
import { Row } from 'src/components/row';

/**
 * The Home component.
 */
const Home = (): ReactElement => {
    const { t } = useTranslation([ 'common' ]);
	
    return (
        <>
            <Header />
            <Row>
                <NextSeo
                    title={t('title')}
                    description={t('description')}
                />
                <h1>{t('h1')}</h1>
                <Link href="/about">link</Link>
            </Row>
        </>
    );
};

Home.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common' ]
});

export default Home;