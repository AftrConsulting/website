import React, { ReactElement } from 'react';
import { StyledLogoContainer, StyledSubHeaderContainer, StyledButtonContainer, StyledLogo, StyledLanguage, StyledName } from './style';
import { SubHeaderItem } from 'src/components/header/components/subHeader/components/subHeaderItem';
import { subHeaderItems } from 'src/data/subHeaderItems';
import { configuration } from 'src/configuration';
import { Button } from 'src/components/button';
import { Link, useTranslation } from 'src/i18n';

/**
 * The SubHeader Component.
 */
const SubHeader = (): ReactElement => {
    const { i18n } = useTranslation([ 'common' ]);
	
    const toggleLanguage = (): void => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };
	
    return (
        <>
            <StyledLogoContainer>
                <Link href={'/'}>
                    <StyledLogo />
                </Link>
                <Link href={'/'}>
                    <StyledName>LOREM</StyledName>
                </Link>
                <StyledLanguage onClick={toggleLanguage}>
                    {i18n.language}
                </StyledLanguage>
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
};

export {
    SubHeader
};