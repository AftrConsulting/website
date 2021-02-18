import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { StyledName, StyledLanguage, StyledLogoContainer } from './style';
import { setLanguage } from 'src/context/actions/locale';
import { IState } from 'src/context/interfaces/IState';
import { setHeader } from 'src/context/actions/header';
import { MyLink } from 'src/components/link';

interface ILogoProps {
	onBeforeLanguageChange?: () => void;
}

/**
 * The logo component.
 * @param {ILogoProps} props - The props.
 */
const Logo = (props: ILogoProps): ReactElement => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { language } = useSelector((state: IState) => state.locale);
	
    const toggleLanguage = (): void => {
        props.onBeforeLanguageChange?.();
        const newLanguage = language === 'en' ? 'fr' : 'en' as never; 
        dispatch(setLanguage(newLanguage));

        router.push(router.route, router.route, { locale: newLanguage });
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