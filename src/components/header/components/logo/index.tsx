import React, { ReactElement } from 'react';
import { StyledLogo, StyledName, StyledLanguage, StyledLogoContainer } from './style';
import { MyLink } from 'src/components/link';
import { useTranslation } from 'src/i18n';

interface ILogoProps {
	onBeforeLanguageChange?: () => void;
}

/**
 * The logo component.
 * @param {ILogoProps} props - The props.
 */
const Logo = (props: ILogoProps): ReactElement => {
    const { i18n } = useTranslation([ 'common' ]);
	
    const toggleLanguage = (): void => {
        props.onBeforeLanguageChange?.();
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };
	
    return (
        <StyledLogoContainer>
            <MyLink href={'/'}> 
                <StyledLogo />
                <StyledName>LOREM</StyledName>
            </MyLink>
            <StyledLanguage onClick={toggleLanguage} data-lang={'true'}>
                {i18n.language}
            </StyledLanguage>
        </StyledLogoContainer>
    );
};

export {
    Logo
};