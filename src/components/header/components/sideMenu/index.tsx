import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { StyledLogoContainer } from './style';
import { SideMenuItem } from 'src/components/header/components/sideMenu/components/sideMenuItem';
import { Slider } from 'src/components/header/components/slider';
import { Logo } from 'src/components/header/components/logo';
import { subHeaderItems } from 'src/data/subHeaderItems';
import { IState } from 'src/context/interfaces/IState';
import { context } from 'src/context';

/**
 * The SideMenu component.
 */
const SideMenu = (): ReactElement => {
    const header = useSelector((state: IState) => state.header);
	
    const toggleLanguage = (): void => {
        context.header = header;
    };
	
    const onClose = (): void => {
        context.header = null;
    };
	
    return (
        <Slider header={'sideMenu'} onClose={onClose}>
            <StyledLogoContainer>
                <Logo onBeforeLanguageChange={toggleLanguage} />
            </StyledLogoContainer>
            <>
                {subHeaderItems.map((x, key) => (
                    <SideMenuItem element={x} key={key} />
                ))}
            </>
        </Slider>
    );
};

export {
    SideMenu
};