interface IMenuItem {
	title: string;
	href?: string;
	subItems?: {
		title: string;
		href?: string;
	}[];
}

export type {
    IMenuItem
};