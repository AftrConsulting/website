import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface IMyDocumentProps {
    styleTags: string;
}

class MyDocument extends Document<IMyDocumentProps> {

    /**
     * Returns the initial props.
     * @param {DocumentContext} ctx - The context. 
     */
    public static getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const page = ctx.renderPage((App): any => (props: {}): unknown =>
            sheet.collectStyles(<App {...props} />)
        );
        const styleTags = sheet.getStyleElement();

        return { 
            ...page, 
            styleTags
        } as unknown as Promise<DocumentInitialProps>;
    }

    /**
     * The render method.
     */
    public render = (): ReactElement => (
        <Html>
            <Head>
                <link rel="shortcut icon" href="/static/images/logo.png" />
                {this.props.styleTags}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );

}

export default MyDocument;