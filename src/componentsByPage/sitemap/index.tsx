import React, { ReactElement } from 'react';
import { StyledLink, StyledContainer } from './style';
import { getSitemapRoutes } from 'config/utils/sitemap';
import { sitemapLocales } from 'config/sitemap';

const routes = getSitemapRoutes(sitemapLocales);

/**
 * The Sitemap routes.
 */
const SitemapRoutes = (): ReactElement => (
    <>
        <StyledContainer>
            {routes.map((x, key) => {
                if (x.exclude) return null;
					
                return (
                    <div key={key}>
                        <StyledLink href={x.href}>
                            {x.title}
                        </StyledLink>
                    </div>
                );
            })}
        </StyledContainer>
    </>
);

export {
    SitemapRoutes
};