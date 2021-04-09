import React, { ReactElement } from 'react';
import { SitemapRoutes } from 'src/componentsByPage/sitemap';
import { Container } from 'src/components/container';
import { useLocale } from 'src/localizations';
import { Title } from 'src/components/title';
import { Row } from 'src/components/row';
import { Seo } from 'src/components/seo';

export const config = { amp: 'hybrid' };

/**
 * The Sitemap component. 
 */
const Sitemap = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Row>
                <Seo {...locale.sitemap.sitemap} hasAmp={true} />
                <Title title={locale.pages.sitemap.title} />
                <SitemapRoutes />
            </Row>
        </Container>
    );
};

export default Sitemap;