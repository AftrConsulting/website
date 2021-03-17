import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { configuration } from 'src/configuration';

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
	 * Returns the theme HTML.
	 */
	private getThemeHTML = (): string => (
	    `(function() {
			var theme = localStorage.getItem('theme');

			if (theme !== 'dark' && theme !== 'light') {
				theme = '${configuration.defaults.themeName}';
			}

			document.documentElement.setAttribute('data-theme', theme);
		})();`
	);

    /**
     * The render method.
     */
    public render = (): ReactElement => (
        <Html>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: this.getThemeHTML()
                    }}
                />
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