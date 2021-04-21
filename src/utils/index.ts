import { getAlternateLanguages } from "src/components/global/seo";
import { configuration } from "src/configuration";
import { NextRouter } from 'next/router';

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
	'name': configuration.general.company,
	'sameAs': [
		configuration.general.github,
		configuration.general.facebook,
		configuration.general.linkedIn
	],
	'url': configuration.general.baseUrl
});

/**
 * Returns if page is landing page.
 * @param {NextRouter} router - The router. 
 */
const isLandingPage = (router: NextRouter): boolean => {
	return router.route.indexOf('/landing/') !== -1;
}

/**
 * Returns the phone link.
 */
const getPhoneLink = (): string => {
    return configuration.general.phone
        .replace('(', '')
        .replace(')', '')
        .replace('+', '')
        .replace('-', '')
        .replace(/ /g, '');
};

/**
 * If page has only one language.
 * @param {NextRouter} router - The router.
 * @param {string} locale - The locale. 
 */
const redirectToLanguage = (router: NextRouter, locale: string): void => {
	const path = getAlternateLanguages(router).length === 2 ? 
		'/' : router.asPath;
	
	router.push(path, path, { locale, shallow: true });
}

export {
	getStructuredData,
	isProduction,
	isLandingPage,
	getPhoneLink,
	redirectToLanguage
}