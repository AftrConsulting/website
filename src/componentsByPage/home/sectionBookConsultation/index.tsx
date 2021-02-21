import React, { ReactElement } from 'react';
import { StyledContainer, StyledCTA, StyledTitle, StyledParagraph } from './style';
import { useLocale } from 'src/localizations';

/**
 * The SectionBookConsultation component.
 */
const SectionBookConsultation = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledContainer>
            <div>
                <StyledTitle>{locale.pages.home.expertises.bookConsultation.title}</StyledTitle>
                <StyledParagraph>{locale.pages.home.expertises.bookConsultation.description}</StyledParagraph>
            </div>
            <div>
                <StyledCTA withIcon={true} />
            </div>
        </StyledContainer>
    );
};

export {
    SectionBookConsultation
};