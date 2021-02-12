import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { DescriptionSection } from 'src/componentsByPage/home/descriptionSection';
import { FirstSection } from 'src/componentsByPage/home/firstSection';
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
            <DescriptionSection />
        </Container>
    );
};

Home.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common', 'home' ]
});

export default Home;