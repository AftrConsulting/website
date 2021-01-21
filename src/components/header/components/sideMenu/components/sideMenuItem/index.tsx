import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { StyledSideMenuItemContainer } from './style';
import { ISubHeaderItem } from 'src/data/interfaces/ISubHeaderItem';
import { MyLink } from 'src/components/link';
import { setHeader } from 'src/context/actions/header';

interface ISideMenuProps {
	element: ISubHeaderItem;
}

/**
 * The SideMenuItem component.
 * @param {ISideMenuProps} props - The props.
 */
const SideMenuItem = (props: ISideMenuProps): ReactElement => {
    const dispatch = useDispatch();
	
    const close = (): void => {
        dispatch(setHeader(false, 'sideMenu'));
    };
	
    return (
        <StyledSideMenuItemContainer>
            {props.element.href ? (
                <MyLink href={props.element.href} onClick={close}>
                    {props.element.title}
                </MyLink>
            ) : <div>{props.element.title}</div>}
        </StyledSideMenuItemContainer>
    );
};

export {
    SideMenuItem
};