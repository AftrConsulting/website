import React, { ReactElement } from 'react';
import { SectionFirst } from 'src/components/landing/sectionFirst';
import { Container } from 'src/components/global/container';
import { Row } from 'src/components/elements/row';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

/**
 * The WebApplicationDevelopment component. 
 */
const WebApplicationDevelopment = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Row>
                <Seo {...locale.sitemap.services.webApplicationDevelopment} />
                <SectionFirst 
                    heading={locale.pages.services.webApplicationDevelopment.title}
                    image={'4'} />
            </Row>
        </Container>
    );
};

export default WebApplicationDevelopment;