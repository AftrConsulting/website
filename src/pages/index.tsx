import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { SectionDescription } from 'src/componentsByPage/home/sectionDescription';
import { SectionExpertise } from 'src/componentsByPage/home/sectionExpertise';
import { SectionServices } from 'src/componentsByPage/home/sectionServices';
import { SectionQuotes } from 'src/componentsByPage/home/sectionQuotes';
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
            <SectionQuotes />
        </Container>
    );
};

export default Home;