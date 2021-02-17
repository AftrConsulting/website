import React, { ReactElement } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { StyledSection, StyledExpertiseContainer } from './style';
import { SubTitle } from 'src/componentsByPage/home/subTitle';
import { Title } from 'src/componentsByPage/home/title';
import { useLocale } from 'src/localizations';
import { Icon } from 'src/components/icon';
import { Row } from 'src/components/row';

/**
 * The SectionExpertise component.
 */
const SectionExpertise = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <Row>
                <SubTitle>{locale.pages.home.expertises.subTitle}</SubTitle>
                <Title>{locale.pages.home.expertises.title}</Title>
                <StyledExpertiseContainer>
                    <div>
                        <Icon icon={faCheck} /> asdasd
                    </div>
                </StyledExpertiseContainer>
            </Row>
        </StyledSection>
    );
};

// /**
//  * Returns the expertises.
//  * @param {string[]} expertises - The expertises. 
//  */
// const getExpertises = (): ReactElement => {
//     console.log(expertises);
//     return (
//         <div>
//             <Icon icon={faCheck} /> asdasd
//         </div>
//     );
// };

export {
    SectionExpertise
};