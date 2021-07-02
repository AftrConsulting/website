import React, { ReactElement } from 'react';
import { SectionFirst } from 'src/components/landing/sectionFirst';
import { Container } from 'src/components/global/container';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

/**
 * The WebApplicationConsulting component. 
 */
const WebApplicationConsulting = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Seo {...locale.sitemap.services.webApplicationConsulting} />
            <SectionFirst 
                locale={locale.pages.services.webApplicationConsulting.first}
                image={'3'} />
        </Container>
    );
};

export default WebApplicationConsulting;