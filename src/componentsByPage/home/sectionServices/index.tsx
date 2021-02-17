import React, { ReactElement } from 'react';
import { StyleImgContainer, StyledSideBySide, StyledSeparator } from './style';
import { FirstSectionSVG } from 'src/componentsImg/firstSectionSVG';
import { Paragraph } from 'src/componentsByPage/home/paragraph';
import { SubTitle } from 'src/componentsByPage/home/subTitle';
import { Section } from 'src/componentsByPage/home/section';
import { Title } from 'src/componentsByPage/home/title';
import { useLocale } from 'src/localizations';

/**
 * The SectionServices component.
 */
const SectionServices = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Section>
            <StyledSideBySide>
                <div>
                    <SubTitle>{locale.pages.home.services.step1.subTitle}</SubTitle>
                    <Title>{locale.pages.home.services.step1.title}</Title>
                    <Paragraph>{locale.pages.home.services.step1.description}</Paragraph>
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
                    <SubTitle>{locale.pages.home.services.step2.subTitle}</SubTitle>
                    <Title>{locale.pages.home.services.step2.title}</Title>
                    <Paragraph>{locale.pages.home.services.step2.description}</Paragraph>
                </div>
            </StyledSideBySide>
            <StyledSeparator />
            <StyledSideBySide>
                <div>
                    <SubTitle>{locale.pages.home.services.step3.subTitle}</SubTitle>
                    <Title>{locale.pages.home.services.step3.title}</Title>
                    <Paragraph>{locale.pages.home.services.step3.description}</Paragraph>
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