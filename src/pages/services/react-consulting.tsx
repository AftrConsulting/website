import React, { ReactElement } from 'react';
import { Container } from 'src/components/global/container';
import { Title } from 'src/components/global/title';
import { Row } from 'src/components/elements/row';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

/**
 * The ReactConsulting component. 
 */
const ReactConsulting = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Row>
                <Seo {...locale.sitemap.services.reactConsulting} />
                <Title title={locale.pages.services.reactConsulting.title} />
                <div>{locale.global.underConstruction}</div>
            </Row>
        </Container>
    );
};

export default ReactConsulting;