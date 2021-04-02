import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { AMPAnalyticsScript } from 'src/componentsByPage/document/ampAnalyticsScript';
import { ThemeScript } from 'src/componentsByPage/document/themeScript';
import { configuration } from 'src/configuration';
import { globalStyles } from 'src/theme/global';

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
        <Html data-theme={configuration.defaults.themeName} data-primary={configuration.defaults.primary}>
            <Head>
                <ThemeScript />
                <style amp-custom={''} dangerouslySetInnerHTML={{ __html: this.props.styleHTML }} />
                <link rel={'shortcut icon'} href={'/static/images/logo.png'} />
                <link rel={'apple-touch-icon'} href={'/static/images/logo.png'} />
                <link rel={'manifest'} href={'/manifest.json'} />
                <meta name={'mobile-web-app-capable'} content={'yes'} />
                <meta name={'apple-touch-fullscreen'} content={'yes'} />
                <meta name={'apple-mobile-web-app-title'} content={'AftrConsulting'} />
                <meta name={'apple-mobile-web-app-capable'} content={'yes'} />
                <meta name={'apple-mobile-web-app-status-bar-style'} content={'default'} />
                <AMPAnalyticsScript />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );

}

export default MyDocument;