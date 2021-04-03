import React, { ReactElement } from 'react';
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { 
    StyledButton, StyledH1, StyledRow, StyleImgContainer, StyledSection, StyledStarsContainer, 
    StyledPerksContainer, StyledUnderStars, StyledParagraph
} from './style';
import { FirstSectionSVG } from 'src/componentsImg/firstSectionSVG';
import { SpanText } from 'src/components/spanText';
import { useLocale } from 'src/localizations';
import { Icon } from 'src/components/icon';

/**
 * The SectionFirst component.
 */
const SectionFirst = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <StyledRow>
                <div>
                    <StyledH1>
                        <SpanText html={locale.pages.home.first.heading} />
                    </StyledH1>
                    <StyledParagraph>
                        <SpanText html={locale.pages.home.first.text1} />
                    </StyledParagraph>
                    {getPerks(locale.pages.home.first.perks)}
                    {getFiveStars()}
                    <StyledUnderStars>{locale.pages.home.first.text2}</StyledUnderStars>
                    <StyledButton withIcon={true} />
                </div>
                <StyleImgContainer>
                    <FirstSectionSVG />
                </StyleImgContainer>
            </StyledRow>
        </StyledSection>
    );
};

/**
 * Returns the perks.
 * @param {string[]} perks - The perks. 
 */
const getPerks = (perks: string[]): ReactElement => (
    <StyledPerksContainer>
        {perks.map((x, key): ReactElement => (
            <li key={key}>
                <Icon icon={faCheck} /> {x}
            </li>
        ))}
    </StyledPerksContainer>
);

/**
 * Returns the five stars.
 */
const getFiveStars = (): ReactElement => (
    <StyledStarsContainer>
        <Icon icon={faStar} />
        <Icon icon={faStar} />
        <Icon icon={faStar} />
        <Icon icon={faStar} />
        <Icon icon={faStar} />
    </StyledStarsContainer>
);

export {
    SectionFirst
};