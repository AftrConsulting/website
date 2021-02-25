declare global {

	interface Window {

		/**
		 * The redux devtools extensions.
		 */
		__REDUX_DEVTOOLS_EXTENSION__: () => never;

		/**
		 * The getinsights.io global object.
		 */
		insights: {
			init: (id: string) => void;
			trackPages: () => void;
		}

		/**
		 * The tawk.to api object.
		 */
		Tawk_API: {

			/**
			 * Maximizes the chat.
			 */
			maximize: () => void;

		}

	}

}

export { };