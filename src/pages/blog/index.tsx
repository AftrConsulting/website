import React, { ReactElement } from 'react';
import { Row } from 'src/components/row';

/**
 * The Blog component. 
 */
const Blog = (): ReactElement => (
    <Row>
        <h1>Blog</h1>
    </Row>
);

Blog.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common' ]
});

export default Blog;