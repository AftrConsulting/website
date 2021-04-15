import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import dayjs, { extend, locale } from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import fr from 'dayjs/locale/fr';
import { useRouter } from 'next/router';
import { StyledMarkdownContainer, StyledMetaData } from './style';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { Title } from 'src/components/title';
import { Seo } from 'src/components/seo';

interface IMarkdownContainerProps extends IMarkdownArticleProps {
	hasAmp?: boolean;
}
/**
 * The MarkdownContainer component. 
 * @param {IMarkdownContainerProps} props - The props.
 */
const MarkdownContainer = (props: IMarkdownContainerProps): ReactElement => {
    const router = useRouter();
    const author = props.author || 'admin';
    const date = getDate(props.date, router.locale);

    return (
        <StyledMarkdownContainer>
            <Title title={props.title} />
            <StyledMetaData>{author} • {date}</StyledMetaData>
            <Seo {...props} />
            <ReactMarkdown>{props.source || ''}</ReactMarkdown>
        </StyledMarkdownContainer>
    );
};

/**
 * Returns the localized date.
 * @param {string} date - The date.
 * @param {string} language - The language.
 */
const getDate = (date?: string, language?: string): string => {
    if (!date) return '';
	
    locale(fr);
    extend(localizedFormat);
	
    return dayjs(date).locale(language as string).format('LL');
};

export {
    MarkdownContainer
};