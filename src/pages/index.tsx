import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { useTranslation } from 'src/i18n';
import { SectionDescription } from 'src/componentsByPage/home/sectionDescription';
import { SectionServices } from 'src/componentsByPage/home/sectionServices';
import { SectionExpertise } from 'src/componentsByPage/home/sectionExpertise';
import { SectionFirst } from 'src/componentsByPage/home/sectionFirst';
import { Container } from 'src/components/container';

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
            <SectionFirst />
            <SectionDescription />
            <SectionServices />
            <SectionExpertise />
        </Container>
    );
};

export default Home;