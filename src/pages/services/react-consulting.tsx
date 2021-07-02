import React, { ReactElement } from 'react';
import { SectionFirst } from 'src/components/landing/sectionFirst';
import { Container } from 'src/components/global/container';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

/**
 * The ReactConsulting component. 
 */
const ReactConsulting = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Seo {...locale.sitemap.services.reactConsulting} />
            <SectionFirst 
                locale={locale.pages.services.reactConsulting.first}
                image={'5'} />
        </Container>
    );
};

export default ReactConsulting;