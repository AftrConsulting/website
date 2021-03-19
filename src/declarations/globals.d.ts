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
			height?: string;
			width?: string;
			alt?: string;
		}
	}
}