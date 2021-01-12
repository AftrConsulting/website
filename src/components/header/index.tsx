import React, { ReactElement } from 'react';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../icon';
import { StyledHeader, StyledButton, StyledHeaderRow } from './style';

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