const { readdirSync, statSync } = require('fs');
const path = require("path");

/**
 * Returns the pages.
 */
const getPages = () => {
	const articles = goThroughRecursive(path.join(__dirname, '../../docs/blog'));
	const pages = goThroughRecursive(path.join(__dirname, '../../docs/pages'));
	
	return { 
		articles, 
		pages 
	};
};

/**
 * Go through recursive.
 * @param {string} directory - The directory. 
 * @param {{}} files - The files.
 */
const goThroughRecursive = (directory, files = {}) => {
	readdirSync(directory).forEach((file) => {
        const absolute = path.join(directory, file);
		const languages = {};

		readdirSync(absolute).forEach((language) => {
			const languagePath = path.join(absolute, language);
			languages[language.replace('.md', '')] = languagePath;
		});

		if (Object.keys(languages).length) {
			files[file] = languages;
		}
	});
	
	return files;
}

module.exports = {
	getPages
};