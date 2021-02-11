import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { FirstSection } from 'src/pages/home/components/firstSection';
import { Container } from 'src/components/container';
import { useTranslation } from 'src/i18n';

/**
 * The Home component.
 */
const Home = (): ReactElement => {
    const { t } = useTranslation([ 'common', 'home' ]);
	
    return (
        <Container>
            <NextSeo
                title={t('title')}
                description={t('description')}
            />
            <FirstSection />
        </Container>
    );
};

Home.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common', 'home' ]
});

export default Home;