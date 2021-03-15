import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { MarkdownContainer } from 'src/components/markdownContainer';
import markdown from 'src/docs/pages/privacyPolicy.md';
import { Container } from 'src/components/container';
import { Row } from 'src/components/row';

/**
 * The PrivacyPolicy component. 
 */
const PrivacyPolicy = (): ReactElement => (
    <Container>
        <Row>
            <MarkdownContainer>
                <ReactMarkdown source={markdown} />
            </MarkdownContainer>
        </Row>
    </Container>
);

export default PrivacyPolicy;