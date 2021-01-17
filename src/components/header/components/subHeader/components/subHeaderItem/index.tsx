import React, { ReactElement } from 'react';
import { StyledSubHeaderItemContainer } from './style';
import { ISubHeaderItem } from 'src/data/interfaces/ISubHeaderItem';

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
            {props.element.title}
        </StyledSubHeaderItemContainer>
    );
};

export {
    SubHeaderItem
};