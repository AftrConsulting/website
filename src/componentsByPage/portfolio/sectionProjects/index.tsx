import React, { ReactElement } from 'react';
import { StyledImgContainer, StyledSideBySide } from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { SubTitle } from 'src/components/landing/subTitle';
import { Paragraph } from 'src/components/elements/paragraph';
import { Title } from 'src/components/landing/title';

/**
 * The SectionProjects component.
 */
const SectionProjects = (): ReactElement => {
    return (
        <StyledSideBySide>
            <div>
                <StyledImgContainer>
                    <CustomImage 
                        alt={'psyhelp'} 
                        src={'/static/images/portfolio/psyhelp.png'} />
                </StyledImgContainer> 
            </div>
            <div>
                <SubTitle>website design</SubTitle>
                <Title marginBottom={'20px'}>Centre de services psychologiques</Title>
                <Paragraph>
					Everything starts here. Together, we will create a custom-tailored flexible plan that will 
					take all your requirements and questions into account. Also, you will get a quote adjusted to your budget.
                </Paragraph>
            </div>
        </StyledSideBySide>
    );
};

export {
    SectionProjects
};