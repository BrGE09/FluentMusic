module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,js,mp3,jpeg,jpg,html,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};