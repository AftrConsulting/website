import React, { ReactElement } from 'react';
import { Container } from 'src/components/global/container';
import { Title } from 'src/components/global/title';
import { Row } from 'src/components/elements/row';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

/**
 * The Blog component. 
 */
const Blog = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Row>
                <Seo {...locale.sitemap.blog} />
                <Title title={'Blog'} />
            </Row>
        </Container>
    );
};

export default Blog;