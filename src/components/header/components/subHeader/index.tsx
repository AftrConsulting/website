import React, { ReactElement } from 'react';
import { StyledLogoContainer, StyledSubHeaderContainer, StyledButtonContainer } from './style';
import { Button } from 'src/components/button';
import { configuration } from 'src/configuration';

/**
 * The SubHeader Component.
 */
const SubHeader = (): ReactElement => (
    <>
        <StyledLogoContainer>
				logo
        </StyledLogoContainer>
        <StyledSubHeaderContainer>
            <div>Services</div>
            <div>Portfolio</div>	
            <div>About Us</div>	
            <div>Blog</div>	
        </StyledSubHeaderContainer>
        <StyledButtonContainer>
            <Button 
                href={configuration.urls.consultation}
                target={'_blank'}
                title={'Book a Free Call'} />
        </StyledButtonContainer>
    </>
);

export {
    SubHeader
};