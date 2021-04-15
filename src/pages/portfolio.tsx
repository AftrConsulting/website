import React, { ReactElement } from 'react';
import { Container } from 'src/components/global/container';
import { Title } from 'src/components/elements/title';
import { Row } from 'src/components/elements/row';

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