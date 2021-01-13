import React, { ReactElement } from 'react';
import { Slider } from 'src/components/header/components/slider';

/**
 * The Options component.
 */
const Options = (): ReactElement => {
    return (
        <Slider header={'options'} rightDirection>
            <div>options</div>
        </Slider>
    );
};

export {
    Options
};