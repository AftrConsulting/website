interface IProcess {
	pages: {
		articles: {
			[key in string]: {
				en?: string;
				fr?: string;
			}
		};
		pages: {
			[key in string]: {
				en?: string;
				fr?: string;
			}
		};
	};
	sitemapLocales: {};
}

export type {
    IProcess
};