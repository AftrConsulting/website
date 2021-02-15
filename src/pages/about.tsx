import React, { ReactElement } from 'react';
import { Container } from 'src/components/container';
import { Row } from 'src/components/row';

/**
 * The About component. 
 */
const About = (): ReactElement => (
    <Container>
        <Row>
            <h1>About</h1>
        </Row>
);

About.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common' ]
});

export default About;