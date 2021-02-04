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

		/**
		 * The primary color.
		 */
		primaryColor: string;
	
	}
	
	/**
	 * The defaults.
	 */
	defaults: {
		
		/**
		 * The primary colors.
		 */
		primaryColor: string;

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

	/**
	 * The languages.
	 */
	languages: string[]

	/**
	 * The google.
	 */
	google: {

		/**
		 * The tracking ID.
		 */
		trackingID: string;

	};
	
	/**
	 * The urls.
	 */
	urls: {

		/**
		 * The consultation.
		 */
		consultation: string;

    }

}

export type {
    IConfiguration
};