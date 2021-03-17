import React, { ReactElement, useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { StyledPrimaryColor } from './style';
import { Icon } from 'src/components/icon';
import { allColors } from 'src/theme';

/**
 * The primary colors switch component.
 */
const PrimaryColorsSwitch = (): ReactElement => {
    const [ primaryColor ] = useState('');

    const changeColor = (newPrimaryColor: string) => (): void => {
        console.log(newPrimaryColor);
    };

    return (
        <div>
            {allColors.map((color, key) => (
                <StyledPrimaryColor
                    onClick={changeColor(color)}
                    active={color === primaryColor}
                    primaryColor={color} 
                    key={key}>
                    <Icon icon={faCheck} />
                </StyledPrimaryColor>
            ))}
        </div>
    );
};

export {
    PrimaryColorsSwitch
};