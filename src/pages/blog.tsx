import React, { ReactElement } from 'react';
import { Container } from 'src/components/container';
import { Row } from 'src/components/row';

/**
 * The Blog component. 
 */
const Blog = (): ReactElement => (
    <Container>
        <Row>
            <h1>Blog</h1>
        </Row>
    </Container>
);

export default Blog;