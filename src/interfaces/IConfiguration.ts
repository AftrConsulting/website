import { MyTheme } from 'src/theme/types/MyTheme';

interface IConfiguration {
	
	/**
	 * The defaults.
	 */
	defaults: {
		
		/**
		 * The primary.
		 */
		primary: string;

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
		 * The google.
		 */
		google: {

			/**
			 * The universal google.
			 */
			universal: string;

		}

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
	
	/**
	 * The localStorage.
	 */
	localStorage: {
	
		/**
		 * The theme cookie.
		 */
		theme: string;

		/**
		 * The primary.
		 */
		primary: string;
	
	}

}

export type {
    IConfiguration
};