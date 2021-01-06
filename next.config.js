// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
    fr: 'fr'
};

module.exports = {
    publicRuntimeConfig: {
        localeSubpaths
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    rewrites: async () => nextI18NextRewrites(localeSubpaths)
};