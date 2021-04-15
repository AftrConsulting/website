import React, { ReactElement } from 'react';
import { StyledSeparator, StyledIconContainer, StyledSection, StyledItalicText, StyledIconAllContainer } from './style';
import { DescriptionTypeScript } from 'src/componentsByPage/home/images/descriptionTypeScript';
import { DescriptionNodeJS } from 'src/componentsByPage/home/images/descriptionNodeJS';
import { DescriptionDocker } from 'src/componentsByPage/home/images/descriptionDocker';
import { DescriptionReact } from 'src/componentsByPage/home/images/descriptionReact';
import { SideBySide } from 'src/components/landing/sideBySide';
import { Paragraph } from 'src/components/elements/paragraph';
import { SpanText } from 'src/components/elements/spanText';
import { SubTitle } from 'src/components/landing/subTitle';
import { Title } from 'src/components/landing/title';
import { useLocale } from 'src/localizations';

/**
 * The SectionDescription component.
 */
const SectionDescription = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <SideBySide>
                <div>
                    <SubTitle>{locale.pages.home.description.subTitle}</SubTitle>
                    <Title>{locale.pages.home.description.title}</Title>
                    <StyledIconAllContainer>
                        {getIcon(<DescriptionTypeScript />, '60px')}
                        {getIcon(<DescriptionReact />)}
                        {getIcon(<DescriptionNodeJS />)}
                        {getIcon(<DescriptionDocker />)}
                    </StyledIconAllContainer>
                </div>
                <Paragraph>
                    <div>
                        <SpanText html={locale.pages.home.description.text1} />
                    </div>
                    <StyledSeparator />
                    <StyledItalicText>{locale.pages.home.description.text2}</StyledItalicText>
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