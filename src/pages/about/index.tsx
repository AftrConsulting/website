import React, { ReactElement } from 'react';
import { Row } from 'src/components/row';

/**
 * The About component. 
 */
const About = (): ReactElement => (
    <Row>
        <h1>About</h1>
    </Row>
);

About.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common' ]
});

export default About;