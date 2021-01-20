import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { StyledLogoContainer, StyledSideMenuItemContainer, StyledSideMenuItemFooterContainer } from './style';
import { SideMenuItem } from 'src/components/header/components/sideMenu/components/sideMenuItem';
import { Slider } from 'src/components/header/components/slider';
import { Logo } from 'src/components/header/components/logo';
import { subHeaderItems } from 'src/data/subHeaderItems';
import { IState } from 'src/context/interfaces/IState';
import { configuration } from 'src/configuration';
import { Button } from 'src/components/button';
import { useTranslation } from 'src/i18n';
import { context } from 'src/context';

/**
 * The SideMenu component.
 */
const SideMenu = (): ReactElement => {
    const header = useSelector((state: IState) => state.header);
    const { t } = useTranslation([ 'common' ]);
	
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
            <StyledSideMenuItemContainer>
                {subHeaderItems.map((x, key) => (
                    <SideMenuItem element={x} key={key} />
                ))}
            </StyledSideMenuItemContainer>
            <StyledSideMenuItemFooterContainer>
                <Button 
                    href={configuration.urls.consultation}
                    target={'_blank'}
                    title={t('bookConsultation')}>
                    <span>{t('bookConsultation')}</span>
                </Button>
            </StyledSideMenuItemFooterContainer>
        </Slider>
    );
};

export {
    SideMenu
};