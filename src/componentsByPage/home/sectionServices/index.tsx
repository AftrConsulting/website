import React, { ReactElement } from 'react';
import { StyleImgContainer, StyledSideBySide, StyledSeparator } from './style';
import { FirstSectionSVG } from 'src/componentsImg/firstSectionSVG';
import { Paragraph } from 'src/componentsByPage/home/paragraph';
import { SubTitle } from 'src/componentsByPage/home/subTitle';
import { Section } from 'src/componentsByPage/home/section';
import { Title } from 'src/componentsByPage/home/title';
import { useTranslation } from 'src/i18n';
/**
 * The SectionServices component.
 */
const SectionServices = (): ReactElement => {
    const { t } = useTranslation([ 'home' ]);
	
    return (
        <Section>
            <StyledSideBySide>
                <div>
                    <SubTitle>{t('home:section1SubTitle')}</SubTitle>
                    <Title>{t('home:section1Title')}</Title>
                    <Paragraph>{t('home:section1Description')}</Paragraph>
                </div>
                <StyleImgContainer>
                    <FirstSectionSVG />
                </StyleImgContainer>
            </StyledSideBySide>
            <StyledSeparator />
            <StyledSideBySide>
                <StyleImgContainer>
                    <FirstSectionSVG />
                </StyleImgContainer>
                <div>
                    <SubTitle>{t('home:section2SubTitle')}</SubTitle>
                    <Title>{t('home:section2Title')}</Title>
                    <Paragraph>{t('home:section2Description')}</Paragraph>
                </div>
            </StyledSideBySide>
            <StyledSeparator />
            <StyledSideBySide>
                <div>
                    <SubTitle>{t('home:section3SubTitle')}</SubTitle>
                    <Title>{t('home:section3Title')}</Title>
                    <Paragraph>{t('home:section3Description')}</Paragraph>
                </div>
                <StyleImgContainer>
                    <FirstSectionSVG />
                </StyleImgContainer>
            </StyledSideBySide>
        </Section>
    );
};

export {
    SectionServices
};