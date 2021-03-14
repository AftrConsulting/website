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
	 * The general.
	 */
	general: {

		/**
		 * The consultation.
		 */
		consultation: string;

		/**
		 * The email.
		 */
		email: string;

		/**
		 * The github.
		 */
		github: string;

		/**
		 * The facebook.
		 */
		facebook: string;

		/**
		 * The linkedIn.
		 */
		linkedIn: string;

		/**
		 * The logo.
		 */
		logo: string;

    }

}

export type {
    IConfiguration
};