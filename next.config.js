const { getMarkdownPages, getMarkdownPagesPaths } = require('./config/utils/markdown');
const { generateSiteMap } = require('./config/utils/generateSiteMap');
const { sitemapLocales } = require('./config/sitemap/index');
const { getRewrites } = require('./config/utils/sitemap');
const { headers } = require('./config/headers/index');

const markdownPages = getMarkdownPages();

module.exports = {
	env: {
		markdown: {
			pages: markdownPages,
			paths: getMarkdownPagesPaths(markdownPages)
		},
		sitemapLocales
	},
    i18n: {
		locales: [ 'en', 'fr' ],
		defaultLocale: 'en',
	},
	async rewrites () {
		return getRewrites(sitemapLocales);
	},
	async headers() {
		return headers;
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
	},
	poweredByHeader: false,
	reactStrictMode: true,
	future: {
		webpack5: true
	}
};