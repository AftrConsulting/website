import React, { ReactElement } from 'react';
import { Container } from 'src/components/container';
import { Title } from 'src/components/title';
import { Row } from 'src/components/row';

/**
 * The Portfolio component. 
 */
const Portfolio = (): ReactElement => (
    <Container>
        <Row>
            <Title title={'Portfolio'} />
        </Row>
    </Container>
);

export default Portfolio;