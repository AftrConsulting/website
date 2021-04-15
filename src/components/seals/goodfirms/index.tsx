import React, { ReactElement } from 'react';
import { StyledContainer } from './style';
import { OutsideLink } from 'src/components/outsideLink';
import { SVGImage } from 'src/components/svgImage';
import { configuration } from 'src/configuration';

interface IGoodFirmsProps {
	disabled?: boolean;
}

/**
 * The GoodFirms component.
 * @param {IGoodFirmsProps} props - The props.
 */
const GoodFirms = (props: IGoodFirmsProps): ReactElement => (
    <StyledContainer>
        <OutsideLink href={configuration.general.goodfirms} disabled={props.disabled}>
            <SVGImage viewBox={'0 0 141 21'} href={'/static/images/seals/goodfirms.svg#main'} />
        </OutsideLink>
    </StyledContainer>
);

export {
    GoodFirms
};