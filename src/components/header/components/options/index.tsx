import React, { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { StyledTitle, StyledContainer, StyledSubTitle, StyledButton } from './style';
import { PrimaryColorsSwitch } from 'src/components/header/components/options/components/primaryColorsSwitch';
import { DarkModeSwitch } from 'src/components/header/components/options/components/darkModeSwitch';
import { Slider } from 'src/components/header/components/slider';
import { setLanguage } from 'src/context/actions/locale';
import { IState } from 'src/context/interfaces/IState';
import { configuration } from 'src/configuration';
import { context } from 'src/context';

/**
 * The Options component.
 */
const Options = (): ReactElement => {
    const router = useRouter();
    const header = useSelector((state: IState) => state.header);
    const { locale, language } = useSelector((state: IState) => state.locale);
    const dispatch = useDispatch();
	
    const toggleLanguage = (newLanguage: string) => (): void => {
        context.header = header;
        dispatch(setLanguage(newLanguage as never));
        router.push(router.route, router.route, { locale: newLanguage, shallow: true });
    };
	
    const onClose = (): void => {
        context.header = null;
    };
	
    return (
        <Slider header={'options'} rightDirection onClose={onClose}>
            <StyledTitle>{locale.global.options.title}</StyledTitle>
            <StyledContainer>
                <StyledSubTitle>{locale.global.options.darkMode}</StyledSubTitle>
                <DarkModeSwitch />
                <StyledSubTitle>{locale.global.options.color}</StyledSubTitle>
                <PrimaryColorsSwitch />
                <StyledSubTitle>{locale.global.options.languages}</StyledSubTitle>
                {configuration.languages.map((x: string, key: number): ReactElement => (
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