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
		 * The theme.
		 */
		theme: MyTheme;
	
	}

}

export type {
    IConfiguration
};