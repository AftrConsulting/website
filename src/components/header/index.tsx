import React, { ReactElement } from 'react';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { StyledHeader, StyledButton, StyledHeaderRow } from './style';
import { SideMenu } from 'src/components/header/components/sideMenu';
import { Options } from 'src/components/header/components/options';
import { setHeader } from 'src/context/actions/header';
import { Icon } from 'src/components/icon';

/**
 * The Header component.
 */
const Header = (): ReactElement => {
    const dispatch = useDispatch();
	
    const onSideMenuOpen = (): void => {
        dispatch(setHeader(true, 'sideMenu'));
    };

    const onOptionsOpen = (): void => {
        dispatch(setHeader(true, 'options'));
    };
	
    return (
        <>
            <StyledHeader>
                <StyledHeaderRow>
                    <StyledButton onClick={onSideMenuOpen}>
                        <Icon icon={faBars} />
                    </StyledButton>
                    <div>asd</div>
                    <StyledButton onClick={onOptionsOpen}>
                        <Icon icon={faCog} />
                    </StyledButton>
                </StyledHeaderRow>
            </StyledHeader>
            <SideMenu />
            <Options />
        </>
    );
};

export {
    Header
};