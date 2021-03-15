const { generateSiteMap } = require('./config/utils/generateSiteMap');
const { sitemapLocales } = require('./config/sitemap/index');
const { getRewrites } = require('./config/utils/sitemap');

module.exports = {
    i18n: {
		locales: [ 'en', 'fr' ],
		defaultLocale: 'en',
	},
	async rewrites () {
		return getRewrites(sitemapLocales);
	},
    webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader'
		});

        if (isServer) {
			generateSiteMap(sitemapLocales);
		}
	
		return config;
    }
};