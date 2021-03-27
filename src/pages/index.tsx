import React, { ReactElement } from 'react';
import { SectionDescription } from 'src/componentsByPage/home/sectionDescription';
import { SectionExpertise } from 'src/componentsByPage/home/sectionExpertise';
import { SectionServices } from 'src/componentsByPage/home/sectionServices';
import { SectionQuotes } from 'src/componentsByPage/home/sectionQuotes';
import { SectionTalkExpert } from 'src/componentsByPage/home/sectionTalkExpert';
import { SectionFirst } from 'src/componentsByPage/home/sectionFirst';
import { Container } from 'src/components/container';
import { useLocale } from 'src/localizations';
import { Seo } from 'src/components/seo';

export const config = { amp: 'hybrid' };

/**
 * The Home component.
 */
const Home = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Seo {...locale.sitemap.home.seo} hasAmp={true} />
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