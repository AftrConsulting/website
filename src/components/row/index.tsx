import React, { ReactElement } from 'react';
import { StyledRow } from './style';

interface IRowProps {
	children?: JSX.Element[] | JSX.Element;
}

/**
 * The row component.
 * @param {IRowProps} props - The props.
 */
const Row = (props: IRowProps): ReactElement => {
    return (
        <StyledRow>
            {props.children}
        </StyledRow>
    );
};

export {
    Row
};