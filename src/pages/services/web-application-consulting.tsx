import React, { ReactElement } from 'react';
import { SectionFirst } from 'src/components/landing/sectionFirst';
import { Container } from 'src/components/global/container';
import { Row } from 'src/components/elements/row';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

/**
 * The WebApplicationConsulting component. 
 */
const WebApplicationConsulting = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Row>
                <Seo {...locale.sitemap.services.webApplicationConsulting} />
                <SectionFirst 
                    heading={locale.pages.services.webApplicationConsulting.title} />
            </Row>
        </Container>
    );
};

export default WebApplicationConsulting;