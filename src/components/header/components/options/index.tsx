import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { StyledTitle, StyledContainer, StyledSubTitle, StyledButton } from './style';
import { PrimaryColorsSwitch } from 'src/components/header/components/options/components/primaryColorsSwitch';
import { DarkModeSwitch } from 'src/components/header/components/options/components/darkModeSwitch';
import { Slider } from 'src/components/header/components/slider';
import { IState } from 'src/context/interfaces/IState';
import { configuration } from 'src/configuration';
import { useTranslation } from 'src/i18n';
import { context } from 'src/context';

/**
 * The Options component.
 */
const Options = (): ReactElement => {
    const header = useSelector((state: IState) => state.header);
    const { i18n, t } = useTranslation([ 'common' ]);
	
    const toggleLanguage = (language: string) => (): void => {
        context.header = header;
        i18n.changeLanguage(language);
    };
	
    const onClose = (): void => {
        context.header = null;
    };
	
    return (
        <Slider header={'options'} rightDirection onClose={onClose}>
            <StyledTitle>{t('optionsTitle')}</StyledTitle>
            <StyledContainer>
                <StyledSubTitle>{t('optionsDarkMode')}</StyledSubTitle>
                <DarkModeSwitch />
                <StyledSubTitle>{t('optionsColor')}</StyledSubTitle>
                <PrimaryColorsSwitch />
                <StyledSubTitle>{t('optionsLanguages')}</StyledSubTitle>
                {configuration.languages.map((x: string, key: number): ReactElement => (
                    <StyledButton 
                        onClick={toggleLanguage(x)} 
                        active={i18n.language === x} 
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