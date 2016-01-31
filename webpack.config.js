module.exports = {
	entry: './app/scripts/app.js',
	output: {
		path: './build/js/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: 'build'
	}
};
