import React, { ReactElement } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StyledIcon } from './style';
import { configuration } from 'src/configuration';
import { Button } from 'src/components/button';
import { useTranslation } from 'src/i18n';

interface ICTAProps {
	className?: string;
	withIcon?: boolean;
}

/**
 * The CTA component.
 * @param {ICTAProps} props - The props.
 */
const CTA = (props: ICTAProps): ReactElement => {
    const { t } = useTranslation([ 'common' ]);
	
    return (
        <Button
            href={configuration.urls.consultation}
            target={'_blank'}
            className={props.className}
            title={t('bookConsultation')}>
            <span>{t('bookConsultation')}</span>
            {props.withIcon && 
				<StyledIcon icon={faArrowRight} />}
        </Button>
    );
};

export {
    CTA
};