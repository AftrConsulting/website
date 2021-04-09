import React, { ReactElement } from 'react';
import { Container } from 'src/components/container';
import { Title } from 'src/components/title';
import { Row } from 'src/components/row';

/**
 * The About component. 
 */
const About = (): ReactElement => (
    <Container>
        <Row>
            <Title title={'About'} />
        </Row>
    </Container>
);

export default About;