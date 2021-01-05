declare global {

	interface Window {

		/**
		 * The redux devtools extensions.
		 */
		__REDUX_DEVTOOLS_EXTENSION__: () => never;

	}

}

export { };