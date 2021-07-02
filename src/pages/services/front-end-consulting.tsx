import React, { ReactElement } from 'react';
import { SectionFirst } from 'src/components/landing/sectionFirst';
import { Container } from 'src/components/global/container';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

/**
 * The FrontEndConsulting component. 
 */
const FrontEndConsulting = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Seo {...locale.sitemap.services.frontEndConsulting} />
            <SectionFirst 
                locale={locale.pages.services.frontEndConsulting.first}
                image={'2'} />
        </Container>
    );
};

export default FrontEndConsulting;