import React, { ReactElement, useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { StyledSection, StyledExpertiseContainer } from './style';
import { SubTitle } from 'src/componentsByPage/home/subTitle';
import { Title } from 'src/componentsByPage/home/title';
import { useLocale } from 'src/localizations';
import { Icon } from 'src/components/icon';
import { Row } from 'src/components/row';

/**
 * The SectionExpertise component.
 */
const SectionExpertise = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <Row>
                <SubTitle>{locale.pages.home.expertises.subTitle}</SubTitle>
                <Title>{locale.pages.home.expertises.title}</Title>
                <StyledExpertiseContainer>
                    {locale.pages.home.expertises.list.map((x, key) => (
                        <li key={key}>
                            <Icon icon={faCheck} /> 
                            <div>{x}</div>
                        </li>
                    ))}
                </StyledExpertiseContainer>
            </Row>
        </StyledSection>
    );
};

export {
    SectionExpertise
};