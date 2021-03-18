interface ITheme {
	colors: {
		background: string;
		color: string;
		primary?: string;
		primaryHovered?: string;
	};
	global: {
        background: string;
		color: string;
		borderColor: string;
		borderRadius: string;
		darkModeSwitch: {
			background: string;
		};
		footer: {
			background: string;
			menuColor: string;
			icon: {
                background: string;
                color: string;
            };
        };
		header: {
			iconColor: string;
			logo: {
				background: string;
                language: {
                    color: string;
                    background: string;
                    backgroundHover: string;
                };
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
				goBackBackground: string;
            };
		};
		primaryColors: {
			color: string;
		}
	};
	pages: {
		home: {
			description: {
                background: string;
            };
            expertises: {
                cardBackground: string;
			};
			quotes: {
                background: string;
			};
        };
	};
}

export type {
    ITheme
};