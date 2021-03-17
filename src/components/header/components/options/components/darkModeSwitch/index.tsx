import React, { ReactElement, useState } from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { SwitchContainerAll, SwitchContainer, SwitchTrack, SwitchInput, SwitchButton, SwitchIcon } from './style';

/**
 * The DarkModeSwitch component.
 */
const DarkModeSwitch = (): ReactElement => {
    const [ themeName ] = useState('light');
	
    const checked = themeName === 'dark';
    const icon = checked ? faMoon : faSun;
	
    const toggleTheme = (): void => {
        const newTheme = themeName === 'light' ? 
            'dark' : 'light';
    };
	
    return (
        <SwitchContainerAll>
            <SwitchContainer>
                <SwitchIcon 
                    checked={checked} 
                    icon={icon} />
                <SwitchTrack checked={checked} />
                <SwitchButton checked={checked} />
                <SwitchInput
                    checked={checked}
                    type={'checkbox'}
                    onChange={toggleTheme} />
            </SwitchContainer>
        </SwitchContainerAll>
    );
};

export {
    DarkModeSwitch
};