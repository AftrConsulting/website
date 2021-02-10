import React, { ReactElement } from 'react';

/**
 * The Analytics component.
 */
const Analytics = (): ReactElement => {
    return (
        <>
            <script async src={'https://www.googletagmanager.com/gtag/js?id=G-8YV0T0KY6S'}></script>
            <script dangerouslySetInnerHTML={{ __html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
	
				gtag('config', 'G-8YV0T0KY6S');
			` }} />
        </>
    );
};

export {
    Analytics
};