import React, { ReactElement } from 'react';
import { StyleImgContainer, StyledSideBySide } from './style';
import { ISectionStep } from 'src/componentsByPage/home/sectionServices/interfaces/ISectionStep';
import { Paragraph } from 'src/componentsByPage/home/paragraph';
import { SubTitle } from 'src/componentsByPage/home/subTitle';
import { Title } from 'src/componentsByPage/home/title';
import { SVGImage } from 'src/components/svgImage';
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
            {getSection(step1, <SVGImage viewBox={'0 0 776 510'} href={'/static/images/home/consultations.svg#main'} />)}
            {getSection(step2, <SVGImage viewBox={'0 0 776 510'} href={'/static/images/home/development.svg#main'} />)}
            {getSection(step3, <SVGImage viewBox={'0 0 776 510'} href={'/static/images/home/optimizations.svg#main'} />)}
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
            <Title marginBottom={'20px'}>{step.title}</Title>
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