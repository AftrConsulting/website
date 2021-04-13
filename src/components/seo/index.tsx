/* eslint-disable sort-keys */
import { useAmp } from 'next/amp';
import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { OpenGraphImages } from 'next-seo/lib/types';
import { NextRouter, useRouter } from 'next/router';
import { IAlternateLinkProps } from 'src/components/seo/interfaces/IAlternateLinkProps';
import { getSitemapRoutesForLanguage } from 'config/utils/sitemap';
import { configuration } from 'src/configuration';

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
const getAdditionalLinkTags = (router: NextRouter, amp: boolean, hasAmp?: boolean): IAlternateLinkProps[] => {
    const additionalLinkTags = getAlternateLanguages(router);
    const path = getPath(router.asPath);
    const locale = router.locale === 'en' ? 
        '' : `/${router.locale}`;
	
    if (hasAmp && amp) {
        additionalLinkTags.push({
            rel: 'amphtml',
            href: `${configuration.general.baseUrl}${locale}${path}?amp=1`
        });
    }
	
    additionalLinkTags.push({
        rel: 'canonical',
        href: `${configuration.general.baseUrl}${locale}${path}`
    });
	
    return additionalLinkTags;
};

/**
 * Returns the alternate languages.
 * @param {NextRouter} router - The router. 
 */
const getAlternateLanguages = (router: NextRouter): IAlternateLinkProps[] => {
    const additionalLinkTags = [];
    const path = getPath(router.asPath);
	
    const enSupported = getSitemapRoutesForLanguage(process.env.sitemapLocales, 'en').find(x => x.href === path);
    const frSupported = getSitemapRoutesForLanguage(process.env.sitemapLocales, 'fr').find(x => x.href === `/fr${path}`);
	
    if (enSupported) {
        additionalLinkTags.push({
            rel: 'alternate',
            href: `${configuration.general.baseUrl}${path}`,
            hrefLang: 'en'
        });
    }

    if (frSupported) {
        additionalLinkTags.push({
            rel: 'alternate',
            href: `${configuration.general.baseUrl}/fr${path}`,
            hrefLang: 'fr'
        });
    }
	
    const locale = router.locale === 'en' ? 
        '' : `/${router.locale}`;
	
    additionalLinkTags.push({
        rel: 'alternate',
        href: `${configuration.general.baseUrl}${locale}${path}`,
        hrefLang: 'x-default'
    });
	
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