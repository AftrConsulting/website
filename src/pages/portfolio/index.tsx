import React, { ReactElement } from 'react';
import { Row } from 'src/components/row';

/**
 * The Portfolio component. 
 */
const Portfolio = (): ReactElement => (
    <Row>
        <h1>Portfolio</h1>
    </Row>
);

Portfolio.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common' ]
});

export default Portfolio;