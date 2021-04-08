import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import { readFileSync } from 'fs';
import { MarkdownContainer } from 'src/components/markdownContainer';
import { IStaticProps } from 'src/interfaces/IStaticProps';
import { getArticlesPaths } from 'config/utils/sitemap';
import { Container } from 'src/components/container';
import { IProcess } from 'src/interfaces/IProcess';
import { Row } from 'src/components/row';

interface IArticleProps {
	articles: {};
	name: string;
	redirectLanguageToIndex: boolean;
}

/**
 * The Article component.
 * @param {IArticleProps} props - The props.
 */
const Article = (props: IArticleProps): ReactElement => {
    const router = useRouter();

    let source = null;
    if (props.articles) {
        source = props.articles[router.locale as string];
    }

    return (
        <Container redirectLanguageToIndex={props.redirectLanguageToIndex}>
            <Row>
                <MarkdownContainer>
                    <ReactMarkdown source={source} />
                </MarkdownContainer>
            </Row>
        </Container>
    );
};

/**
 * Returns the static paths.
 */
export const getStaticPaths = (): {} => ({
    fallback: false,  
    paths: getArticlesPaths(getArticles())
});

/**
 * Returns the  static props.
 * @param {IStaticProps} context - The context. 
 */
export const getStaticProps = async (context: IStaticProps): Promise<{}> => {
    const articles = getArticles()[context.params.name];
	
    if (!articles?.[context.locale]) {
        return {
            notFound: true
        };
    }

    for (const i in articles) {
        articles[i] = readFileSync(articles[i], 'utf8');
    }

    return {
        props: {
            articles,
            name: context.params.name,
            redirectLanguageToIndex: Object.keys(articles).length === 1
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