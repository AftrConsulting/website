const XmlBeautify = require('xml-beautify');
const fs = require('fs');
const { DOMParser } = require('xmldom');

/**
 * Returns the sitemap.
 * @param {{}} sitemap - The sitemap. 
 * @param {{}} obj - The obj. 
 */
const getSitemap = (sitemap, obj = {}) => {
    for (const i in sitemap) {
        if (sitemap[i].title) {
            if (sitemap[i].href) {
                obj[i] = sitemap[i].href;
            }
            continue;
        }
		
        getSitemap(sitemap[i], obj);
    }
	
    return obj;
};

/**
 * Returns the sitemap hrefs.
 * @param {{}} sitemap - The sitemap.
 */
const getSitemapHrefs = (sitemap) => {
    const urls = [];
	
    for (const lang in sitemap) {
        for (const i in sitemap[lang]) {
            const language = lang === 'en' ?  '' : `/${lang}`;
            urls.push(language + sitemap[lang][i]);
        }
    }
	
    return urls;
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
			if (newSitemap[lang][i] !== enSitemap[i]) {
				rewrites.push({
					source: `/${lang}${newSitemap[lang][i]}`,
					destination: `/${lang}${enSitemap[i]}`,
					locale: false
				});
			}
		}
	}
	
	return rewrites;
}

/**
 * Generates the site map.
 * @param {{}} sitemap - The sitemap.
 */
const generateSiteMap = async (sitemap) => {
	const ENV = 'https://aftrconsulting.com';
	const hrefs = getSitemapHrefs(sitemap);

	let sitemapXML = `
		<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
			${hrefs.map(href => `
				<url>
					<loc>${`${ENV}${href}`}</loc>
					<priority>${href.priority || 1}</priority>
				</url>
			`).join('')}
		</urlset>
	`;

	sitemapXML = new XmlBeautify({ parser: DOMParser }).beautify(sitemapXML);

	fs.writeFileSync('public/sitemap.xml', sitemapXML);
}

module.exports = {
	getSitemap,
	getSitemapHrefs,
	getRewrites,
	generateSiteMap
};