import React, { ReactElement } from 'react';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { 
    StyledSection, StyledQuotesContainer, StyledDescription, StyledIcon, StyledName, StyledLink, 
    StyledImgContainer, StyledNameContainer, StyledCompany, StyledFooter
} from './style';
import { SubTitle } from 'src/components/landing/subTitle';
import { Title } from 'src/components/landing/title';
import { Row } from 'src/components/elements/row';
import { useLocale } from 'src/localizations';

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
                            <StyledFooter>
                                <StyledImgContainer>
                                    <img src={`/static/images/home/reviews/${x.img}`} alt={x.name} loading={'lazy'} />
                                </StyledImgContainer>
                                <StyledNameContainer>
                                    <StyledName>{x.name}</StyledName>
                                    <StyledCompany>
                                        {x.href ? (
                                            <StyledLink href={x.href} title={x.company}>
                                        		{x.company}
                                            </StyledLink>
                                        ) : x.company}
                                    </StyledCompany>
                                </StyledNameContainer>
                            </StyledFooter>
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