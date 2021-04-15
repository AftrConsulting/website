import React, { ReactElement } from 'react';
import { StyledContainer, StyledTitle } from './style';
import { OutsideLink } from 'src/components/outsideLink';
import { SVGImage } from 'src/components/svgImage';
import { configuration } from 'src/configuration';

interface IClutchProps {
	disabled?: boolean;
}

/**
 * The Clutch component.
 * @param {IClutchProps} props - The props.
 */
const Clutch = (props: IClutchProps): ReactElement => (
    <StyledContainer>
        <OutsideLink href={configuration.general.clutch} disabled={props.disabled}>
            <SVGImage viewBox={'0 0 88 25'} href={'/static/images/seals/clutch.svg#main'} />
            <StyledTitle>Firms that deliver</StyledTitle>
        </OutsideLink>
    </StyledContainer>
);

export {
    Clutch
};