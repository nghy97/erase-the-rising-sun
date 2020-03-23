module.exports = {
	publicPath:
		process.env.NODE_ENV === 'production'
			? '/erasing-rising-sun-flag-campaign/'
			: '/',
	outputDir: 'docs',
};
