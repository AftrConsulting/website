import React, { ReactElement } from 'react';
import { StyledContainer, StyledTitle, StyledBold, StyledLogo, StyledFiveStars } from './style';
import { OutsideLink } from 'src/components/elements/outsideLink';
import { configuration } from 'src/configuration';

interface ITrustPilotProps {
	disabled?: boolean;
}

/**
 * The TrustPilot component.
 * @param {ITrustPilotProps} props - The props.
 */
const TrustPilot = (props: ITrustPilotProps): ReactElement => (
    <StyledContainer>
        <OutsideLink href={configuration.general.trustpilot} disabled={props.disabled}>
            <div>
                <StyledLogo viewBox={'0 0 126 31'} href={'/static/images/seals/trustpilot-logo.svg#main'} />
            </div>
            <StyledFiveStars viewBox={'0 0 512 96'} href={'/static/images/seals/stars-5.svg#main'} />
            <StyledTitle>TrustScore <StyledBold>4.4</StyledBold></StyledTitle>
        </OutsideLink>
    </StyledContainer>
);

export {
    TrustPilot
};