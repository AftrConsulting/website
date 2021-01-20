import React, { ReactElement } from 'react';
import { StyledSubHeaderContainer, StyledButtonContainer } from './style';
import { SubHeaderItem } from 'src/components/header/components/subHeader/components/subHeaderItem';
import { Logo } from 'src/components/header/components/logo';
import { subHeaderItems } from 'src/data/subHeaderItems';
import { configuration } from 'src/configuration';
import { Button } from 'src/components/button';
import { useTranslation } from 'src/i18n';

/**
 * The SubHeader Component.
 */
const SubHeader = (): ReactElement => {
    const { t } = useTranslation([ 'common' ]);

    return (
        <>
            <Logo />
            <StyledSubHeaderContainer>
                {subHeaderItems.map((x, key) => (
                    <SubHeaderItem key={key} element={x} />
                ))}
            </StyledSubHeaderContainer>
            <StyledButtonContainer>
                <Button 
                    href={configuration.urls.consultation}
                    target={'_blank'}
                    title={t('bookConsultation')}>
                    <span>{t('bookConsultation')}</span>
                </Button>
            </StyledButtonContainer>
        </>
    );
};

export {
    SubHeader
};