import Head from 'next/head';
import React, { ReactElement } from 'react';

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
const SeoHead = (props: ISeoHeadProps): ReactElement => (
    <Head>
        <title>{props.title}</title>
        <meta name={'robots'} content={'index,follow'} />
        <meta name={'googlebot'} content={'index,follow'} />
        <meta name={'description'} content={props.description} />
        {props.additionalMetaTags.map((x) => (
            <meta key={JSON.stringify(x)} {...x} />
        ))}
        {props.additionalLinkTags.map((x) => (
            <link key={JSON.stringify(x)} {...x} />
        ))}
    </Head>
);

export {
    SeoHead
};