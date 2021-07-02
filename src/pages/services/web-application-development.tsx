import React, { ReactElement } from 'react';
import { SectionFirst } from 'src/components/landing/sectionFirst';
import { Container } from 'src/components/global/container';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

/**
 * The WebApplicationDevelopment component. 
 */
const WebApplicationDevelopment = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Seo {...locale.sitemap.services.webApplicationDevelopment} />
            <SectionFirst 
                locale={locale.pages.services.webApplicationDevelopment.first}
                image={'4'} />
        </Container>
    );
};

export default WebApplicationDevelopment;