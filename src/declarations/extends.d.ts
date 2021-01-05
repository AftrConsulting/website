declare global {

	interface Window {

		/**
		 * The redux devtools extensions.
		 */
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		__REDUX_DEVTOOLS_EXTENSION__: () => any;

	}

}

export { };