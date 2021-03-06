import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { isLandingPage } from 'src/utils';

interface ISeoHeadProps {
	title: string;
	description: string;
	additionalLinkTags: {}[];
	additionalMetaTags: {}[];
}

/**
 * The SeoHead component.
 * @param {ISeoProps} props - The props.
 */
const SeoHead = (props: ISeoHeadProps): ReactElement => {
    const router = useRouter();
    const isLanding = isLandingPage(router);
    const robots = isLanding ? 
        'noindex,nofollow' : 'index,follow';

    return (
        <Head>
            <title>{props.title}</title>
            <meta name={'robots'} content={robots} />
            <meta name={'googlebot'} content={robots} />
            <meta name={'description'} content={props.description} />
            {props.additionalMetaTags.map((x) => (
                <meta key={JSON.stringify(x)} {...x} />
            ))}
            {props.additionalLinkTags.map((x) => (
                <link key={JSON.stringify(x)} {...x} />
            ))}
        </Head>
    );
};

export {
    SeoHead
};