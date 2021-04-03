import { configuration } from "src/configuration";

/**
 * Returns if is production.
 */
const isProduction = (): boolean => process.env.NODE_ENV === 'production';

/**
 * Returns the structured data.
 */
const getStructuredData = (): string => JSON.stringify({
	'@context': 'https://schema.org',
	'@type': 'Organization',
	
	'contactPoint': {
		'@type': 'ContactPoint',
		'contactType': 'customer support',
		'email': configuration.general.email
	},
	'logo': `${configuration.general.baseUrl}${configuration.general.imgs.logo}`,
	'name': configuration.general.name,
	'sameAs': [
		configuration.general.github,
		configuration.general.facebook,
		configuration.general.linkedIn
	],
	'url': configuration.general.baseUrl
});

export {
	getStructuredData,
	isProduction
}