import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { StyledName, StyledLanguage, StyledLogoContainer } from './style';
import { setHeader } from 'src/context/actions/header';
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
    const dispatch = useDispatch();
	
    const toggleLanguage = (): void => {
        props.onBeforeLanguageChange?.();
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };
	
    const close = (): void => {
        dispatch(setHeader(false, 'sideMenu'));
    };
	
    return (
        <StyledLogoContainer>
            <MyLink href={'/'} onClick={close}>
                <StyledName>
                    <img src={'/static/images/headerLogo.png'} />
                </StyledName>
            </MyLink>
            <StyledLanguage onClick={toggleLanguage}>
                {i18n.language}
            </StyledLanguage>
        </StyledLogoContainer>
    );
};

export {
    Logo
};