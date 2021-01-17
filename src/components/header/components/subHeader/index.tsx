import React, { ReactElement } from 'react';
import { StyledLogoContainer, StyledSubHeaderContainer, StyledButtonContainer, StyledLogo } from './style';
import { SubHeaderItem } from 'src/components/header/components/subHeader/components/subHeaderItem';
import { subHeaderItems } from 'src/data/subHeaderItems';
import { configuration } from 'src/configuration';
import { Button } from 'src/components/button';
import { Link } from 'src/i18n';

/**
 * The SubHeader Component.
 */
const SubHeader = (): ReactElement => (
    <>
        <StyledLogoContainer>
            <Link href={'/'}>
                <StyledLogo />
            </Link>
        </StyledLogoContainer>
        <StyledSubHeaderContainer>
            {subHeaderItems.map((x, key) => (
                <SubHeaderItem key={key} element={x} />
            ))}
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