import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { SectionBookConsultation } from 'src/componentsByPage/home/sectionBookConsultation';
import { SectionDescription } from 'src/componentsByPage/home/sectionDescription';
import { SectionServices } from 'src/componentsByPage/home/sectionServices';
import { SectionExpertise } from 'src/componentsByPage/home/sectionExpertise';
import { SectionFirst } from 'src/componentsByPage/home/sectionFirst';
import { Container } from 'src/components/container';
import { useLocale } from 'src/localizations';
/**
 * The Home component.
 */
const Home = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <NextSeo
                title={locale.global.seo.title}
                description={locale.global.seo.description}
            />
            <SectionFirst />
            <SectionDescription />
            <SectionServices />
            <SectionExpertise />
            <SectionBookConsultation />
        </Container>
    );
};

export default Home;