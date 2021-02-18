import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledName, StyledLanguage, StyledLogoContainer } from './style';
import { setHeader } from 'src/context/actions/header';
import { MyLink } from 'src/components/link';
import { IState } from 'src/context/interfaces/IState';
import { setLanguage } from 'src/context/actions/locale';

/**
 * The logo component.
 */
const Logo = (): ReactElement => {
    const { language } = useSelector((state: IState) => state.locale);
    const dispatch = useDispatch();
	
    const toggleLanguage = (): void => {
        dispatch(
            setLanguage(language === 'en' ? 'fr' : 'en' as never)
        );
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
                {language}
            </StyledLanguage>
        </StyledLogoContainer>
    );
};

export {
    Logo
};