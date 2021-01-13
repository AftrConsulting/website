import React, { ReactElement, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledSliderContainer, StyledSliderOpacity } from './style';
import { IState } from 'src/context/interfaces/IState';
import { setHeader } from 'src/context/actions/header';
import { HeaderType } from 'src/types/headerType';

interface ISliderProps {
	children: React.ReactElement;
	header: HeaderType;
	rightDirection?: boolean;
}

/**
 * The Slider component.
 * @param {ISliderProps} props - The props.
 */
const Slider = (props: ISliderProps): ReactElement => {
    const open = useSelector((state: IState) => state.header[props.header]);
    const opacityRef = useRef(null);
    const dispatch = useDispatch();
	
    useEffect(() => {
        if (!open) return;
		
        toggleVisibility(opacityRef.current, true);
    }, [ open ]);
	
    const onToggle = (): void => {
        dispatch(setHeader(!open, props.header));
    };
	
    const onTransitionEnd = (): void => {
        toggleVisibility(opacityRef.current, open);
    };
	
    return (
        <>
            <StyledSliderContainer 
                open={open}
                rightDirection={props.rightDirection}>
                {props.children}
            </StyledSliderContainer>
            <StyledSliderOpacity 
                open={open}
                ref={opacityRef}
                onClick={onToggle}
                onTransitionEnd={onTransitionEnd} />
        </>
    );
};

/**
 * Toggles the visibility of the element.
 * @param {unknown} element - The element. 
 * @param {boolean} visible - If element visible. 
 */
const toggleVisibility = (element: unknown, visible = true): void => {
    if (!element) return;

    (element as HTMLElement).style.visibility = visible ? 
        'visible' : 'hidden';
};

export {
    Slider
};