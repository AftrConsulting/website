import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { NextSeo } from 'next-seo';
import { MarkdownContainer } from 'src/components/markdownContainer';
import { Container } from 'src/components/container';
import markdown from 'src/docs/pages/termsOfUse.md';
import { Row } from 'src/components/row';

/**
 * The TermsOfUse component. 
 */
const TermsOfUse = (): ReactElement => (
    <Container>
        <Row>
            <NextSeo
                title={'Terms of use'}
            />
            <MarkdownContainer>
                <ReactMarkdown source={markdown} />
            </MarkdownContainer>
        </Row>
    </Container>
);

export default TermsOfUse;