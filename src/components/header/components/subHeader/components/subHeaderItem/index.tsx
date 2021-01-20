import React, { ReactElement } from 'react';
import { StyledSubHeaderItemContainer } from './style';
import { SubHeaderItemWithSubMenu } from 'src/components/header/components/subHeader/components/subHeaderItemWithSubMenu';
import { ISubHeaderItem } from 'src/data/interfaces/ISubHeaderItem';
import { MyLink } from 'src/components/link';

interface ISubHeaderItemProps {
	element: ISubHeaderItem;
}

/**
 * The SubHeaderItem Component.
 * @param {ISubHeaderItemProps} props - The props.
 */
const SubHeaderItem = (props: ISubHeaderItemProps): ReactElement => {
    return (
        <StyledSubHeaderItemContainer>
            {props.element.subItems ? 
                <SubHeaderItemWithSubMenu {...props} /> : 
                <MyLink href={props.element.href as string}>
                    {props.element.title}
                </MyLink>}
        </StyledSubHeaderItemContainer>
    );
};

export {
    SubHeaderItem
};