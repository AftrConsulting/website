import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import { StyledSubHeaderContainer, StyledButtonContainer } from './style';
import { SubHeaderItem } from 'src/components/global/header/components/subHeader/components/subHeaderItem';
import { Logo } from 'src/components/global/header/components/logo';
import { CTA } from 'src/components/special/cta';
import { useLocale } from 'src/localizations';
import { isLandingPage } from 'src/utils';

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