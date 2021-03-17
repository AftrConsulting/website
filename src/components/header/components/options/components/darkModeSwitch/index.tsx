import React, { ReactElement, useEffect, useState } from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { SwitchContainerAll, SwitchContainer, SwitchTrack, SwitchInput, SwitchButton, SwitchIcon } from './style';
import { configuration } from 'src/configuration';

/**
 * The DarkModeSwitch component.
 */
const DarkModeSwitch = (): ReactElement => {
    const [ themeName, setThemeName ] = useState('');
	
    useEffect(() => {
        setThemeName(String(document.documentElement.getAttribute('data-theme')));
    }, []);
	
    const checked = themeName === 'dark';
    const icon = checked ? faMoon : faSun;
	
    const toggleTheme = (): void => {
        const newTheme = themeName === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem(configuration.localStorage.theme, newTheme);
        setThemeName(newTheme);
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