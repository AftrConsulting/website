import React, { ReactElement } from 'react';
import { StyledButton, StyledH1, StyledH1Span, StyledRow, StyleImgContainer } from './style';
import { FirstSectionSVG } from 'src/componentsImg/firstSectionSVG';
import { Section } from 'src/componentsByPage/home/section';
import { useTranslation } from 'src/i18n';

/**
 * The SectionFirst component.
 */
const SectionFirst = (): ReactElement => {
    const { t } = useTranslation([ 'home' ]);

    return (
        <Section>
            <StyledRow>
                <div>
                    <StyledH1>
                        {t('home:h1')}
                        <StyledH1Span>{t('home:subH1')}</StyledH1Span>
                    </StyledH1>
                    <StyledButton withIcon={true} />
                </div>
                <StyleImgContainer>
                    <FirstSectionSVG />
                </StyleImgContainer>
            </StyledRow>
        </Section>
    );
};

export {
    SectionFirst
};