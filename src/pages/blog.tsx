import React, { ReactElement } from 'react';
import { Container } from 'src/components/container';
import { Title } from 'src/components/title';
import { Row } from 'src/components/row';

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