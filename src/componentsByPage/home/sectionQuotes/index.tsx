import React, { ReactElement } from 'react';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { StyledSection, StyledQuotesContainer, StyledDescription, StyledIcon, StyledName } from './style';
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
                <StyledQuotesContainer>
                    {locale.pages.home.quotes.reviews.map((x, key) => (
                        <div key={key}>
                            <StyledIcon icon={faQuoteLeft} />
                            <StyledDescription>{x.description}</StyledDescription>
                            <div>
                                <StyledName>{x.name}</StyledName>
                                <span>
                                    {locale.pages.home.quotes.from}
                                    {x.company}
                                </span>
                            </div>
                        </div>
                    ))}
                </StyledQuotesContainer>
            </Row>
        </StyledSection>
    );
};

export {
    SectionQuotes
};