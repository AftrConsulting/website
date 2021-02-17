module.exports = {
    i18n: {
		locales: [ 'en', 'fr' ],
		defaultLocale: 'en',
	},
    webpack: (config, { isServer }) => {
        if (isServer) {
			require('./utils/generateSiteMap');
		}
	
		return config;
    }
};