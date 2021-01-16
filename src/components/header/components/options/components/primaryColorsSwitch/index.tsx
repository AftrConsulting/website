import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledPrimaryColor } from './style';
import { allColors } from 'src/theme';
import { setPrimaryColor } from 'src/context/actions/theme';
import { IState } from 'src/context/interfaces/IState';

/**
 * The primary colors switch component.
 */
const PrimaryColorsSwitch = (): ReactElement => {
    const { primaryColor } = useSelector((state: IState) => state.theme);

    const dispatch = useDispatch();
	
    const changeColor = (newPrimaryColor: string) => (): void => {
        dispatch(
            setPrimaryColor(newPrimaryColor)
        );
    };

    return (
        <div>
            {allColors.map((color, key) => (
                <StyledPrimaryColor
                    onClick={changeColor(color)}
                    active={color === primaryColor}
                    primaryColor={color} 
                    key={key} />
            ))}
        </div>
    );
};

export {
    PrimaryColorsSwitch
};