import React, { ReactElement } from 'react';
import { StyledSection, StyledCopyright, StyledName, StyledSeparator } from './style';
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
                    <StyledSeparator />
                    <div>
                        <a href={'mailto:info@aftrconsulting.com'}>info@aftrconsulting.com</a>
                    </div>
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