import React, { ReactElement } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { 
    StyledSection, StyledCTA, StyledParagraph, StyledSeparator
} from './style'; import { SubTitle } from 'src/componentsByPage/home/subTitle';
import { Title } from 'src/componentsByPage/home/title';
import { useLocale } from 'src/localizations';
import { SideBySide } from 'src/componentsByPage/home/sideBySide';
import { Icon } from 'src/components/icon';

/**
 * The SectionBookConsultation component.
 */
const SectionBookConsultation = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <SideBySide>
                <div>
                    <SubTitle>{locale.pages.home.expertises.subTitle}</SubTitle>
                    <Title>{locale.pages.home.expertises.title}</Title>
                    <Icon icon={faStar} />
                    <Icon icon={faStar} />
                    <Icon icon={faStar} />
                    <Icon icon={faStar} />
                    <Icon icon={faStar} />
                </div>
                <div>
                    <StyledParagraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ex nec arcu rhoncus aliquet. 
						Nullam congue magna id viverra sodales. Nam laoreet tincidunt elementum. Fusce dapibus ipsum in
						 mauris sagittis, in suscipit velit tempus. Quisque rhoncus tempor quam, eu tempus ex ullamcorper non.
                    </StyledParagraph>
                    <StyledCTA withIcon={true} />
                </div>
            </SideBySide>
        </StyledSection>
    );
};

export {
    SectionBookConsultation
};