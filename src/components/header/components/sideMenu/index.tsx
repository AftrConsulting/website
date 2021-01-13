import React, { ReactElement } from 'react';
import { Slider } from 'src/components/header/components/slider';

/**
 * The SideMenu component.
 */
const SideMenu = (): ReactElement => {
    return (
        <Slider header={'sideMenu'}>
            <div>sideMenu</div>
        </Slider>
    );
};

export {
    SideMenu
};