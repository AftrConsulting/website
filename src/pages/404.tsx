import React, { ReactElement } from 'react';
import { Row } from 'src/components/row';

/**
 * The NotFound component. 
 */
const NotFound = (): ReactElement => (
    <Row>
        <h1>404... Not Found</h1>
    </Row>
);

NotFound.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common' ]
});

export default NotFound;