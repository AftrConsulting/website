import React, { ReactElement } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { 
    StyledButton, StyledH1, StyledRow, StyleImgContainer, StyledSection, StyledSealsContainer,
    StyledPerksContainer, StyledUnderStars, StyledSubH1
} from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { TrustPilot } from 'src/components/seals/trustPilot';
import { GoodFirms } from 'src/components/seals/goodfirms';
import { Clutch } from 'src/components/seals/clutch';
import { Icon } from 'src/components/elements/icon';
import { useLocale } from 'src/localizations';

interface ISectionFirstProps {
	heading: string;
	image?: string;
}

/**
 * The SectionFirst component.
 * @param {ISectionFirstProps} props - The props.
 */
const SectionFirst = (props: ISectionFirstProps): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <StyledRow>
                <div>
                    <StyledSubH1>{locale.global.landing.first.subHeading}</StyledSubH1>
                    <StyledH1>{props.heading}</StyledH1>
                    {getPerks(locale.global.landing.first.perks)}
                    <StyledUnderStars>{locale.global.landing.first.text2}</StyledUnderStars>
                    <StyledButton withIcon={true} />
                    {getSeals()}
                </div>
                <StyleImgContainer>
                    <div>
                        <CustomImage
                            width={'450px'}
                            height={'400px'}
                            alt={props.heading}
                            src={`/static/images/first/${props.image || '1'}.jpg`} />
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