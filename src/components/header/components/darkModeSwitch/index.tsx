import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { SwitchContainerAll, SwitchContainer, SwitchTrack, SwitchInput, SwitchButton, SwitchIcon } from './style';
import { IState } from 'src/context/interfaces/IState';
import { setTheme } from 'src/context/actions/theme';

/**
 * The DarkModeSwitch component.
 */
const DarkModeSwitch = (): ReactElement => {
    const { themeName } = useSelector((state: IState) => state.theme);
    const dispatch = useDispatch();
	
    const checked = themeName === 'dark';
    const icon = checked ? faMoon : faSun;
	
    const toggleTheme = (): void => {
        const newTheme = themeName === 'light' ? 
            'dark' : 'light';
        const action = setTheme(newTheme);
        dispatch(action);
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