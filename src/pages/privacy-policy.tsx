import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { NextSeo } from 'next-seo';
import { MarkdownContainer } from 'src/components/markdownContainer';
import markdown from 'src/docs/pages/privacyPolicy.md';
import { Container } from 'src/components/container';
import { Row } from 'src/components/row';

export const config = { amp: 'hybrid' };

/**
 * The PrivacyPolicy component. 
 */
const PrivacyPolicy = (): ReactElement => (
    <Container>
        <Row>
            <NextSeo
                title={'Privacy Policy'}
            />
            <MarkdownContainer>
                <ReactMarkdown source={markdown} />
            </MarkdownContainer>
        </Row>
    </Container>
);

export default PrivacyPolicy;