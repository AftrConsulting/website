import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import { MarkdownContainer } from 'src/components/markdownContainer';
import { IStaticProps } from 'src/interfaces/IStaticProps';
import { Container } from 'src/components/container';
import { Row } from 'src/components/row';

interface IArticleProps {
	articles: {
		[key in string]: {
			source: string;
		}
	};
	name: string;
	redirectLanguageToIndex: boolean;
}

/**
 * The Article component.
 * @param {IArticleProps} props - The props.
 */
const Article = (props: IArticleProps): ReactElement => {
    const router = useRouter();

    let article = null;
    if (props.articles) {
        article = props.articles[router.locale as string];
    }

    return (
        <Container redirectLanguageToIndex={props.redirectLanguageToIndex}>
            <Row>
                <MarkdownContainer>
                    <ReactMarkdown source={article?.source} />
                </MarkdownContainer>
            </Row>
        </Container>
    );
};

/**
 * Returns the static paths.
 */
export const getStaticPaths = (): {} => {
    return {
        fallback: false,  
        paths: process.env.markdown.paths.articles
    };
};

/**
 * Returns the  static props.
 * @param {IStaticProps} context - The context. 
 */
export const getStaticProps = async (context: IStaticProps): Promise<{}> => {
    const articles = process.env.markdown.pages.articles[context.params.name];
	
    if (!articles?.[context.locale]) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            articles,
            name: context.params.name,
            redirectLanguageToIndex: Object.keys(articles).length === 1
        }
    };
};

export default Article;