const XmlBeautify = require('xml-beautify');
const { DOMParser } = require('xmldom');
const fs = require('fs');

const ENV = 'https://personal.jasson2788.vercel.app';

/**
 * Generates the site map.
 */
const generateSiteMap = async () => {
	const pages = [
		{ route: '/', priority: 1 },
		{ route: '/fr/', priority: 1 },
		{ route: '/portfolio/', priority: .8 },
		{ route: '/fr/portfolio/', priority: .8 },
		{ route: '/about/', priority: .8 },
		{ route: '/fr/about/', priority: .8 },
		{ route: '/blog/', priority: .8 },
		{ route: '/fr/blog/', priority: .8 }
	];

	let sitemap = `
		<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
			${pages.map(page => `
				<url>
					<loc>${`${ENV}${page.route}`}</loc>
					<priority>${page.priority || 1}</priority>
				</url>
			`).join('')}
		</urlset>
	`;

	sitemap = new XmlBeautify({ parser: DOMParser }).beautify(sitemap);

	fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSiteMap();