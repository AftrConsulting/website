import React, { ReactElement } from 'react';
import { StyleImgContainer, StyledSideBySide } from './style';
import { ISectionStep } from 'src/componentsByPage/home/sectionServices/interfaces/ISectionStep';
import { FirstSectionSVG } from 'src/componentsImg/firstSectionSVG';
import { Paragraph } from 'src/componentsByPage/home/paragraph';
import { SubTitle } from 'src/componentsByPage/home/subTitle';
import { Title } from 'src/componentsByPage/home/title';
import { Section } from 'src/components/section';
import { useLocale } from 'src/localizations';

/**
 * The SectionServices component.
 */
const SectionServices = (): ReactElement => {
    const locale = useLocale();
    const { step1, step2, step3 } = locale.pages.home.services;

    return (
        <Section>
            {getSection(step1, <FirstSectionSVG/>)}
            {getSection(step2, <FirstSectionSVG/>)}
            {getSection(step3, <FirstSectionSVG/>)}
        </Section>
    );
};

/**
 * Returns the section.
 * @param {ISectionStep} step - The step. 
 * @param {ReactElement} element - The element. 
 */
const getSection = (step: ISectionStep, element: ReactElement): ReactElement => (
    <StyledSideBySide>
        <div>
            <SubTitle>{step.subTitle}</SubTitle>
            <Title>{step.title}</Title>
            <Paragraph>{step.description}</Paragraph>
        </div>
        <StyleImgContainer>
            {element}
        </StyleImgContainer>
    </StyledSideBySide>
);

export {
    SectionServices
};