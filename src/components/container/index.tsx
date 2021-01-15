import React, { ReactElement } from 'react';
import { StyledContainer } from './style';
import { Header } from 'src/components/header';

interface IContainerProps {
	children: ReactElement | ReactElement[]
}

/**
 * The container component.
 * @param {IContainerProps} props - The props. 
 */
const Container = (props: IContainerProps): ReactElement => (
    <>
        <Header />
        <StyledContainer>
            {props.children}
        </StyledContainer>
    </>
);

export {
    Container
};