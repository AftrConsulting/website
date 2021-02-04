import React, { ReactElement } from 'react';
import { configuration } from 'src/configuration';

/**
 * The Analytics component.
 */
const Analytics = (): ReactElement => {
    const { trackingID } = configuration.google;
	
    return (
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingID}`}></script>
            <script
                async
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
	
					gtag('config', '${trackingID}');`
                }}
            />
        </>
    );
};

export {
    Analytics
};