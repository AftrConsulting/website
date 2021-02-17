import React, { ReactElement } from 'react';
import { StyledSection } from './style';
import { SubTitle } from 'src/componentsByPage/home/subTitle';
import { Title } from 'src/componentsByPage/home/title';
import { useTranslation } from 'src/i18n';
import { Row } from 'src/components/row';

/**
 * The SectionExpertise component.
 */
const SectionExpertise = (): ReactElement => {
    const { t } = useTranslation([ 'home' ]);

    return (
        <StyledSection>
            <Row>
                <SubTitle>{t('home:expertiseSubTitle')}</SubTitle>
                <Title>{t('home:expertiseTitle')}</Title>
            </Row>
        </StyledSection>
    );
};

export {
    SectionExpertise
};