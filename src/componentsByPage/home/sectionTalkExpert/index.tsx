import React, { ReactElement } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StyledSection, StyledCenter, StyledButton } from './style';
import { Paragraph } from 'src/componentsByPage/home/paragraph';
import { SubTitle } from 'src/componentsByPage/home/subTitle';
import { Title } from 'src/componentsByPage/home/title';
import { useLocale } from 'src/localizations';
import { Icon } from 'src/components/icon';

/**
 * The SectionTalkExpert component.
 */
const SectionTalkExpert = (): ReactElement => {
    const locale = useLocale();

    const openWidget = (): void => {
        window.Tawk_API?.maximize();
    };
	
    return (
        <StyledSection>
            <StyledCenter>
                <div>
                    <SubTitle>{locale.pages.home.talkExpert.subTitle}</SubTitle>
                    <Title marginBottom={'20px'}>{locale.pages.home.talkExpert.title}</Title>
                    <Paragraph>{locale.pages.home.talkExpert.description}</Paragraph>
                </div>
                <div>
                    <StyledButton onClick={openWidget}>
                        {locale.pages.home.talkExpert.button}
                        <Icon icon={faArrowRight} />
                    </StyledButton>
                </div>
            </StyledCenter>
        </StyledSection>
    );
};

export {
    SectionTalkExpert
};