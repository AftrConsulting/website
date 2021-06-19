import React, { ReactElement } from 'react';
import { StyledImgContainer, StyledSideBySide, StyledSubTitle, StyledOutsideLink, StyledParagraph } from './style';
import { ISectionProject } from 'src/componentsByPage/portfolio/sectionProjects/interfaces/ISectionProject';
import { CustomImage } from 'src/components/elements/customImage';
import { Paragraph } from 'src/components/elements/paragraph';
import { Title } from 'src/components/landing/title';
import { useLocale } from 'src/localizations';

/**
 * The SectionProjects component.
 */
const SectionProjects = (): ReactElement => {
    const locale = useLocale();
    const { portfolio } = locale.pages;

    return (
        <>
            <StyledParagraph>{portfolio.body}</StyledParagraph>
            {portfolio.projects.map(x => getProject(x, portfolio.link))}
        </>
    );
};

/**
 * Returns the project.
 * @param {ISectionProject} project - The project.
 * @param {string} link - The link.
 */
const getProject = (project: ISectionProject, link: string): ReactElement => (
    <StyledSideBySide key={project.title}>
        <div>
            <StyledImgContainer>
                <CustomImage 
                    alt={project.title}
                    title={project.title}
                    src={`/static/images/portfolio/${project.project}.png`} />
            </StyledImgContainer> 
        </div>
        <div>
            <StyledSubTitle>{project.subTitle}</StyledSubTitle>
            <Title marginBottom={'20px'}>{project.title}</Title>
            <Paragraph>{project.description}</Paragraph>
            {project.href && 
				<StyledOutsideLink href={project.href} >{link}</StyledOutsideLink>}
        </div>
    </StyledSideBySide>
);

export {
    SectionProjects
};