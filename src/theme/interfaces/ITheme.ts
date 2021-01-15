interface ITheme {
	global: {
        background: string;
		color: string;
		borderColor: string;
		darkModeSwitch: {
			background: string;
			onColor: string;
		};
		header: {
			iconColor: string;
			options: {
                languages: {
					activeBackground: string;
					activeColor: string;
					background: string;
                };
            }
			sideMenu: {
                background: string;
                borderColor: string;
            }
		}
		loadingBackground: string;
    }
}

export type {
    ITheme
};