import React, { ReactElement } from 'react';
import { StyledLogoContainer, StyledSideMenuItemFooterContainer } from './style';
import { SideMenuItemContainer } from 'src/components/header/components/sideMenu/components/sideMenuItemContainer';
import { useSaveStateBeforeLanguageChange } from 'src/components/header/utils/hook';
import { Slider } from 'src/components/header/components/slider';
import { Logo } from 'src/components/header/components/logo';
import { CTA } from 'src/components/cta';

/**
 * The SideMenu component.
 */
const SideMenu = (): ReactElement => {
    const [ saveState, removeState ] = useSaveStateBeforeLanguageChange();
	
    return (
        <Slider header={'sideMenu'} onClose={removeState}>
            <StyledLogoContainer>
                <Logo onBeforeLanguageChange={saveState} />
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