import React, { ReactElement } from 'react';
import { StyledLink } from './style';
import { useLocale } from 'src/localizations';

/**
 * The NotFoundContainer component.
 */
const NotFoundContainer = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <>
            <h1>{locale.pages.notFound.title}</h1>
            <div>{locale.pages.notFound.subTitle}</div>
            <StyledLink href={'/'}>
                {locale.pages.notFound.button}
            </StyledLink>
        </>
    );
};

export {
    NotFoundContainer
};