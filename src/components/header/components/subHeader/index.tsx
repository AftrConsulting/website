import React, { ReactElement } from 'react';
import { StyledSubHeaderContainer, StyledButtonContainer } from './style';
import { SubHeaderItem } from 'src/components/header/components/subHeader/components/subHeaderItem';
import { Logo } from 'src/components/header/components/logo';
import { useLocale } from 'src/localizations';
import { CTA } from 'src/components/cta';

/**
 * The SubHeader Component.
 */
const SubHeader = (): ReactElement => {
    const locale = useLocale();

    return (
        <>
            <Logo />
            <StyledSubHeaderContainer>
                {locale.menu.map((x, key) => (
                    <SubHeaderItem key={key} element={x} />
                ))}
            </StyledSubHeaderContainer>
            <StyledButtonContainer>
                <CTA />
            </StyledButtonContainer>
        </>
    );
};

export {
    SubHeader
};