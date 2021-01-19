import React, { ReactElement } from 'react';
import { StyledButton, StyledLink } from './style';

interface IButtonProps {
	title: string
	href?: string;
	target?: '_blank';
	children?: ReactElement[] | ReactElement;
}

/**
 * The button component.
 * @param {IButtonProps} props - The props.
 */
const Button = (props: IButtonProps): ReactElement => {
    if (props.href) {
        return (
            <StyledLink href={props.href} title={props.title} target={props.target}>
                {props.children}
            </StyledLink>
        );
    }

    return (
        <StyledButton title={props.title}>
            {props.children}
        </StyledButton>
    );
};

export {
    Button
};