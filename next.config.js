const { sitemapLocales } = require('./config/sitemap/index');
const { getRewrites, generateSiteMap } = require('./config/utils/sitemap');

module.exports = {
    i18n: {
		locales: [ 'en', 'fr' ],
		defaultLocale: 'en',
	},
	async rewrites () {
		return getRewrites(sitemapLocales);
	},
    webpack: (config, { isServer }) => {
        if (isServer) {
			generateSiteMap(sitemapLocales);
		}
	
		return config;
    }
};