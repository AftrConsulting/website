import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { readFileSync } from 'fs';
import { MarkdownContainer } from 'src/components/markdownContainer';
import { IStaticProps } from 'src/interfaces/IStaticProps';
import { Container } from 'src/components/container';
import { IProcess } from 'src/interfaces/IProcess';
import { Row } from 'src/components/row';

interface IArticleProps {
	article: string;
	name: string;
}

/**
 * The Article component.
 * @param {IArticleProps} props - The props.
 */
const Article = (props: IArticleProps): ReactElement => (
    <Container>
        <Row>
            <MarkdownContainer>
                <ReactMarkdown source={props.article} />
            </MarkdownContainer>
        </Row>
    </Container>
);

/**
 * Returns the static paths.
 */
export const getStaticPaths = (): {} => {
    return {
        fallback: true,  
        paths: Object.keys(getArticles()).map(x => `/blog/${x}`)
    };
};

/**
 * Returns the  static props.
 * @param {IStaticProps} context - The context. 
 */
export const getStaticProps = async (context: IStaticProps): Promise<{}> => {
    const article = getArticles()[context.params.name];

    if (!article || !article[context.locale]) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            article: readFileSync(article[context.locale], 'utf8'),
            name: context.params.name 
        }
    };
};

/**
 * Returns the articles.
 */
const getArticles = (): {} => {
    return (process.env as {} as IProcess).pages.articles;
};

export default Article;