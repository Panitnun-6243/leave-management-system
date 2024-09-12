/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	trailingComma: 'all',
	printWidth: 120,
	useTabs: true,
	tabWidth: 4,
	semi: false,
	singleQuote: true,
	quoteProps: 'as-needed',
	jsxSingleQuote: false,
}

export default config
