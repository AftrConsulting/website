import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { Link } from 'src/i18n';

interface IMyLinkProps {
	href: string;
	children: ReactElement | ReactElement[] | string;
	className?: string;
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

    return (
        <Link href={props.href} passHref>
            <a className={className}>{props.children}</a>
        </Link>
    );
};

export {
    MyLink
};