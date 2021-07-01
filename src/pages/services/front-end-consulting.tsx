import React, { ReactElement } from 'react';
import { SectionFirst } from 'src/components/landing/sectionFirst';
import { Container } from 'src/components/global/container';
import { Row } from 'src/components/elements/row';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

/**
 * The FrontEndConsulting component. 
 */
const FrontEndConsulting = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Row>
                <Seo {...locale.sitemap.services.frontEndConsulting} />
                <SectionFirst 
                    heading={locale.pages.services.frontEndConsulting.title} />
            </Row>
        </Container>
    );
};

export default FrontEndConsulting;