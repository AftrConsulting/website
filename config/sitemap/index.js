const { getSitemap } = require('../utils/sitemap');
const { frSitemap } = require('../sitemap/fr');
const { enSitemap } = require('../sitemap/en');

/**
 * The sitemap locales.
 */
const sitemapLocales = {
    en: getSitemap(enSitemap),
    fr: getSitemap(frSitemap)
};

module.exports = {
    sitemapLocales
};