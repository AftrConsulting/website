import React, { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { StyledTitle, StyledContainer, StyledSubTitle, StyledButton } from './style';
import { PrimaryColorsSwitch } from 'src/components/header/components/options/components/primaryColorsSwitch';
import { DarkModeSwitch } from 'src/components/header/components/options/components/darkModeSwitch';
import { useSaveStateBeforeLanguageChange } from 'src/components/header/utils/hook';
import { Slider } from 'src/components/header/components/slider';
import { setLanguage } from 'src/context/actions/locale';
import { IState } from 'src/context/interfaces/IState';
import { locales } from 'src/localizations';

/**
 * The Options component.
 */
const Options = (): ReactElement => {
    const router = useRouter();
    const [ saveState, removeState ] = useSaveStateBeforeLanguageChange();
    const { locale, language } = useSelector((state: IState) => state.locale);
    const dispatch = useDispatch();
	
    const toggleLanguage = (newLanguage: string) => (): void => {
        saveState();
        dispatch(setLanguage(newLanguage as never));
        router.push(router.route, router.route, { locale: newLanguage, shallow: true });
    };
	
    return (
        <Slider header={'options'} rightDirection onClose={removeState}>
            <StyledTitle>{locale.global.options.title}</StyledTitle>
            <StyledContainer>
                <StyledSubTitle>{locale.global.options.darkMode}</StyledSubTitle>
                <DarkModeSwitch />
                <StyledSubTitle>{locale.global.options.color}</StyledSubTitle>
                <PrimaryColorsSwitch />
                <StyledSubTitle>{locale.global.options.languages}</StyledSubTitle>
                {Object.keys(locales).map((x: string, key: number): ReactElement => (
                    <StyledButton 
                        onClick={toggleLanguage(x)} 
                        active={language === x} 
                        key={key}>
                        {x}
                    </StyledButton>
                ))}
            </StyledContainer>
        </Slider>
    );
};

export {
    Options
};