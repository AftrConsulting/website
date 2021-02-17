import React, { ReactElement } from 'react';
import { StyledTitle } from './style';

interface ITitleProps {
	className?: string;
	children?: {};
}

/**
 * The Title component.
 * @param {ITitleProps} props - The props.
 */
const Title = (props: ITitleProps): ReactElement => (
    <StyledTitle className={props.className}>
        {props.children}
    </StyledTitle>
);

export {
    Title
};