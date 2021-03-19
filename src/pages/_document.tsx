import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { globalStyles } from 'src/theme/global';
import { getThemeHTML } from 'src/theme/utils';

interface IMyDocumentProps {
    styleHTML: string;
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
		
        const styleTag = sheet.getStyleElement();
        // @ts-ignore
        const styleHTML = `${styleTag[0].props.dangerouslySetInnerHTML.__html} ${globalStyles}`;

        return { 
            ...page, 
            styleHTML
        } as unknown as Promise<DocumentInitialProps>;
    }

    /**
     * The render method.
     */
    public render = (): ReactElement => (
        <Html>
            <Head>
                <script dangerouslySetInnerHTML={{ __html: getThemeHTML() }} />
                <style amp-custom={''} dangerouslySetInnerHTML={{ __html: this.props.styleHTML }} />
                <link rel="shortcut icon" href="/static/images/logo.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );

}

export default MyDocument;