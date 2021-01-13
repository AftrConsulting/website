interface ITheme {
	global: {
        background: string;
		color: string;
		borderColor: string;
		header: {
			iconColor: string;
			sideMenu: {
                background: string;
                borderColor: string;
            }
        }
    }
}

export type {
    ITheme
};