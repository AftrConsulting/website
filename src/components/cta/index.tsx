import React, { ReactElement } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StyledIcon } from './style';
import { configuration } from 'src/configuration';
import { Button } from 'src/components/button';
import { useLocale } from 'src/localizations';

interface ICTAProps {
	className?: string;
	withIcon?: boolean;
}

/**
 * The CTA component.
 * @param {ICTAProps} props - The props.
 */
const CTA = (props: ICTAProps): ReactElement => {
    const locale = useLocale();
	
    return (
        <Button
            href={configuration.urls.consultation}
            target={'_blank'}
            className={props.className}
            title={locale.global.bookConsultation}>
            <span>{locale.global.bookConsultation}</span>
            {props.withIcon && 
				<StyledIcon icon={faArrowRight} />}
        </Button>
    );
};

export {
    CTA
};