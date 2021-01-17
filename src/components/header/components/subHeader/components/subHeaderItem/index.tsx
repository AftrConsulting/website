import React, { ReactElement } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { StyledSubHeaderItemContainer } from './style';
import { ISubHeaderItem } from 'src/data/interfaces/ISubHeaderItem';
import { Icon } from 'src/components/icon';
import { Link } from 'src/i18n';

interface ISubHeaderItemProps {
	element: ISubHeaderItem;
}

/**
 * The SubHeaderItem Component.
 * @param {ISubHeaderItemProps} props - The props.
 */
const SubHeaderItem = (props: ISubHeaderItemProps): ReactElement => {
    if (props.element.subItems) {
        return (
            <StyledSubHeaderItemContainer>
                <div>
                    {props.element.title}	
                    <Icon icon={faChevronDown} />
                </div>
            </StyledSubHeaderItemContainer>
        );
    }
	
    return (
        <StyledSubHeaderItemContainer>
            {props.element.href ? (
                <Link href={props.element.href}>
                    {props.element.title}
                </Link>
            ) : <div>{props.element.title}</div>}
        </StyledSubHeaderItemContainer>
    );
};

export {
    SubHeaderItem
};