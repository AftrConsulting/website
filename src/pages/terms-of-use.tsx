import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { MarkdownContainer } from 'src/components/markdownContainer';
import { Container } from 'src/components/container';
import markdown from 'src/docs/pages/termsOfUse.md';
import { Row } from 'src/components/row';

// export const config = { 
//     amp: 'hybrid' 
// };

/**
 * The TermsOfUse component. 
 */
const TermsOfUse = (): ReactElement => (
    <Container>
        <Row>
            <MarkdownContainer>
                <ReactMarkdown source={markdown} />
            </MarkdownContainer>
        </Row>
    </Container>
);

export default TermsOfUse;