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
                    <div>{locale.pages.home.description.text1}</div>
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