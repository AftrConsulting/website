import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import markdown from 'docs/pages/privacyPolicy/en.md';
import { MarkdownContainer } from 'src/components/markdownContainer';
import { Container } from 'src/components/container';
import { useLocale } from 'src/localizations';
import { Row } from 'src/components/row';
import { Seo } from 'src/components/seo';

export const config = { amp: 'hybrid' };

/**
 * The PrivacyPolicy component. 
 */
const PrivacyPolicy = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Row>
                <Seo {...locale.sitemap.privacyPolicy.seo} hasAmp={true} />
                <MarkdownContainer>
                    <ReactMarkdown source={markdown} />
                </MarkdownContainer>
            </Row>
        </Container>
    );
};

export default PrivacyPolicy;