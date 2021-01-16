import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { StyledPrimaryColor } from './style';
import { setPrimaryColor } from 'src/context/actions/theme';
import { IState } from 'src/context/interfaces/IState';
import { Icon } from 'src/components/icon';
import { allColors } from 'src/theme';

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