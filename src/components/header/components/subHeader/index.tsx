import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
import { StyledSubHeaderContainer, StyledButtonContainer } from './style';
import { SubHeaderItem } from 'src/components/header/components/subHeader/components/subHeaderItem';
import { Logo } from 'src/components/header/components/logo';
import { useLocale } from 'src/localizations';
import { CTA } from 'src/components/cta';

/**
 * The SubHeader Component.
 */
const SubHeader = (): ReactElement => {
    const amp = useAmp();
    const locale = useLocale();

    return (
        <>
            <Logo hideLanguage={amp} />
            {!amp && <StyledSubHeaderContainer>
                {locale.menu.map((x, key) => (
                    <SubHeaderItem key={key} element={x} />
                ))}
            </StyledSubHeaderContainer>}
            <StyledButtonContainer amp={amp}>
                <CTA />
            </StyledButtonContainer>
        </>
    );
};

export {
    SubHeader
};