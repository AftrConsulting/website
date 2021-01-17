import React, { ReactElement } from 'react';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { StyledHeader, StyledButton, StyledHeaderRow } from './style';
import { SubHeader } from 'src/components/header//components/subHeader';
import { SideMenu } from 'src/components/header/components/sideMenu';
import { Options } from 'src/components/header/components/options';
import { IState } from 'src/context/interfaces/IState';
import { setHeader } from 'src/context/actions/header';
import { Icon } from 'src/components/icon';

/**
 * The Header component.
 */
const Header = (): ReactElement => {
    const { options, sideMenu } = useSelector((state: IState) => state.header);
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
                    <StyledButton onClick={onSideMenuOpen} open={sideMenu}>
                        <Icon icon={faBars} />
                    </StyledButton>
                    <SubHeader />
                    <StyledButton onClick={onOptionsOpen} open={options}>
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