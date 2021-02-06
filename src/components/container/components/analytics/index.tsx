import { useEffect } from 'react';

/**
 * The Analytics component.
 */
const Analytics = (): null => {
    useEffect(() => {
        const script = document.createElement('script');
		
        script.src = 'https://getinsights.io/js/insights.js';
        script.async = true;
        script.onload = (): void => {
            window.insights.init('G67tEIKtrLrKNpSK');
            window.insights.trackPages();
        };

        document.body.appendChild(script);
    }, []);

    return null;
};

export {
    Analytics
};