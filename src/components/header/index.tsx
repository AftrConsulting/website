import React, { ReactElement } from 'react';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';
import { StyledHeader, StyledButton, StyledHeaderRow } from './style';
import { Icon } from 'src/components/icon';

/**
 * The Header component.
 */
const Header = (): ReactElement => {
    return (
        <StyledHeader>
            <StyledHeaderRow>
                <StyledButton>
                    <Icon icon={faBars} />
                </StyledButton>
                <div>asd</div>
                <StyledButton>
                    <Icon icon={faCog} />
                </StyledButton>
            </StyledHeaderRow>
        </StyledHeader>
    );
};

export {
    Header
};