import React, { ReactElement } from 'react';
import { StyledSection } from './style';
import { SubTitle } from 'src/componentsByPage/home/subTitle';
import { Title } from 'src/componentsByPage/home/title';
import { useLocale } from 'src/localizations';
import { Row } from 'src/components/row';

/**
 * The SectionQuotes component.
 */
const SectionQuotes = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <Row>
                <SubTitle>{locale.pages.home.quotes.subTitle}</SubTitle>
                <Title>{locale.pages.home.quotes.title}</Title>
            </Row>
        </StyledSection>
    );
};

export {
    SectionQuotes
};