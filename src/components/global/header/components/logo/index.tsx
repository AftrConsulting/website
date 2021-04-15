import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { StyledName, StyledLanguage, StyledLogoContainer } from './style';
import { useSaveStateBeforeLanguageChange } from 'src/components/global/header/utils/hook';
import { CustomImage } from 'src/components/elements/customImage';
import { setLanguage } from 'src/context/actions/locale';
import { IState } from 'src/context/interfaces/IState';
import { setHeader } from 'src/context/actions/header';
import { MyLink } from 'src/components/elements/link';
import { configuration } from 'src/configuration';
import { useLocale } from 'src/localizations';
import { isLandingPage } from 'src/utils';

interface ILogoProps {
	hideLanguage?: boolean;
}

/**
 * The logo component.
 * @param {ILogoProps} props - The props.
 */
const Logo = (props: ILogoProps): ReactElement => {
    const router = useRouter();
    const dispatch = useDispatch();
    const locale = useLocale();
    const isLanding = isLandingPage(router);
	
    const { language } = useSelector((state: IState) => state.locale);
    const [ saveState ] = useSaveStateBeforeLanguageChange();
	
    const toggleLanguage = (): void => {
        saveState();
        const newLanguage = language === 'en' ? 'fr' : 'en' as never; 
        dispatch(setLanguage(newLanguage));

        router.push(router.asPath, router.asPath, { locale: newLanguage, shallow: true });
    };
	
    const close = (): void => {
        dispatch(setHeader(false, 'sideMenu'));
    };
	
    return (
        <StyledLogoContainer hideLanguage={props.hideLanguage}>
            <MyLink href={'/'} onClick={close} title={locale.global.hrefs.logo} disabled={isLanding}>
                <StyledName>
                    <CustomImage 
                        src={configuration.general.imgs.headerLogo}
                        alt={'logo'}
                        height={'40px'} 
                        width={'100px'}
                        layout={'responsive'}
                        heights={'(max-width: 700px) 30px'} />
                </StyledName>
            </MyLink>
            {!props.hideLanguage && <StyledLanguage onClick={toggleLanguage}>
                {language}
            </StyledLanguage>}
        </StyledLogoContainer>
    );
};

export {
    Logo
};