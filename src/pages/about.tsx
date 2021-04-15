import React, { ReactElement } from 'react';
import { Container } from 'src/components/global/container';
import { Title } from 'src/components/global/title';
import { Row } from 'src/components/elements/row';

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