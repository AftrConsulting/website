import React, { ReactElement } from 'react';
import { StyledTitle, StyledContainer, StyledSubTitle, StyledButton } from './style';
import { DarkModeSwitch } from 'src/components/header/components/darkModeSwitch';
import { Slider } from 'src/components/header/components/slider';
import { useTranslation, allLanguages } from 'src/i18n';

/**
 * The Options component.
 */
const Options = (): ReactElement => {
    const { i18n } = useTranslation([ 'common' ]);
	
    const toggleLanguage = (language: string) => (): void => {
        i18n.changeLanguage(language);
    };
	
    return (
        <Slider header={'options'} rightDirection>
            <StyledTitle>Options</StyledTitle>
            <StyledContainer>
                <StyledSubTitle>Dark mode</StyledSubTitle>
                <DarkModeSwitch />
                <StyledSubTitle>Languages</StyledSubTitle>
                {allLanguages.map((x: string, key: number): ReactElement => (
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