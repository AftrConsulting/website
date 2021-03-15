import React, { ReactElement } from 'react';
import { NotFoundContainer } from 'src/componentsByPage/notFound';
import { Container } from 'src/components/container';
import { Row } from 'src/components/row';

/**
 * The NotFound component. 
 */
const NotFound = (): ReactElement => (
    <Container>
        <Row>
            <NotFoundContainer />
        </Row>
    </Container>
);

export default NotFound;