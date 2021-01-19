import React, { ReactElement } from 'react';
import { StyledSideMenuItemContainer } from './style';
import { ISubHeaderItem } from 'src/data/interfaces/ISubHeaderItem';
import { MyLink } from 'src/components/link';

interface ISideMenuProps {
	element: ISubHeaderItem;
}

/**
 * The SideMenuItem component.
 * @param {ISideMenuProps} props - The props.
 */
const SideMenuItem = (props: ISideMenuProps): ReactElement => {
    return (
        <StyledSideMenuItemContainer>
            {props.element.href ? (
                <MyLink href={props.element.href}>
                    {props.element.title}
                </MyLink>
            ) : <div>{props.element.title}</div>}
        </StyledSideMenuItemContainer>
    );
};

export {
    SideMenuItem
};