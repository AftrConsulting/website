import React, { ReactElement } from 'react';
import { Container } from 'src/components/container';
import { Row } from 'src/components/row';

/**
 * The Portfolio component. 
 */
const Portfolio = (): ReactElement => (
    <Container>
        <Row>
            <h1>Portfolio</h1>
        </Row>
    </Container>
);

Portfolio.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common' ]
});

export default Portfolio;