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