import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { MarkdownContainer } from 'src/components/markdownContainer';
import markdown from 'src/docs/pages/termsOfUse.md';
import { Container } from 'src/components/container';
import { useLocale } from 'src/localizations';
import { Row } from 'src/components/row';

/**
 * The TermsOfUse component. 
 */
const TermsOfUse = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Row>
                <h1>{locale.pages.termsOfUse.title}</h1>
                <MarkdownContainer>
                    <ReactMarkdown source={markdown} />
                </MarkdownContainer>
            </Row>
        </Container>
    );
};

export default TermsOfUse;