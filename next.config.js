const { nextI18NextRewrites } = require('next-i18next/rewrites');
const Path = require('path');

const localeSubpaths = {
    fr: 'fr'
};

module.exports = {
    publicRuntimeConfig: {
        localeSubpaths
    },
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    webpack: (config, { isServer }) => {
        if (isServer) {
			require('./utils/generateSiteMap');
		}
		
		if (!isServer && config.mode === 'development') {
			const { I18NextHMRPlugin } = require('i18next-hmr/plugin');

			config.plugins.push(
				new I18NextHMRPlugin({
					localesDir: Path.resolve('./public/static/locales')
				})
			);
		}
	
		return config;
    }
};