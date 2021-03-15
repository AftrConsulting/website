import React, { ReactElement } from 'react';
import { StyledMarkdownContainer } from './style';

interface IMarkdownContainerProps {
	children: {};
}

/**
 * The MarkdownContainer component. 
 * @param {IMarkdownContainerProps} props - The props.
 */
const MarkdownContainer = (props: IMarkdownContainerProps): ReactElement => (
    <StyledMarkdownContainer>
        {props.children}
    </StyledMarkdownContainer>
);

export {
    MarkdownContainer
};