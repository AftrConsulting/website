import React, { ReactElement } from 'react';
import { Container } from 'src/components/global/container';
import { Title } from 'src/components/global/title';
import { Row } from 'src/components/elements/row';

/**
 * The Blog component. 
 */
const Blog = (): ReactElement => (
    <Container>
        <Row>
            <Title title={'Blog'} />
        </Row>
    </Container>
);

export default Blog;