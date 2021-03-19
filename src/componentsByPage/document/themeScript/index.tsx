import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
import { getThemeHTML } from 'src/theme/utils';

/**
 * The ThemeScript component.
 */
const ThemeScript = (): ReactElement | null => {
    const amp = useAmp();
	
    if (amp) return null;
	
    return (
        <script dangerouslySetInnerHTML={{ __html: getThemeHTML() }} />
    );
};

export {
    ThemeScript
};