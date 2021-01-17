interface ISubHeaderItem {
	title: string;
	href?: string;
	subItems?: {
		title: string;
		href?: string;
	}[];
}

export type {
    ISubHeaderItem
};