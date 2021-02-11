import React, { ReactElement } from 'react';
import { StyledSubHeaderContainer, StyledButtonContainer } from './style';
import { SubHeaderItem } from 'src/components/header/components/subHeader/components/subHeaderItem';
import { Logo } from 'src/components/header/components/logo';
import { subHeaderItems } from 'src/data/subHeaderItems';
import { CTA } from 'src/components/cta';

/**
 * The SubHeader Component.
 */
const SubHeader = (): ReactElement => {
    return (
        <>
            <Logo />
            <StyledSubHeaderContainer>
                {subHeaderItems.map((x, key) => (
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