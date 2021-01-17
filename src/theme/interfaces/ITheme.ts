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
		borderRadius: string;
		darkModeSwitch: {
			background: string;
		};
		header: {
			iconColor: string;
			logo: {
				background: string;
			};
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