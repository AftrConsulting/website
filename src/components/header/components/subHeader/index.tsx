import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import { StyledSubHeaderContainer, StyledButtonContainer } from './style';
import { SubHeaderItem } from 'src/components/header/components/subHeader/components/subHeaderItem';
import { Logo } from 'src/components/header/components/logo';
import { useLocale } from 'src/localizations';
import { isLandingPage } from 'src/utils';
import { CTA } from 'src/components/cta';

/**
 * The SubHeader Component.
 */
const SubHeader = (): ReactElement => {
    const router = useRouter();
    const amp = useAmp() || isLandingPage(router);
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