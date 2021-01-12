import React, { ReactElement } from 'react';
import { StyledRow } from './style';

interface IRowProps {
	children?: JSX.Element[] | JSX.Element;
	className?: string;
}

/**
 * The row component.
 * @param {IRowProps} props - The props.
 */
const Row = (props: IRowProps): ReactElement => {
    return (
        <StyledRow className={props.className}>
            {props.children}
        </StyledRow>
    );
};

export {
    Row
};