import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
import { configuration } from 'src/configuration';
import { isProduction } from 'src/utils';
/**
 * The Analytics component.
 */
const Analytics = (): ReactElement | null => {
    const amp = useAmp();
	
    if (amp) return getAMPAnalytics();
	
    return (
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${configuration.general.googleID}`} />
            <script dangerouslySetInnerHTML={{
                __html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${configuration.general.googleID}');
				`	
            }} />
        </>
    );
};

/**
 * Returns the amp analytics.
 */
const getAMPAnalytics = (): ReactElement => (
    <>
        <amp-analytics type={'gtag'} data-credentials={'include'}>
            <script type={'application/json'} dangerouslySetInnerHTML={{ 
                __html: `{
					"vars" : {
						"gtag_id": "${configuration.general.googleID}",
						"config" : {
							"${configuration.general.googleID}": { "groups": "default" }
						}
					}
				}` 
            }} />
        </amp-analytics>
    </>
);

/**
 * The AMPAnalyticsScript component. 
 */
const AMPAnalyticsScript = (): ReactElement | null => {
    const amp = useAmp();

    if (!amp || !isProduction()) return null;

    return (
        <script async custom-element={'amp-analytics'} src={'https://cdn.ampproject.org/v0/amp-analytics-0.1.js'} />
    );
};

export {
    Analytics,
    AMPAnalyticsScript
};