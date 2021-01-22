import React, { ReactElement, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { StyledSideMenuItemContainer, SideMenuItemClose } from './style';
import { SideMenuItem } from 'src/components/header/components/sideMenu/components/sideMenuItem';
import { subHeaderItems } from 'src/data/subHeaderItems';
import { IState } from 'src/context/interfaces/IState';
import { Icon } from 'src/components/icon';
import { useTranslation } from 'src/i18n';
import { context } from 'src/context';

/**
 * The SideMenu Item container.
 */
const SideMenuItemContainer = (): ReactElement => {
    const { t } = useTranslation([ 'common' ]);
    const [ items, setItemsState ] = useState([]);
    const sideMenu = useSelector((state: IState) => state.header.sideMenu);
    const setItems = (newItems: []): void => setItemsState(newItems);
    const clear = (): void => setItems([]);
	
    useEffect(() => {
        if (sideMenu) return;

        setTimeout(clear, 150);
        context.header = null;
    }, [ sideMenu ]);
	
    if (items.length) {
        return (
            <StyledSideMenuItemContainer>
                <SideMenuItemClose onClick={clear}>
                    <Icon icon={faChevronLeft} />
                    {t('goBack')}
                </SideMenuItemClose>
                {items.map((x, key) => (
                    <SideMenuItem element={x} key={key} />
                ))}
            </StyledSideMenuItemContainer>
        );
    }

    return (
        <StyledSideMenuItemContainer>
            {subHeaderItems.map((x, key) => (
                <SideMenuItem key={key} element={x} setItems={setItems} />
            ))}
        </StyledSideMenuItemContainer>
    );
};

export {
    SideMenuItemContainer
};