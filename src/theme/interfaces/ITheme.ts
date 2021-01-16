interface ITheme {
	colors: {
		background: string;
		color: string;
		primary: string;
	};
	global: {
        background: string;
		color: string;
		borderColor: string;
		darkModeSwitch: {
			background: string;
		};
		header: {
			iconColor: string;
			options: {
                languages: {
					activeColor: string;
					background: string;
                };
            };
			sideMenu: {
                background: string;
                borderColor: string;
            };
		};
		primaryColors: {
			color: string;
		}
    }
}

export type {
    ITheme
};