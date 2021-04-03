import { NextSeo } from 'next-seo';
import { OpenGraphImages } from 'next-seo/lib/types';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { configuration } from 'src/configuration';

interface ISeoProps {
	title: string;
	description: string;
	hasAmp?: boolean;
}

/**
 * The seo component.
 * @param {ISeoProps} props - The props.
 */
const Seo = (props: ISeoProps): ReactElement => {
    const amp = useAmp();
    const router = useRouter();
	
    const additionalLinkTags = [];
    if (props.hasAmp) {
        const locale = router.locale === 'en' ? 
            '' : `/${router.locale}`;

        additionalLinkTags.push({
            rel: amp ? 'canonical' : 'amphtml',
            // eslint-disable-next-line sort-keys
            href: `${configuration.general.baseUrl}${locale}${router.route}${!amp ? '?amp=1' : ''}`
        });
    }
	
    const title = replaceSEOTags(props.title);
    const description = props.description.replace(/\s+/g, ' ');
	
    return (
        <NextSeo
            title={replaceSEOTags(props.title)}
            description={props.description.replace(/\s+/g, ' ')}
            additionalLinkTags={additionalLinkTags}
            openGraph={{
                description,
                images: getOpenGraphImages(),
                locale: router.locale,
                site_name: configuration.general.company,
                title,
                type: 'website'
            }}
        />
    );
};

/**
 * Returns the open graph images.
 */
const getOpenGraphImages = (): OpenGraphImages[] => ([
    {
        alt: 'Logo',
        height: 630,
        url: `${configuration.general.baseUrl}${configuration.general.imgs.openGraphImage}`,
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