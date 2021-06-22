import React, { ReactElement } from 'react';
import { Container } from 'src/components/global/container';
import { Title } from 'src/components/global/title';
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
                <Title title={locale.sitemap.services.frontEndConsulting.title} />
                <div>{locale.global.underConstruction}</div>
            </Row>
        </Container>
    );
};

export default FrontEndConsulting;