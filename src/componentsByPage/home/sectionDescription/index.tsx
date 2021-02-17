import React, { ReactElement } from 'react';
import { StyledSeparator, StyledIconContainer, StyledSection, StyledItalicText, StyledIconAllContainer } from './style';
import { DescriptionTypeScript } from 'src/componentsImg/descriptionTypeScript';
import { DescriptionNodeJS } from 'src/componentsImg/descriptionNodeJS';
import { DescriptionDocker } from 'src/componentsImg/descriptionDocker';
import { DescriptionReact } from 'src/componentsImg/descriptionReact';
import { SideBySide } from 'src/componentsByPage/home/sideBySide';
import { Paragraph } from 'src/componentsByPage/home/paragraph';
import { SubTitle } from 'src/componentsByPage/home/subTitle';
import { Title } from 'src/componentsByPage/home/title';
import { useTranslation } from 'src/i18n';

/**
 * The SectionDescription component.
 */
const SectionDescription = (): ReactElement => {
    const { t } = useTranslation([ 'home' ]);

    return (
        <StyledSection>
            <SideBySide>
                <div>
                    <SubTitle>{t('home:descriptionSubTitle')}</SubTitle>
                    <Title>{t('home:descriptionTitle')}</Title>
                    <StyledIconAllContainer>
                        {getIcon(<DescriptionTypeScript />, '60px')}
                        {getIcon(<DescriptionReact />)}
                        {getIcon(<DescriptionNodeJS />)}
                        {getIcon(<DescriptionDocker />)}
                    </StyledIconAllContainer>
                </div>
                <Paragraph>
                    <div>{t('home:descriptionText1')}</div>
                    <StyledSeparator />
                    <StyledItalicText>{t('home:descriptionText2')}</StyledItalicText>
                </Paragraph>
            </SideBySide>
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
    SectionDescription
};