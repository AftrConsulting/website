import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { StyledName, StyledLanguage, StyledLogoContainer } from './style';
import { useSaveStateBeforeLanguageChange } from 'src/components/header/utils/hook';
import { CustomImage } from 'src/components/customImage';
import { setLanguage } from 'src/context/actions/locale';
import { IState } from 'src/context/interfaces/IState';
import { setHeader } from 'src/context/actions/header';
import { configuration } from 'src/configuration';
import { MyLink } from 'src/components/link';

/**
 * The logo component.
 */
const Logo = (): ReactElement => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { language } = useSelector((state: IState) => state.locale);
    const [ saveState ] = useSaveStateBeforeLanguageChange();
	
    const toggleLanguage = (): void => {
        saveState();
        const newLanguage = language === 'en' ? 'fr' : 'en' as never; 
        dispatch(setLanguage(newLanguage));

        router.push(router.route, router.route, { locale: newLanguage, shallow: true });
    };
	
    const close = (): void => {
        dispatch(setHeader(false, 'sideMenu'));
    };
	
    return (
        <StyledLogoContainer>
            <MyLink href={'/'} onClick={close}>
                <StyledName>
                    <CustomImage src={configuration.general.logo} height={'40px'} width={'100px'} />
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