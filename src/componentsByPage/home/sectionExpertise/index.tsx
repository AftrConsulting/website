import React, { ReactElement } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { StyledSection, StyledExpertiseContainer } from './style';
import { SubTitle } from 'src/componentsByPage/home/subTitle';
import { Title } from 'src/componentsByPage/home/title';
import { useTranslation } from 'src/i18n';
import { Row } from 'src/components/row';
import { Icon } from 'src/components/icon';

/**
 * The SectionExpertise component.
 */
const SectionExpertise = (): ReactElement => {
    const { t } = useTranslation([ 'home' ]);
    const expertises = getExpertises(t('home:expertises'));

    return (
        <StyledSection>
            <Row>
                <SubTitle>{t('home:expertiseSubTitle')}</SubTitle>
                <Title>{t('home:expertiseTitle')}</Title>
                <StyledExpertiseContainer>
                    <div>
                        <Icon icon={faCheck} /> asdasd
                    </div>
                </StyledExpertiseContainer>
            </Row>
        </StyledSection>
    );
};

/**
 * Returns the expertises.
 * @param {string[]} expertises - The expertises. 
 */
const getExpertises = (expertises: []): ReactElement => {
    console.log(expertises);
    return (
        <div>
            <Icon icon={faCheck} /> asdasd
        </div>
    );
};

export {
    SectionExpertise
};