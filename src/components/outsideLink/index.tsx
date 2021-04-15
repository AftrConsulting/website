import React, { ReactElement } from 'react';

interface IOutsideLinkProps {
	href: string;
	children: {};
	disabled?: boolean;
}

/**
 * The OutsideLink component.
 * @param {IOutsideLinkProps} props - The props. 
 */
const OutsideLink = (props: IOutsideLinkProps): ReactElement => {
    if (props.disabled) return <>{props.children}</>;
	
    return (
        <a href={props.href} target={'_blank'} rel={'noreferrer'}>
            {props.children}
        </a>
    );
};

export {
    OutsideLink
};