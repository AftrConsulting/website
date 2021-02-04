/**
 * Returns if is production.
 */
const isProduction = (): boolean => process.env.NODE_ENV === 'production';

export {
	isProduction
}