import React, { ReactElement } from 'react';
import { StyledSeparator, StyledRow, StyledDescription, StyledH2, StyledSubTitle, StyledIconContainer, StyledSection } from './style';
import { DescriptionTypeScript } from 'src/componentsImg/descriptionTypeScript';
import { DescriptionNodeJS } from 'src/componentsImg/descriptionNodeJS';
import { DescriptionDocker } from 'src/componentsImg/descriptionDocker';
import { DescriptionReact } from 'src/componentsImg/descriptionReact';
import { useTranslation } from 'src/i18n';

/**
 * The DescriptionSection component.
 */
const DescriptionSection = (): ReactElement => {
    const { t } = useTranslation([ 'home' ]);

    return (
        <StyledSection>
            <StyledRow>
                <div>
                    <StyledSubTitle>{t('home:descriptionSubTitle')}</StyledSubTitle>
                    <StyledH2>{t('home:descriptionTitle')}</StyledH2>
                    {getIcon(<DescriptionTypeScript />, '60px')}
                    {getIcon(<DescriptionReact />)}
                    {getIcon(<DescriptionNodeJS />)}
                    {getIcon(<DescriptionDocker />)}
                </div>
                <StyledDescription>
                    <div>{t('home:descriptionText1')}</div>
                    <StyledSeparator />
                    <div>{t('home:descriptionText2')}</div>
                </StyledDescription>
            </StyledRow>
        </StyledSection>
    );
};

/**
 * Returns the icon.
 * @param {{}} icon - The icon. 
 * @param {string} size - The size. 
 */
const getIcon = (icon: {}, size = '40px'): ReactElement => (
    <StyledIconContainer size={size}>
        <div>{icon}</div>
    </StyledIconContainer>
);

export {
    DescriptionSection
};