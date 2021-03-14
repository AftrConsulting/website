import React, { ReactElement } from 'react';
import { SitemapRoutes } from 'src/componentsByPage/sitemap';
import { Container } from 'src/components/container';
import { useLocale } from 'src/localizations';
import { Row } from 'src/components/row';

/**
 * The Sitemap component. 
 */
const Sitemap = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Row>
                <h1>{locale.pages.sitemap.title}</h1>
                <SitemapRoutes />
            </Row>
        </Container>
    );
};

export default Sitemap;