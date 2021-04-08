import { IProcess } from 'src/interfaces/IProcess';

/**
 * Adds markdown.
 */
declare module '*.md';

/**
 * Adds the JSX.
 */
declare namespace JSX {
	interface IntrinsicElements {
		'amp-img': {
			src: string;
			layout?: string;
			height?: string;
			heights?: string;
			width?: string;
			alt?: string;
		};
		'amp-analytics': {
			children: {};
			type: string;
			'data-credentials': string;
		};
	}
}

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			markdown: {
				pages: {
					articles: {
						[key in string]: {
							en?: string;
							fr?: string;
						}
					};
					pages: {
						[key in string]: {
							en?: string;
							fr?: string;
						}
					};
				};
				paths: {
					articles: string[];
					pages: string[];
				};
			};
			sitemapLocales: {};
		}
	}
}