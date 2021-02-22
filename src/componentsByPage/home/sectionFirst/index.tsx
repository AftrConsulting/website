import React, { ReactElement } from 'react';
import { StyledButton, StyledH1, StyledH1Span, StyledRow, StyleImgContainer, StyledSection } from './style';
import { FirstSectionSVG } from 'src/componentsImg/firstSectionSVG';
import { useLocale } from 'src/localizations';

/**
 * The SectionFirst component.
 */
const SectionFirst = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <StyledRow>
                <div>
                    <StyledH1>
                        {locale.pages.home.first.text1}
                        <StyledH1Span>{locale.pages.home.first.text2}</StyledH1Span>
                    </StyledH1>
                    <StyledButton withIcon={true} />
                </div>
                <StyleImgContainer>
                    <FirstSectionSVG />
                </StyleImgContainer>
            </StyledRow>
        </StyledSection>
    );
};

export {
    SectionFirst
};