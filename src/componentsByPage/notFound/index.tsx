import React, { ReactElement } from 'react';
import { StyledLink } from './style';
import { useLocale } from 'src/localizations';
import { Title } from 'src/components/title';

/**
 * The NotFoundContainer component.
 */
const NotFoundContainer = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <>
            <Title title={locale.pages.notFound.title} />
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