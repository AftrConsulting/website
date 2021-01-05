import { MyTheme } from 'src/theme/types/MyTheme';

interface IConfiguration {

	/**
	 * The cookies.
	 */
	cookies: {
	
		/**
		 * The theme cookie.
		 */
		theme: string;
	
	}
	
	/**
	 * The defaults.
	 */
	defaults: {
		
		/**
		 * The theme name.
		 */
		themeName: MyTheme;
	
	}

	/**
	 * The environment.
	 */
	env: {

		/**
		 * The name.
		 */
        name: string;
	
	}

}

export type {
    IConfiguration
};