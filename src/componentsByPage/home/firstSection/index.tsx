import React, { ReactElement } from 'react';
import { StyledContainer, StyledButton, StyledH1, StyledH1Span, StyledRow, StyleImgContainer } from './style';
import { FirstSectionSVG } from 'src/svgImages/firstSectionSVG';
import { useTranslation } from 'src/i18n';

/**
 * The FirstSection component.
 */
const FirstSection = (): ReactElement => {
    const { t } = useTranslation([ 'home' ]);

    return (
        <StyledContainer>
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
        </StyledContainer>
    );
};

export {
    FirstSection
};