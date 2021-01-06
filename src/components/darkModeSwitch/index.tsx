import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SwitchContainerAll, SwitchContainer, SwitchTrack, SwitchInput, SwitchButton } from './style';
import { IState } from 'src/context/interfaces/IState';
import { setTheme } from 'src/context/actions/theme';

/**
 * The DarkModeSwitch component.
 */
const DarkModeSwitch = (): ReactElement => {
    const { themeName } = useSelector((state: IState) => state.theme);
    const dispatch = useDispatch();
	
    const checked = themeName === 'light';
    
    const toggleTheme = (): void => {
        const action = setTheme(themeName === 'light' ? 'dark' : 'light');
        dispatch(action);
    };
	
    return (
        <SwitchContainerAll>
            <SwitchContainer>
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