import React, { ReactElement } from 'react';
import { StyledContainer } from './style';

interface IPropsSection {
	children?: {};
}

/**
 * The Section component.
 * @param {IPropsSection} props - The section.
 */
const Section = (props: IPropsSection): ReactElement => (
    <StyledContainer>
        {props.children}
    </StyledContainer>
);

export {
    Section
};