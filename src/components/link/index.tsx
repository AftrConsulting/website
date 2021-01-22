import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { Link } from 'src/i18n';

interface IMyLinkProps {
	href?: string;
	children: ReactElement | ReactElement[] | string;
	className?: string;
	onClick?: () => void;
}

/**
 * Returns the link.
 * @param {IMyLinkProps} props - The props.
 */
const MyLink = (props: IMyLinkProps): ReactElement => {
    const router = useRouter();
	
    let className = props.className || '';
    if (router.pathname === props.href) { 
        className += ' active';
    }
	
    const onClick = (): void => {
        props.onClick?.();
    };
	
    if (!props.href) {
        return <a className={className} onClick={onClick}>{props.children}</a>;
    }

    return (
        <Link href={props.href} passHref>
            <a className={className} onClick={onClick}>{props.children}</a>
        </Link>
    );
};

export {
    MyLink
};