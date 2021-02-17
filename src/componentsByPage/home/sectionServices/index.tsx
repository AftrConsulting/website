import React, { ReactElement } from 'react';
import { StyleImgContainer } from './style';
import { FirstSectionSVG } from 'src/componentsImg/firstSectionSVG';
import { SideBySide } from 'src/componentsByPage/home/sideBySide';
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
            <SideBySide>
                <div>
                    <SubTitle>{t('home:section1SubTitle')}</SubTitle>
                    <Title>{t('home:section1Title')}</Title>
                    <Paragraph>{t('home:section1Description')}</Paragraph>
                </div>
                <StyleImgContainer>
                    <FirstSectionSVG />
                </StyleImgContainer>
            </SideBySide>
        </Section>
    );
};

export {
    SectionServices
};