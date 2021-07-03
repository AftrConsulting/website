import React, { ReactElement } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StyledContainer, StyledTitle, StyledBold, StyledReviewsContainer } from './style';
import { OutsideLink } from 'src/components/elements/outsideLink';
import { SVGImage } from 'src/components/elements/svgImage';
import { Icon } from 'src/components/elements/icon';
import { configuration } from 'src/configuration';
import { useLocale } from 'src/localizations';

interface IGoogleProps {
	disabled?: boolean;
}

/**
 * The Google component.
 * @param {IGoogleProps} props - The props.
 */
const Google = (props: IGoogleProps): ReactElement => {
    const locale = useLocale();
	
    return (
        <StyledContainer>
            <OutsideLink href={configuration.general.google.maps} disabled={props.disabled}>
                <SVGImage viewBox={'0 0 1000 328.56'} href={'/static/images/seals/google.svg#main'} />
                <StyledReviewsContainer>
                    <Icon icon={faStar} />
                    <Icon icon={faStar} />
                    <Icon icon={faStar} />
                    <Icon icon={faStar} />
                    <Icon icon={faStar} />
                </StyledReviewsContainer>
                <StyledTitle><StyledBold>5</StyledBold> {locale.global.landing.first.googleReview}</StyledTitle>
            </OutsideLink>
        </StyledContainer>
    );
};

export {
    Google
};