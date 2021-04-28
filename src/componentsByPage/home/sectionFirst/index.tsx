import React, { ReactElement } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { 
    StyledButton, StyledH1, StyledRow, StyleImgContainer, StyledSection, StyledSealsContainer,
    StyledPerksContainer, StyledUnderStars, StyledSubH1
} from './style';
import { TrustPilot } from 'src/components/seals/trustPilot';
import { SVGImage } from 'src/components/elements/svgImage';
import { GoodFirms } from 'src/components/seals/goodfirms';
import { Clutch } from 'src/components/seals/clutch';
import { Icon } from 'src/components/elements/icon';
import { useLocale } from 'src/localizations';

/**
 * The SectionFirst component.
 */
const SectionFirst = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <StyledRow>
                <div>
                    <StyledSubH1>{locale.pages.home.first.subHeading}</StyledSubH1>
                    <StyledH1>{locale.pages.home.first.heading}</StyledH1>
                    {getPerks(locale.pages.home.first.perks)}
                    <StyledUnderStars>{locale.pages.home.first.text2}</StyledUnderStars>
                    <StyledButton withIcon={true} />
                    {getSeals()}
                </div>
                <StyleImgContainer>
                    <div>
                        <SVGImage viewBox={'0 0 738.25 454.21'} href={'/static/images/home/first.svg#main'} />
                    </div>
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
 * Returns the seals.
 */
const getSeals = (): ReactElement => (
    <StyledSealsContainer>
        <TrustPilot disabled={true} />
        <Clutch disabled={true} />
        <GoodFirms disabled={true} />
    </StyledSealsContainer>
);

export {
    SectionFirst
};