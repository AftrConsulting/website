import React, { ReactElement } from 'react';
import { StyledSection, StyledExpertiseContainer, StyledTitle, StyledParagraph, StyledSeparator, StyledPS } from './style';
import { SectionBookConsultation } from 'src/componentsByPage/home/sectionBookConsultation';
import { SubTitle } from 'src/componentsByPage/home/subTitle';
import { Title } from 'src/componentsByPage/home/title';
import { useLocale } from 'src/localizations';
import { Row } from 'src/components/row';

/**
 * The SectionExpertise component.
 */
const SectionExpertise = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <Row>
                <SubTitle>{locale.pages.home.expertises.subTitle}</SubTitle>
                <Title>{locale.pages.home.expertises.title}</Title>
                <StyledExpertiseContainer>
                    {locale.pages.home.expertises.list.map((x, key) => (
                        <div key={key}>
                            <StyledTitle>{x.title}</StyledTitle>
                            <StyledParagraph>{x.description}</StyledParagraph>
                        </div>
                    ))}
                </StyledExpertiseContainer>
                <StyledSeparator/>
                <StyledPS>{locale.pages.home.expertises.ps}</StyledPS>
                <SectionBookConsultation />
            </Row>
        </StyledSection>
    );
};

export {
    SectionExpertise
};