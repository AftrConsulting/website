// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextI18NextRewrites } = require('next-i18next/rewrites');

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
	
		return config;
    }
};