/* eslint-disable sort-keys */
import { useAmp } from 'next/amp';
import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { OpenGraphImages } from 'next-seo/lib/types';
import { NextRouter, useRouter } from 'next/router';
import { configuration } from 'src/configuration';
import { getSitemapRoutesForLanguage } from 'config/utils/sitemap';

interface ISeoProps {
	title: string;
	seoTitle?: string;
	description?: string;
	hasAmp?: boolean;
	openGraphImage?: string;
}

/**
 * The seo component.
 * @param {ISeoProps} props - The props.
 */
const Seo = (props: ISeoProps): ReactElement => {
    const amp = useAmp();
    const router = useRouter();
	
    const image = props.openGraphImage || `${configuration.general.baseUrl}${configuration.general.imgs.openGraphImage}`;
    const additionalLinkTags = getAdditionalLinkTags(router, amp, props.hasAmp);
    const title = replaceSEOTags(props.seoTitle || props.title);
    const description = props.description?.replace(/\s+/g, ' ') || '';
	
    return (
        <NextSeo
            title={title}
            description={description}
            additionalLinkTags={additionalLinkTags}
            openGraph={{
                description,
                images: getOpenGraphImages(image),
                locale: router.locale,
                site_name: configuration.general.company,
                title,
                type: 'website'
            }}
            twitter={{
                cardType: 'summary_large_image'
            }}
            additionalMetaTags={[
                { name: 'twitter:title', content: title },
                { name: 'twitter:description', content: description },
                { name: 'twitter:image', content: image }
            ]}
        />
    );
};

/**
 * Returns the additional link tags.
 * @param {NextRouter} router - The router. 
 * @param {boolean} amp - The amp. 
 * @param {boolean} hasAmp - If has amp. 
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAdditionalLinkTags = (router: NextRouter, amp: boolean, hasAmp?: boolean): any[] => {
    const additionalLinkTags = getAlternateLanguages(router);
	
    if (hasAmp) {
        const locale = router.locale === 'en' ? 
            '' : `/${router.locale}`;

        additionalLinkTags.push({
            rel: amp ? 'canonical' : 'amphtml',
            href: `${configuration.general.baseUrl}${locale}${router.route}${!amp ? '?amp=1' : ''}`
        });
    }
	
    return additionalLinkTags;
};

/**
 * Returns the alternate languages.
 * @param {NextRouter} router - The router. 
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAlternateLanguages = (router: NextRouter): any[] => {
    const additionalLinkTags = [];
    const path = getPath(router.asPath);
	
    const enSitemap = getSitemapRoutesForLanguage(process.env.sitemapLocales, 'en');
    const frSitemap = getSitemapRoutesForLanguage(process.env.sitemapLocales, 'fr');
	
    if (enSitemap.find(x => x.href === path)) {
        additionalLinkTags.push({
            rel: 'alternate',
            href: `${configuration.general.baseUrl}${path}`,
            hreflang: 'en'
        });
    }

    if (frSitemap.find(x => x.href === `/fr${path}`)) {
        additionalLinkTags.push({
            rel: 'alternate',
            href: `${configuration.general.baseUrl}/fr${path}`,
            hreflang: 'fr'
        });
    }
	
    return additionalLinkTags;
};

/**
 * Returns the path.
 * @param {string} asPath - The as path. 
 */
const getPath = (asPath: string): string => {
    if (asPath.indexOf('?') === -1) return asPath;

    return asPath.substr(0, asPath.indexOf('?'));
};

/**
 * Returns the open graph images.
 * @param {string} url - The url.
 */
const getOpenGraphImages = (url: string): OpenGraphImages[] => ([
    {
        alt: 'Logo',
        height: 630,
        url,
        width: 1200
    }
]);

/**
 * Replaces SEO tags.
 * @param {string} str - The string. 
 */
const replaceSEOTags = (str: string): string => {
    if (!str) return '';

    return str.replace('{COMPANY}', configuration.general.company);
};

export {
    Seo
};