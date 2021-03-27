import { NextSeo } from 'next-seo';
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
            href: `${configuration.general.baseUrl}${locale}${router.route}${!amp ? '?amp=1' : ''}`,
            rel: amp ? 'canonical' : 'amphtml'
        });
    }
	
    return (
        <NextSeo
            title={replaceSEOTags(props.title)}
            description={props.description}
            additionalLinkTags={additionalLinkTags}
        />
    );
};

/**
 * Replaces SEO tags.
 * @param {string} str - The string. 
 */
const replaceSEOTags = (str: string): string => {
    if (!str) return '';

    return str.replace('{COMPANY}', 'AftrConsulting');
};

export {
    Seo
};