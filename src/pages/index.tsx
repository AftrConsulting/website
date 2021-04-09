import React, { ReactElement } from 'react';
import { SectionDescription } from 'src/componentsByPage/home/sectionDescription';
import { SectionTalkExpert } from 'src/componentsByPage/home/sectionTalkExpert';
import { SectionExpertise } from 'src/componentsByPage/home/sectionExpertise';
import { SectionServices } from 'src/componentsByPage/home/sectionServices';
import { SectionQuotes } from 'src/componentsByPage/home/sectionQuotes';
import { SectionFirst } from 'src/componentsByPage/home/sectionFirst';
import { Container } from 'src/components/container';
import { useLocale } from 'src/localizations';
import { Seo } from 'src/components/seo';

/**
 * The Home component.
 */
const Home = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Seo {...locale.sitemap.home} />
            <SectionFirst />
            <SectionDescription />
            <SectionServices />
            <SectionExpertise />
            <SectionQuotes />
            <SectionTalkExpert />
        </Container>
    );
};

export default Home;