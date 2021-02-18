import React, { ReactElement } from 'react';
import { StyledLogoContainer, StyledSideMenuItemFooterContainer } from './style';
import { SideMenuItemContainer } from 'src/components/header/components/sideMenu/components/sideMenuItemContainer';
import { Slider } from 'src/components/header/components/slider';
import { Logo } from 'src/components/header/components/logo';
import { CTA } from 'src/components/cta';

/**
 * The SideMenu component.
 */
const SideMenu = (): ReactElement => {
    return (
        <Slider header={'sideMenu'}>
            <StyledLogoContainer>
                <Logo />
            </StyledLogoContainer>
            <SideMenuItemContainer />
            <StyledSideMenuItemFooterContainer>
                <CTA />
            </StyledSideMenuItemFooterContainer>
        </Slider>
    );
};

export {
    SideMenu
};