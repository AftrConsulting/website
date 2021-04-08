/**
 * Returns the sitemap.
 * @param {{}} sitemap - The sitemap. 
 * @param {{}} obj - The obj. 
 */
const getSitemap = (sitemap, obj = {}) => {
    for (const i in sitemap) {
        if (sitemap[i].title) {
            if (sitemap[i].href) {
                obj[i] = sitemap[i];
            }
            continue;
        }
		
        getSitemap(sitemap[i], obj);
    }
	
    return obj;
};

/**
 * Returns the sitemap routes.
 * @param {{}} sitemap - The sitemap.
 */
const getSitemapRoutes = (sitemap) => {
    let routes = [];
	
    for (const language in sitemap) {
        routes = [
			...routes,
			...getSitemapRoutesForLanguage(sitemap, language)
		]
    }
	
    return routes;
};

/**
 * Returns the sitemap routes for a language.
 * @param {{}} sitemap - The sitemap.
 * @param {string} language - The language.
 */
const getSitemapRoutesForLanguage = (sitemap, language) => {
    const routes = [];
	
    for (const i in sitemap[language]) {
		const part = language === 'en' ?  '' : `/${language}`;
		const href = part + sitemap[language][i].href;

		routes.push({
			...sitemap[language][i],
			href
		});
	}
	
    return routes;
};


/**
 * Returns the rewrites.
 * @param {{}} sitemap - The sitemap.
 */
const getRewrites = (sitemap) => {
	const newSitemap = { ...sitemap };
	const enSitemap = { ...newSitemap.en };
	delete newSitemap.en;
	const rewrites = [];

	for (let lang in newSitemap) {
		for (let i in newSitemap[lang]) {
			if (newSitemap[lang][i].href !== enSitemap[i].href) {
				rewrites.push({
					source: `/${lang}${newSitemap[lang][i].href}`,
					destination: `/${lang}${enSitemap[i].href}`,
					locale: false
				});
			}
		}
	}
	
	return rewrites;
}

module.exports = {
	getSitemap,
	getSitemapRoutes,
	getRewrites,
	getSitemapRoutesForLanguage
};