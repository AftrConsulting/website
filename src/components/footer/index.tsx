import React, { ReactElement } from 'react';
import { StyledSection, StyledCopyright, StyledName } from './style';
import { Row } from 'src/components/row';

/**
 * The Footer component.
 */
const Footer = (): ReactElement => {
    return (
        <>
            <StyledSection>
                <Row>
                    <StyledName>
                        <img src={'/static/images/headerLogo.png'} />
                    </StyledName>
                </Row>
            </StyledSection>
            <StyledCopyright>
				© Copyright {new Date().getFullYear()}.
            </StyledCopyright>
        </>
    );
};

export {
    Footer
};