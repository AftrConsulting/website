import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { StyledSideMenuItemContainer } from './style';
import { ISubHeaderItem } from 'src/data/interfaces/ISubHeaderItem';
import { setHeader } from 'src/context/actions/header';
import { MyLink } from 'src/components/link';
import { Icon } from 'src/components/icon';

interface ISideMenuProps {
	element: ISubHeaderItem;
	setItems?: (newItems: []) => void;
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
            {getItem(props, close)}
        </StyledSideMenuItemContainer>
    );
};

/**
 * Returns the item.
 * @param {ISideMenuProps} props - The props. 
 * @param {() => void} close - The close.
 */
const getItem = (props: ISideMenuProps, close: () => void): ReactElement => {
    if (props.element.subItems) {
        const onClick = (): void => {
            props.setItems?.(props.element.subItems as never);
        };

        return (
            <div onClick={onClick}>
                {props.element.title}
                <Icon icon={faChevronRight} />
            </div>
        );
    }

    if (props.element.href) {
        return (
            <MyLink href={props.element.href} onClick={close}>
                {props.element.title}
            </MyLink>
        );
    }
	
    return <div>{props.element.title}</div>;
};

export {
    SideMenuItem
};